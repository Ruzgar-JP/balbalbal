import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

// ─── CORS ───────────────────────────────────────────────────────────────────
function cors(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

// ─── Google Sheets Entegrasyonu ──────────────────────────────────────────────
// Google Apps Script Web App URL'si .env dosyasında GOOGLE_SHEET_WEBHOOK_URL
// olarak tanımlanmalıdır.
// Örnek: GOOGLE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/XXX/exec
async function sendToGoogleSheets(type, data) {
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL
  if (!webhookUrl) {
    console.warn('[Google Sheets] GOOGLE_SHEET_WEBHOOK_URL tanımlı değil, atlanıyor.')
    return { ok: false, reason: 'no_url' }
  }
  try {
    // Google Apps Script URL'leri genellikle bir 302 yönlendirmesi yapar,
    // bu yüzden redirect: 'follow' zorunludur.
    const res = await fetch(webhookUrl, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain' }, // Apps Script'te JSON parse sorunlarını önler
      body: JSON.stringify({ type, data }),
    })
    const text = await res.text()
    if (res.ok) {
      console.log(`[Google Sheets] ${type} başarıyla gönderildi.`)
      return { ok: true }
    } else {
      console.error(`[Google Sheets] Hata ${res.status}:`, text)
      return { ok: false, status: res.status, body: text }
    }
  } catch (err) {
    console.error('[Google Sheets] Bağlantı hatası:', err.message)
    return { ok: false, error: err.message }
  }
}

// ─── OPTIONS (preflight) ─────────────────────────────────────────────────────
export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 200 }))
}

// ─── Ana Route Handler ───────────────────────────────────────────────────────
async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    // GET / — API durum kontrolü
    if ((route === '/' || route === '/root') && method === 'GET') {
      return cors(NextResponse.json({
        message: 'Novatrix Markets API',
        status: 'ok',
        version: '2.0.0',
        storage: 'google_sheets',
        endpoints: ['/api/contact', '/api/leads', '/api/newsletter'],
      }))
    }

    // ── POST /api/contact — Genel iletişim formu ─────────────────────────────
    if (route === '/contact' && method === 'POST') {
      const body = await request.json()
      const required = ['name', 'email', 'message']
      for (const k of required) {
        if (!body?.[k] || String(body[k]).trim() === '') {
          return cors(NextResponse.json({ error: `${k} alanı zorunludur` }, { status: 400 }))
        }
      }
      const doc = {
        id: uuidv4(),
        type: 'contact',
        name: String(body.name).trim(),
        email: String(body.email).trim().toLowerCase(),
        phone: body.phone ? String(body.phone).trim() : '',
        subject: body.subject ? String(body.subject).trim() : 'Genel',
        message: String(body.message).trim(),
        createdAt: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
      }
      sendToGoogleSheets('contact', doc).catch(err =>
        console.error('[Google Sheets] contact error:', err)
      )
      return cors(NextResponse.json({ success: true, data: doc }))
    }

    // ── POST /api/leads — Hesap açılış talepleri (demo / live) ───────────────
    if (route === '/leads' && method === 'POST') {
      const body = await request.json()
      const required = ['fullName', 'email', 'accountType']
      for (const k of required) {
        if (!body?.[k] || String(body[k]).trim() === '') {
          return cors(NextResponse.json({ error: `${k} alanı zorunludur` }, { status: 400 }))
        }
      }
      const doc = {
        id: uuidv4(),
        type: 'lead',
        fullName: String(body.fullName).trim(),
        email: String(body.email).trim().toLowerCase(),
        phone: body.phone ? String(body.phone).trim() : '',
        country: body.country ? String(body.country).trim() : 'Türkiye',
        accountType: String(body.accountType).trim(),
        mode: body.mode === 'live' ? 'Gerçek Hesap' : 'Demo Hesap',
        leverage: body.leverage || '1:500',
        platform: body.platform || 'MT5',
        agreed: body.agreed ? 'Evet' : 'Hayır',
        createdAt: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
      }
      sendToGoogleSheets('lead', doc).catch(err =>
        console.error('[Google Sheets] leads error:', err)
      )
      return cors(NextResponse.json({ success: true, data: doc }))
    }

    // ── POST /api/newsletter — Bülten abonelik ───────────────────────────────
    if (route === '/newsletter' && method === 'POST') {
      const body = await request.json()
      if (!body?.email) {
        return cors(NextResponse.json({ error: 'email gerekli' }, { status: 400 }))
      }
      const doc = {
        email: String(body.email).trim().toLowerCase(),
        createdAt: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
      }
      sendToGoogleSheets('newsletter', doc).catch(err =>
        console.error('[Google Sheets] newsletter error:', err)
      )
      return cors(NextResponse.json({ success: true }))
    }

    return cors(NextResponse.json({ error: `Route ${route} bulunamadı` }, { status: 404 }))
  } catch (error) {
    console.error('[API] Beklenmedik hata:', error)
    return cors(NextResponse.json({ error: 'Sunucu hatası oluştu' }, { status: 500 }))
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute

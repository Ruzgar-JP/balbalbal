import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'
import { NextResponse } from 'next/server'

let client
let db

async function connectToMongo() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL)
    await client.connect()
    db = client.db(process.env.DB_NAME || 'capital_market')
  }
  return db
}

function cors(response) {
  response.headers.set('Access-Control-Allow-Origin', process.env.CORS_ORIGINS || '*')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  return response
}

export async function OPTIONS() {
  return cors(new NextResponse(null, { status: 200 }))
}

async function handleRoute(request, { params }) {
  const { path = [] } = params
  const route = `/${path.join('/')}`
  const method = request.method

  try {
    const db = await connectToMongo()

    if ((route === '/' || route === '/root') && method === 'GET') {
      return cors(NextResponse.json({
        message: 'Novatrix Markets API',
        status: 'ok',
        version: '1.0.0',
        endpoints: ['/api/contact', '/api/leads', '/api/newsletter'],
      }))
    }

    // POST /api/contact — Genel iletişim formu
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
        createdAt: new Date(),
      }
      await db.collection('contact_messages').insertOne(doc)
      const { _id, ...clean } = doc
      return cors(NextResponse.json({ success: true, data: clean }))
    }

    // POST /api/leads — Hesap açılış talepleri (demo / live)
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
        country: body.country ? String(body.country).trim() : 'TR',
        accountType: String(body.accountType).trim(),
        mode: body.mode === 'live' ? 'live' : 'demo',
        leverage: body.leverage || '1:500',
        platform: body.platform || 'MT5',
        agreed: !!body.agreed,
        createdAt: new Date(),
      }
      await db.collection('leads').insertOne(doc)
      const { _id, ...clean } = doc
      return cors(NextResponse.json({ success: true, data: clean }))
    }

    // GET /api/leads — (admin) son talepler
    if (route === '/leads' && method === 'GET') {
      const rows = await db.collection('leads').find({}).sort({ createdAt: -1 }).limit(100).toArray()
      return cors(NextResponse.json(rows.map(({ _id, ...r }) => r)))
    }

    // POST /api/newsletter — Bülten abonelik
    if (route === '/newsletter' && method === 'POST') {
      const body = await request.json()
      if (!body?.email) return cors(NextResponse.json({ error: 'email gerekli' }, { status: 400 }))
      const doc = {
        id: uuidv4(),
        type: 'newsletter',
        email: String(body.email).trim().toLowerCase(),
        createdAt: new Date(),
      }
      await db.collection('newsletter').updateOne({ email: doc.email }, { $setOnInsert: doc }, { upsert: true })
      return cors(NextResponse.json({ success: true }))
    }

    // Status endpoints kept for backward compatibility
    if (route === '/status' && method === 'POST') {
      const body = await request.json()
      if (!body.client_name) return cors(NextResponse.json({ error: 'client_name is required' }, { status: 400 }))
      const statusObj = { id: uuidv4(), client_name: body.client_name, timestamp: new Date() }
      await db.collection('status_checks').insertOne(statusObj)
      return cors(NextResponse.json(statusObj))
    }
    if (route === '/status' && method === 'GET') {
      const rows = await db.collection('status_checks').find({}).limit(1000).toArray()
      return cors(NextResponse.json(rows.map(({ _id, ...r }) => r)))
    }

    return cors(NextResponse.json({ error: `Route ${route} not found` }, { status: 404 }))
  } catch (error) {
    console.error('API Error:', error)
    return cors(NextResponse.json({ error: 'Internal server error' }, { status: 500 }))
  }
}

export const GET = handleRoute
export const POST = handleRoute
export const PUT = handleRoute
export const DELETE = handleRoute
export const PATCH = handleRoute

export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="section-hero relative overflow-hidden min-h-[260px] flex items-center">
      <div className="container py-16 md:py-20 text-left">
        {eyebrow && (
          <div className="chip"><span className="chip-dot" /> {eyebrow}</div>
        )}
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary tracking-tight max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}
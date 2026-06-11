export default function SectionHeading({ eyebrow, title, description, align = 'left', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'text-center mx-auto' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <div className="chip">
          <span className="chip-dot" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-brand-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  )
}

export default function SectionHead({ eyebrow, title, desc, center = true }) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block font-heading font-semibold text-sm tracking-wider uppercase text-accent">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl text-primary tracking-tight">
        {title}
      </h2>
      {desc && (
        <p className="mt-3 text-slate-500 text-lg leading-relaxed">{desc}</p>
      )}
    </div>
  )
}

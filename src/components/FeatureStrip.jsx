import { FEATURES } from '../data/data'

export default function FeatureStrip() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((f, i) => {
            const Ico = f.icon
            return (
              <div
                key={f.title}
                className="flex items-center gap-3"
                data-aos="fade-up"
                data-aos-delay={i * 80}
              >
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Ico size={22} stroke={2} />
                </span>
                <div className="leading-tight">
                  <div className="font-heading font-semibold text-[15px] text-slate-800">{f.title}</div>
                  <div className="text-xs text-slate-500">{f.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

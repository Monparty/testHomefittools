import Icon from './ui/Icon'
import { PERSONAS } from '../data/data'

export default function Personas() {
  return (
    <section id="personas" className="relative py-16 sm:py-20 bg-primary text-white overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40"></div>
      <div className="absolute -bottom-24 right-0 w-96 h-96 rounded-full bg-accent/15 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center" data-aos="fade-up">
          <span className="inline-block font-heading font-semibold text-sm tracking-wider uppercase text-accent">
            เลือกง่ายในไม่กี่คลิก
          </span>
          <h2 className="mt-2 font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">
            สินค้าเหมาะกับใคร?
          </h2>
          <p className="mt-3 text-white/75 text-lg">
            บอกเราว่าคุณคือใคร แล้วเราจะจัดเซ็ตอุปกรณ์ที่เหมาะกับเป้าหมายของคุณ
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {PERSONAS.map((p, i) => {
            const Ico = p.icon
            const featured = p.featured
            return (
              <div
                key={p.key}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className={`relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  featured
                    ? 'bg-white text-slate-800 shadow-2xl lg:-mt-4 lg:mb-4 ring-2 ring-accent'
                    : 'bg-white/10 ring-1 ring-white/15 backdrop-blur-sm hover:bg-white/15'
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-heading font-bold text-white shadow-lg whitespace-nowrap">
                    แนะนำมากที่สุด
                  </span>
                )}
                <span
                  className={`grid place-items-center w-16 h-16 rounded-2xl ${
                    featured ? 'bg-accent/10 text-accent' : 'bg-accent text-white'
                  }`}
                >
                  <Ico size={32} stroke={2} />
                </span>

                <h3 className={`mt-5 font-heading font-extrabold text-2xl ${featured ? 'text-primary' : 'text-white'}`}>
                  {p.title}
                </h3>
                <p className="mt-1 font-heading font-medium text-sm text-accent">{p.tag}</p>
                <p className={`mt-3 text-[15px] leading-relaxed ${featured ? 'text-slate-600' : 'text-white/75'}`}>
                  {p.desc}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-2.5 text-[15px]">
                      <span
                        className={`grid place-items-center w-5 h-5 rounded-full shrink-0 ${
                          featured ? 'bg-primary text-white' : 'bg-white text-primary'
                        }`}
                      >
                        <Icon.check size={13} stroke={3} />
                      </span>
                      <span className={featured ? 'text-slate-700' : 'text-white/90'}>{it}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`mt-6 w-full rounded-xl py-3 font-heading font-semibold transition active:scale-95 ${
                    featured
                      ? 'bg-accent text-white hover:bg-accent-700 shadow-lg shadow-accent/25'
                      : 'bg-white text-primary hover:bg-white/90'
                  }`}
                >
                  ดูเซ็ตที่แนะนำ
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

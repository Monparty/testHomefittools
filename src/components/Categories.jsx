import SectionHead from './ui/SectionHead'
import Icon from './ui/Icon'
import { CATEGORIES } from '../data/data'

export default function Categories() {
  const scrollToProducts = (e) => {
    e.preventDefault()
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="categories" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHead
            eyebrow="เลือกตามที่ใช่"
            title="หมวดหมู่สินค้าทั้งหมด"
            desc="ค้นหาอุปกรณ์ที่ตรงกับเป้าหมายของคุณ จากกว่า 700 รายการที่คัดสรรมาแล้ว"
          />
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((c, i) => {
            const Ico = c.icon
            return (
              <a
                key={c.key}
                href="#products"
                onClick={scrollToProducts}
                data-aos="fade-up"
                data-aos-delay={i * 60}
                className="group relative rounded-2xl border border-slate-100 bg-white p-5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="grid place-items-center w-14 h-14 rounded-xl bg-primary-50 text-primary group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Ico size={28} stroke={2} />
                </span>
                <h3 className="mt-4 font-heading font-semibold text-[15px] text-slate-800 leading-snug group-hover:text-primary transition">
                  {c.name}
                </h3>
                <p className="mt-1 text-sm text-slate-400">{c.count} รายการ</p>
                <span className="absolute top-5 right-5 text-slate-300 group-hover:text-accent group-hover:translate-x-0.5 transition">
                  <Icon.chevron size={18} className="-rotate-90" />
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

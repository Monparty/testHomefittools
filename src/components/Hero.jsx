import { useState } from 'react'
import Icon from './ui/Icon'
import { POPULAR_SEARCH, STATS } from '../data/data'
import img1 from '../public/images/img1.png'

export default function Hero() {
  const [q, setQ] = useState('')

  const submit = (e) => {
    e.preventDefault()
    document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="top" className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 dot-grid opacity-60"></div>
      <div className="absolute -top-24 -right-24 w-[460px] h-[460px] rounded-full bg-accent/20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-primary-100/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* left copy */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 px-3.5 py-1.5 text-sm font-medium">
              <Icon.flame size={16} stroke={2.4} className="text-accent" />
              ส่งฟรีทั่วไทย • ผ่อน 0% นาน 10 เดือน
            </span>

            <h1 className="mt-5 font-heading font-extrabold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.08]">
              สร้างยิมในบ้านคุณ<br className="hidden sm:block" />
              ด้วยอุปกรณ์ <span className="text-accent">เกรดมืออาชีพ</span>
            </h1>

            <p className="mt-5 text-lg text-white/80 max-w-xl leading-relaxed">
              รวมอุปกรณ์ออกกำลังกายครบทุกหมวด ตั้งแต่ลู่วิ่ง ดัมเบล โยคะ ไปจนถึงอาหารเสริม
              คัดคุณภาพ รับประกันยาว พร้อมทีมผู้เชี่ยวชาญช่วยเลือกให้เหมาะกับคุณ
            </p>

            <form onSubmit={submit} className="mt-7 max-w-xl">
              <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-2xl shadow-primary-900/30">
                <span className="pl-3 text-slate-400">
                  <Icon.search size={22} stroke={2.2} />
                </span>
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  type="text"
                  placeholder="ค้นหาสินค้า เช่น ลู่วิ่ง, ดัมเบล, เวย์โปรตีน…"
                  className="flex-1 bg-transparent text-slate-800 placeholder:text-slate-400 outline-none text-[15px] py-2"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 sm:px-6 py-3 font-heading font-semibold text-white hover:bg-accent-700 active:scale-95 transition shrink-0"
                >
                  <Icon.search size={18} stroke={2.4} className="sm:hidden" />
                  <span className="hidden sm:inline">ค้นหา</span>
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-sm text-white/60">ยอดนิยม:</span>
                {POPULAR_SEARCH.map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setQ(t)}
                    className="rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/15 px-3 py-1 text-sm transition"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </form>
          </div>

          {/* right visual */}
          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="150">
            <div className="relative rounded-3xl bg-white/10 ring-1 ring-white/15 p-3 backdrop-blur-sm">
              <img src={img1} className="aspect-[4/5] rounded-2xl grid place-items-center text-center overflow-hidden object-cover" alt="" />

              {/* floating badge */}
              <div className="absolute -left-3 -bottom-3 sm:-left-5 sm:-bottom-5 rounded-2xl bg-white text-slate-800 shadow-xl px-4 py-3 flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
                  <Icon.star size={20} stroke={2.2} />
                </span>
                <div className="leading-tight">
                  <div className="font-heading font-bold text-lg">4.9/5</div>
                  <div className="text-xs text-slate-500">รีวิวจริง 12,400+ รายการ</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* stats strip */}
        <div
          className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/10 ring-1 ring-white/15"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {STATS.map((s) => (
            <div key={s.label} className="bg-primary px-5 py-5 text-center">
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">{s.value}</div>
              <div className="mt-1 text-sm text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

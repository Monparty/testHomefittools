import { useState, useEffect } from 'react'
import Icon from './ui/Icon'

function useCountdownToMidnight() {
  const calc = () => {
    const now = new Date()
    const end = new Date(now)
    end.setHours(23, 59, 59, 999)
    const diff = Math.max(0, Math.floor((end - now) / 1000))
    return {
      h: Math.floor(diff / 3600),
      m: Math.floor((diff % 3600) / 60),
      s: diff % 60,
    }
  }
  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

function TimeBox({ value, label }) {
  const v = String(value).padStart(2, '0')
  return (
    <div className="text-center">
      <div className="font-heading font-bold text-2xl sm:text-3xl tabular-nums w-14 sm:w-16 py-2 rounded-xl bg-white/15 ring-1 ring-white/20">
        {v}
      </div>
      <div className="mt-1.5 text-[11px] sm:text-xs text-white/70">{label}</div>
    </div>
  )
}

const deals = [
  { name: 'ลู่วิ่งไฟฟ้า ProRun X9', off: 25, price: 14900, icon: Icon.treadmill },
  { name: 'ชุดดัมเบลปรับน้ำหนัก', off: 27, price: 6490, icon: Icon.dumbbell },
  { name: 'เวย์โปรตีน Isolate 2 ปอนด์', off: 24, price: 1290, icon: Icon.supplement },
]

export default function Promo() {
  const { h, m, s } = useCountdownToMidnight()

  return (
    <section id="promo" className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-3xl bg-primary text-white p-6 sm:p-10 lg:p-12"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 dot-grid opacity-50"></div>
          <div className="absolute -top-16 -right-10 w-80 h-80 rounded-full bg-accent/25 blur-3xl"></div>

          <div className="relative grid lg:grid-cols-12 gap-8 items-center">
            {/* left: headline + timer */}
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-heading font-semibold shadow-lg shadow-accent/30 animate-pulse">
                <Icon.flame size={16} stroke={2.4} />
                ลดวันนี้เท่านั้น
              </span>
              <h2 className="mt-4 font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
                โปรโมชั่นพิเศษ<br />Flash Sale รายวัน
              </h2>
              <p className="mt-3 text-white/80 text-lg">
                ลดสูงสุด 40% เฉพาะวันนี้ — หมดเวลาแล้วราคากลับเป็นปกติทันที
              </p>

              <div className="mt-6">
                <div className="flex items-center gap-2 text-sm text-white/70 mb-2">
                  <Icon.clock size={16} /> เหลือเวลาอีก
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <TimeBox value={h} label="ชั่วโมง" />
                  <span className="font-heading font-bold text-2xl text-white/50 -mt-5">:</span>
                  <TimeBox value={m} label="นาที" />
                  <span className="font-heading font-bold text-2xl text-white/50 -mt-5">:</span>
                  <TimeBox value={s} label="วินาที" />
                </div>
              </div>
            </div>

            {/* right: deal cards */}
            <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
              {deals.map((d, i) => {
                const Ico = d.icon
                return (
                  <div
                    key={i}
                    className="rounded-2xl bg-white text-slate-800 p-5 shadow-xl hover:-translate-y-1 transition"
                    data-aos="zoom-in"
                    data-aos-delay={i * 100}
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary-50 text-primary">
                        <Ico size={24} stroke={2} />
                      </span>
                      <span className="rounded-lg bg-accent/10 text-accent font-heading font-bold text-sm px-2.5 py-1">
                        -{d.off}%
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading font-semibold text-[15px] leading-snug min-h-[44px]">{d.name}</h3>
                    <div className="mt-2 font-heading font-extrabold text-xl text-primary">
                      ฿{d.price.toLocaleString()}
                    </div>
                    <button
                      onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                      className="mt-3 w-full rounded-xl bg-accent py-2.5 font-heading font-semibold text-white text-sm hover:bg-accent-700 transition"
                    >
                      คว้าดีลนี้
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { useState } from 'react'
import SectionHead from './ui/SectionHead'
import Icon from './ui/Icon'
import { FAQS } from '../data/data'

function FaqItem({ item, open, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-colors ${
        open ? 'border-primary/30 bg-primary-50/40' : 'bg-white'
      }`}
      style={{ borderColor: open ? undefined : '#e7ecf2' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-5"
      >
        <span className="font-heading font-semibold text-[16px] sm:text-lg text-slate-800">{item.q}</span>
        <span
          className={`grid place-items-center w-8 h-8 rounded-full shrink-0 transition-all duration-300 ${
            open ? 'bg-accent text-white rotate-180' : 'bg-primary-50 text-primary'
          }`}
        >
          <Icon.chevron size={18} stroke={2.4} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 sm:px-6 pb-5 text-slate-600 leading-relaxed text-[15px]">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div data-aos="fade-up">
          <SectionHead
            eyebrow="ไขทุกข้อสงสัย"
            title="คำถามที่พบบ่อย"
            desc="รวมคำถามยอดฮิตก่อนตัดสินใจ หากยังไม่พบคำตอบ ทักไลน์เราได้เลย"
          />
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 60}>
              <FaqItem
                item={f}
                open={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
              />
            </div>
          ))}
        </div>

        <div
          className="mt-8 rounded-2xl bg-primary-50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          data-aos="fade-up"
        >
          <div>
            <h3 className="font-heading font-bold text-lg text-primary">ยังมีคำถามอื่นอีกไหม?</h3>
            <p className="text-slate-600 text-sm mt-0.5">ทีมผู้เชี่ยวชาญพร้อมตอบทุกวัน 09:00–21:00 น.</p>
          </div>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-heading font-semibold text-white hover:bg-accent-700 transition shrink-0"
          >
            <Icon.chat size={18} stroke={2.2} /> ติดต่อทีมงาน
          </a>
        </div>
      </div>
    </section>
  )
}

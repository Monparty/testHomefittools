import { useState } from 'react'
import SectionHead from './ui/SectionHead'
import Icon from './ui/Icon'
import { PRODUCTS } from '../data/data'

const CAT_COLORS = {
  'ลู่วิ่งไฟฟ้า': { from: '#dbeafe', to: '#bfdbfe', icon: '#2563eb' },
  'ดัมเบล':       { from: '#ffedd5', to: '#fed7aa', icon: '#ea580c' },
  'จักรยาน':      { from: '#dcfce7', to: '#bbf7d0', icon: '#16a34a' },
  'บาร์เบล':      { from: '#ede9fe', to: '#ddd6fe', icon: '#7c3aed' },
  'โยคะ':         { from: '#fce7f3', to: '#fbcfe8', icon: '#db2777' },
  'ชกมวย':        { from: '#fee2e2', to: '#fecaca', icon: '#dc2626' },
  'อาหารเสริม':   { from: '#fef9c3', to: '#fef08a', icon: '#ca8a04' },
  'เครื่องวัด':   { from: '#e2e8f0', to: '#cbd5e1', icon: '#475569' },
}

const PRICE_RANGES = [
  { label: 'ทุกราคา',       min: 0,     max: Infinity },
  { label: 'ต่ำกว่า 1,000',  min: 0,     max: 999      },
  { label: '1,000 – 5,000', min: 1000,  max: 5000     },
  { label: '5,001 – 10,000',min: 5001,  max: 10000    },
  { label: 'มากกว่า 10,000',min: 10001, max: Infinity  },
]

const ALL_CATS = ['ทั้งหมด', ...new Set(PRODUCTS.map((p) => p.cat))]

function Stars({ rating }) {
  return (
    <span className="inline-flex items-center gap-1 text-amber-400">
      <Icon.star size={13} stroke={2} className="fill-amber-400" />
      <span className="text-sm font-semibold text-slate-700">{rating.toFixed(1)}</span>
    </span>
  )
}

function ProductCard({ p, inCart, onAdd }) {
  const Ico = p.icon
  const discount = Math.round((1 - p.price / p.old) * 100)
  const isBestSeller = p.badge === 'ขายดี'
  const colors = CAT_COLORS[p.cat] || { from: '#f1f5f9', to: '#e2e8f0', icon: '#64748b' }

  return (
    <div className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200 hover:-translate-y-1.5 transition-all duration-300 border border-slate-100">
      {/* Accent bar */}
      <div className={`h-1 w-full ${isBestSeller ? 'bg-accent' : 'bg-primary'}`} />

      {/* Image / Icon area */}
      <div
        className="relative flex items-center justify-center py-8"
        style={{
          background: `linear-gradient(135deg, ${colors.from} 0%, ${colors.to} 100%)`,
        }}
      >
        {/* Soft highlight */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 65% 25%, rgba(255,255,255,0.6) 0%, transparent 55%)',
          }}
        />

        {/* Icon box */}
        <div
          className="relative grid place-items-center w-[88px] h-[88px] rounded-2xl bg-white shadow-md group-hover:scale-110 group-hover:shadow-lg transition-all duration-300"
          style={{ color: colors.icon }}
        >
          <Ico size={44} stroke={1.6} />
        </div>

        {/* Badge */}
        <span
          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-heading font-bold shadow-sm ${
            isBestSeller ? 'bg-accent text-white' : 'bg-primary text-white'
          }`}
        >
          {p.badge}
        </span>

        {/* Discount tag */}
        <span className="absolute top-3 right-3 flex items-center gap-0.5 rounded-full bg-white px-2.5 py-1 text-xs font-heading font-bold text-accent shadow border border-accent/10">
          <Icon.flame size={12} stroke={2} className="text-accent" />
          -{discount}%
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-4 gap-0.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{p.cat}</span>

        <h3 className="font-heading font-semibold text-[15px] text-slate-800 leading-snug min-h-[44px] line-clamp-2">
          {p.name}
        </h3>

        <div className="mt-2 flex items-center justify-between">
          <Stars rating={p.rating} />
          <span className="text-xs text-slate-400">ขายแล้ว {p.sold.toLocaleString()} ชิ้น</span>
        </div>

        <div className="mt-3 flex items-end gap-2">
          <span className="font-heading font-extrabold text-2xl text-primary leading-none">
            ฿{p.price.toLocaleString()}
          </span>
          <span className="text-sm text-slate-400 line-through mb-0.5">฿{p.old.toLocaleString()}</span>
        </div>

        <button
          onClick={() => onAdd(p.id)}
          className={`mt-3 inline-flex items-center justify-center gap-2 rounded-xl py-2.5 font-heading font-semibold text-sm transition-all duration-200 active:scale-95 ${
            inCart
              ? 'bg-primary/5 text-primary ring-1 ring-primary/20'
              : 'bg-accent text-white hover:bg-accent-700 shadow-lg shadow-accent/25'
          }`}
        >
          {inCart ? (
            <>
              <Icon.check size={18} stroke={2.4} />
              เพิ่มลงตะกร้าแล้ว
            </>
          ) : (
            <>
              <Icon.cart size={18} stroke={2.2} />
              หยิบใส่ตะกร้า
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default function Products() {
  const [cart, setCart] = useState({})
  const [activeCat, setActiveCat] = useState('ทั้งหมด')
  const [activePriceIdx, setActivePriceIdx] = useState(0)

  const add = (id) => setCart((c) => ({ ...c, [id]: true }))

  const { min, max } = PRICE_RANGES[activePriceIdx]
  const filtered = PRODUCTS.filter((p) => {
    const catOk = activeCat === 'ทั้งหมด' || p.cat === activeCat
    const priceOk = p.price >= min && p.price <= max
    return catOk && priceOk
  })

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          data-aos="fade-up"
        >
          <SectionHead
            center={false}
            eyebrow="ลูกค้าเลือกมากที่สุด"
            title="สินค้าที่ได้รับความนิยม"
            desc="รวมอุปกรณ์ขายดีประจำสัปดาห์ การันตีด้วยรีวิวจริงจากผู้ใช้งาน"
          />
          <a
            href="#categories"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#categories')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="hidden sm:inline-flex items-center gap-1.5 font-heading font-semibold text-primary hover:text-accent transition shrink-0"
          >
            ดูสินค้าทั้งหมด <Icon.chevron size={18} className="-rotate-90" />
          </a>
        </div>

        {/* Filter panel */}
        <div
          className="mt-8 rounded-2xl bg-white border border-slate-100 shadow-sm p-5 space-y-4"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          {/* Category */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
              ประเภทสินค้า
            </p>
            <div className="flex flex-wrap gap-2">
              {ALL_CATS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
                    activeCat === cat
                      ? 'bg-primary text-white shadow-md shadow-primary/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100" />

          {/* Price range */}
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2.5">
              ช่วงราคา
            </p>
            <div className="flex flex-wrap gap-2">
              {PRICE_RANGES.map((r, i) => (
                <button
                  key={r.label}
                  onClick={() => setActivePriceIdx(i)}
                  className={`px-3.5 py-1.5 rounded-full text-sm font-heading font-semibold transition-all duration-200 ${
                    activePriceIdx === i
                      ? 'bg-accent text-white shadow-md shadow-accent/25'
                      : 'bg-slate-100 text-slate-600 hover:bg-accent/10 hover:text-accent'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result count */}
        <p className="mt-5 text-sm text-slate-500" data-aos="fade-up" data-aos-delay="80">
          พบ{' '}
          <span className="font-semibold text-primary">{filtered.length}</span>{' '}
          รายการ
          {activeCat !== 'ทั้งหมด' && (
            <> ใน <span className="font-semibold text-slate-700">"{activeCat}"</span></>
          )}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((p, i) => (
              <div key={p.id} data-aos="fade-up" data-aos-delay={i * 60}>
                <ProductCard p={p} inCart={!!cart[p.id]} onAdd={add} />
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center justify-center rounded-2xl bg-white border border-slate-100 py-16 text-slate-400">
            <div className="grid place-items-center w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 mb-4">
              <Icon.search size={32} stroke={1.5} />
            </div>
            <p className="font-heading font-semibold text-lg text-slate-700">ไม่พบสินค้าในหมวดนี้</p>
            <p className="text-sm mt-1">ลองเปลี่ยนประเภทหรือช่วงราคาเพื่อดูสินค้าอื่น</p>
            <button
              onClick={() => { setActiveCat('ทั้งหมด'); setActivePriceIdx(0) }}
              className="mt-5 px-5 py-2 rounded-xl bg-primary text-white text-sm font-heading font-semibold hover:bg-primary/90 transition"
            >
              ล้างตัวกรอง
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

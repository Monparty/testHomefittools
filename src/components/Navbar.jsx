import { useState, useEffect } from 'react'
import Logo from './ui/Logo'
import Icon from './ui/Icon'
import { NAV_LINKS } from '../data/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-md' : 'bg-white'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo />

          {/* desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="px-3.5 py-2 rounded-lg text-[15px] font-medium text-slate-600 hover:text-primary hover:bg-primary-50 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* right side */}
          <div className="flex items-center gap-2">
            <a
              href="#products"
              onClick={(e) => handleNav(e, '#products')}
              className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-[15px] font-heading font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-700 hover:-translate-y-0.5 active:translate-y-0 transition"
            >
              <Icon.cart size={18} stroke={2.2} />
              สั่งซื้อเลย
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="เมนู"
              className="lg:hidden grid place-items-center w-10 h-10 rounded-lg text-primary hover:bg-primary-50 transition"
            >
              {open ? <Icon.close size={24} /> : <Icon.menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 border-t border-slate-100 ${
          open ? 'max-h-[420px]' : 'max-h-0'
        }`}
      >
        <nav className="px-4 py-3 flex flex-col gap-1 bg-white">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-primary-50 hover:text-primary transition"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#products"
            onClick={(e) => handleNav(e, '#products')}
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 font-heading font-semibold text-white"
          >
            <Icon.cart size={18} stroke={2.2} /> สั่งซื้อเลย
          </a>
        </nav>
      </div>
    </header>
  )
}

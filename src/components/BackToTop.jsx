import { useState, useEffect } from 'react'
import Icon from './ui/Icon'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollUp}
      aria-label="กลับด้านบน"
      className={`fixed bottom-6 right-6 z-50 grid place-items-center w-12 h-12 rounded-full bg-accent text-white shadow-lg shadow-accent/40 hover:bg-accent-700 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Icon.chevron size={22} stroke={2.5} className="rotate-180" />
    </button>
  )
}

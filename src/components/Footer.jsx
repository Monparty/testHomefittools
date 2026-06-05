import Logo from './ui/Logo'
import Icon from './ui/Icon'

const cols = [
  {
    title: 'สินค้า',
    links: ['ลู่วิ่งไฟฟ้า', 'ดัมเบล & บาร์เบล', 'โยคะ & พิลาทิส', 'อาหารเสริม', 'ดูทั้งหมด'],
  },
  {
    title: 'บริการ',
    links: ['ติดตั้งถึงบ้าน', 'ผ่อน 0%', 'รับประกันสินค้า', 'ติดตามพัสดุ', 'นโยบายคืนสินค้า'],
  },
  {
    title: 'เกี่ยวกับเรา',
    links: ['เรื่องราว HFT', 'รีวิวจากลูกค้า', 'ร่วมงานกับเรา', 'บทความสุขภาพ', 'ติดต่อเรา'],
  },
]

function SocialBtn({ children }) {
  return (
    <a
      href="#"
      className="grid place-items-center w-10 h-10 rounded-xl bg-white/10 hover:bg-accent text-white transition"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* brand */}
          <div className="lg:col-span-4" data-aos="fade-up">
            <Logo light />
            <p className="mt-4 text-white/65 text-[15px] leading-relaxed max-w-sm">
              ร้านอุปกรณ์ออกกำลังกายครบวงจร คัดคุณภาพเกรดมืออาชีพ
              พร้อมบริการหลังการขายที่ดูแลคุณตลอดการใช้งาน
            </p>

            {/* newsletter */}
            <div className="mt-6 max-w-sm">
              <label className="text-sm text-white/70">รับส่วนลด & โปรโมชั่นใหม่ก่อนใคร</label>
              <form className="mt-2 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="อีเมลของคุณ"
                  className="flex-1 rounded-xl bg-white/10 ring-1 ring-white/15 px-4 py-2.5 text-sm placeholder:text-white/40 outline-none focus:ring-accent transition"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-accent px-4 py-2.5 font-heading font-semibold text-sm hover:bg-accent-700 transition shrink-0"
                >
                  สมัคร
                </button>
              </form>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              <SocialBtn><Icon.chat size={20} stroke={2} /></SocialBtn>
              <SocialBtn><Icon.mail size={20} stroke={2} /></SocialBtn>
              <SocialBtn><Icon.phone size={20} stroke={2} /></SocialBtn>
              <SocialBtn><Icon.heart size={20} stroke={2} /></SocialBtn>
            </div>
          </div>

          {/* link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {cols.map((col, i) => (
              <div key={col.title} data-aos="fade-up" data-aos-delay={i * 80}>
                <h4 className="font-heading font-semibold text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-white/65 hover:text-accent text-[15px] transition">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/55">
          <p>© 2026 HFT Co., Ltd. สงวนลิขสิทธิ์ทุกประการ</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">นโยบายความเป็นส่วนตัว</a>
            <a href="#" className="hover:text-white transition">เงื่อนไขการใช้งาน</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import Icon from '../components/ui/Icon'

export const NAV_LINKS = [
  { label: 'หมวดหมู่', href: '#categories' },
  { label: 'โปรโมชั่น', href: '#promo' },
  { label: 'สินค้าขายดี', href: '#products' },
  { label: 'เหมาะกับใคร', href: '#personas' },
  { label: 'คำถามที่พบบ่อย', href: '#faq' },
  { label: 'ติดต่อเรา', href: '#contact' },
]

export const CATEGORIES = [
  { key: 'treadmill', name: 'ลู่วิ่งไฟฟ้า', count: 42, icon: Icon.treadmill },
  { key: 'dumbbell', name: 'ดัมเบล & เคตเทิลเบล', count: 88, icon: Icon.dumbbell },
  { key: 'barbell', name: 'บาร์เบล & แผ่นน้ำหนัก', count: 64, icon: Icon.barbell },
  { key: 'yoga', name: 'โยคะ & พิลาทิส', count: 57, icon: Icon.yoga },
  { key: 'boxing', name: 'ชกมวย & คาร์ดิโอ', count: 31, icon: Icon.boxing },
  { key: 'bike', name: 'จักรยานออกกำลังกาย', count: 26, icon: Icon.bike },
  { key: 'band', name: 'ยางยืด & ฟังก์ชันนัล', count: 73, icon: Icon.band },
  { key: 'abs', name: 'เครื่องบริหารหน้าท้อง', count: 45, icon: Icon.abs },
  { key: 'supplement', name: 'อาหารเสริม & เวย์', count: 120, icon: Icon.supplement },
  { key: 'monitor', name: 'นาฬิกา & เครื่องวัดสุขภาพ', count: 38, icon: Icon.monitor },
]

export const POPULAR_SEARCH = ['ลู่วิ่งพับได้', 'ดัมเบลปรับน้ำหนัก', 'เสื่อโยคะ', 'เวย์โปรตีน', 'จักรยานสปิน']

export const PRODUCTS = [
  { id: 1, name: 'ลู่วิ่งไฟฟ้า ProRun X9 พับเก็บได้', cat: 'ลู่วิ่งไฟฟ้า', price: 14900, old: 19900, rating: 4.9, sold: 1240, badge: 'ขายดี', icon: Icon.treadmill },
  { id: 2, name: 'ชุดดัมเบลปรับน้ำหนัก 2.5–24 กก.', cat: 'ดัมเบล', price: 6490, old: 8900, rating: 4.8, sold: 2310, badge: 'ขายดี', icon: Icon.dumbbell },
  { id: 3, name: 'จักรยานสปินไบค์ Magnetic S5', cat: 'จักรยาน', price: 8990, old: 11500, rating: 4.7, sold: 870, badge: 'มาใหม่', icon: Icon.bike },
  { id: 4, name: 'เซ็ตบาร์เบลโอลิมปิก 100 กก.', cat: 'บาร์เบล', price: 12900, old: 15900, rating: 4.9, sold: 540, badge: 'ขายดี', icon: Icon.barbell },
  { id: 5, name: 'เสื่อโยคะ TPE หนา 8 มม. กันลื่น', cat: 'โยคะ', price: 590, old: 990, rating: 4.8, sold: 5120, badge: 'ขายดี', icon: Icon.yoga },
  { id: 6, name: 'กระสอบทรายมวย Heavy Bag 120 ซม.', cat: 'ชกมวย', price: 2390, old: 3290, rating: 4.6, sold: 410, badge: 'มาใหม่', icon: Icon.boxing },
  { id: 7, name: 'เวย์โปรตีน Isolate รส Chocolate 2 ปอนด์', cat: 'อาหารเสริม', price: 1290, old: 1690, rating: 4.9, sold: 3870, badge: 'ขายดี', icon: Icon.supplement },
  { id: 8, name: 'สมาร์ทวอทช์วัดหัวใจ & SpO2 FitBand Pro', cat: 'เครื่องวัด', price: 1990, old: 2790, rating: 4.7, sold: 1660, badge: 'มาใหม่', icon: Icon.monitor },
]

export const PERSONAS = [
  {
    key: 'beginner',
    title: 'ผู้เริ่มต้น',
    tag: 'เริ่มง่าย ไม่ต้องลงทุนเยอะ',
    desc: 'เพิ่งเริ่มออกกำลังกายที่บ้าน อยากได้อุปกรณ์ใช้ง่าย ราคาเข้าถึงได้ และไม่กินพื้นที่',
    items: ['เสื่อโยคะ & ยางยืด', 'ดัมเบลปรับน้ำหนัก', 'คอร์สสอนใช้งานฟรี'],
    icon: Icon.seedling,
  },
  {
    key: 'athlete',
    title: 'นักกีฬาจริงจัง',
    tag: 'อัปเกรดทุกการฝึก',
    desc: 'ฝึกหนักเป็นประจำ ต้องการอุปกรณ์เกรดยิม ทนทาน รองรับน้ำหนักสูง และโปรแกรมเฉพาะทาง',
    items: ['บาร์เบลโอลิมปิก & แร็ค', 'ลู่วิ่งมอเตอร์แรงสูง', 'อาหารเสริมครบเซ็ต'],
    icon: Icon.trophy,
    featured: true,
  },
  {
    key: 'senior',
    title: 'ผู้สูงอายุ',
    tag: 'ปลอดภัย ดูแลข้อต่อ',
    desc: 'เน้นการเคลื่อนไหวที่นุ่มนวล ปลอดภัยต่อข้อเข่าและหลัง พร้อมที่จับช่วยพยุงและเบาะรองรับ',
    items: ['จักรยานนั่งพิงหลัง', 'ยางยืดแรงต้านเบา', 'เครื่องวัดความดัน & ชีพจร'],
    icon: Icon.heart,
  },
]

export const FAQS = [
  { q: 'มีบริการจัดส่งและติดตั้งถึงบ้านไหม?', a: 'มีครับ เราจัดส่งทั่วประเทศ และมีทีมช่างติดตั้งฟรีสำหรับสินค้าชิ้นใหญ่ เช่น ลู่วิ่งและแร็คในเขตกรุงเทพฯ–ปริมณฑล ส่วนต่างจังหวัดมีคู่มือพร้อมวิดีโอสอนติดตั้งและทีมซัพพอร์ตทางไลน์' },
  { q: 'สินค้ารับประกันนานแค่ไหน?', a: 'อุปกรณ์ไฟฟ้า เช่น ลู่วิ่งและจักรยาน รับประกันมอเตอร์ 5 ปี และโครงสร้าง 2 ปี อุปกรณ์ทั่วไปรับประกัน 1 ปี เคลมง่ายผ่านศูนย์บริการของเราโดยตรง' },
  { q: 'ผ่อน 0% ได้กี่เดือน?', a: 'ผ่อน 0% นานสูงสุด 10 เดือน ผ่านบัตรเครดิตธนาคารที่ร่วมรายการ สำหรับยอดตั้งแต่ 3,000 บาทขึ้นไป เลือกแผนผ่อนได้ในขั้นตอนชำระเงิน' },
  { q: 'ถ้าสินค้ามีปัญหา เปลี่ยน-คืนได้ไหม?', a: 'เปลี่ยน-คืนได้ภายใน 7 วันหากสินค้าชำรุดจากการผลิต โดยสินค้าต้องอยู่ในสภาพสมบูรณ์พร้อมกล่องและอุปกรณ์ครบ เรารับผิดชอบค่าจัดส่งในการเปลี่ยนสินค้าให้' },
  { q: 'เลือกอุปกรณ์ไม่ถูก ปรึกษาได้ที่ไหน?', a: 'ทักไลน์ @HFT ได้เลยครับ ทีมผู้เชี่ยวชาญด้านฟิตเนสจะช่วยแนะนำอุปกรณ์ให้เหมาะกับเป้าหมาย พื้นที่บ้าน และงบประมาณของคุณ ฟรีไม่มีค่าใช้จ่าย' },
  { q: 'มีหน้าร้านให้ไปลองสินค้าจริงไหม?', a: 'มีโชว์รูมที่กรุงเทพฯ เปิดทุกวัน 10:00–20:00 น. สามารถเข้ามาทดลองใช้ลู่วิ่ง จักรยาน และอุปกรณ์ทุกชิ้นก่อนตัดสินใจได้เลย' },
]

export const STATS = [
  { end: 50000, suffix: '+', decimals: 0, separator: ',', label: 'ลูกค้าไว้วางใจ' },
  { end: 700, suffix: '+', decimals: 0, separator: '', label: 'รายการสินค้า' },
  { end: 4.9, suffix: '/5', decimals: 1, separator: '', label: 'คะแนนรีวิวเฉลี่ย' },
  { end: 24, suffix: ' ชม.', decimals: 0, separator: '', label: 'จัดส่งด่วน' },
]

export const FEATURES = [
  { icon: Icon.truck, title: 'ส่งฟรีทั่วไทย', desc: 'เมื่อสั่งครบ 1,500 บาท' },
  { icon: Icon.shield, title: 'รับประกันสูงสุด 5 ปี', desc: 'ศูนย์บริการดูแลเอง' },
  { icon: Icon.tools, title: 'ติดตั้งฟรีถึงบ้าน', desc: 'โดยทีมช่างมืออาชีพ' },
  { icon: Icon.chat, title: 'ปรึกษาฟรีโดยผู้เชี่ยวชาญ', desc: 'ทักไลน์ตอบไว 7 วัน' },
]

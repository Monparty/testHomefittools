import SectionHead from "./ui/SectionHead";
import Icon from "./ui/Icon";

const channels = [
    { icon: Icon.phone, label: "โทรศัพท์", value: "094-495-1811", sub: "ทุกวัน 09:00–21:00 น.", href: "tel:021234567" },
    { icon: Icon.chat, label: "LINE Official", value: "@homefittools", sub: "ตอบไวภายใน 5 นาที", href: "#" },
    {
        icon: Icon.mail,
        label: "อีเมล",
        value: "homefittools@gmail.com",
        sub: "ตอบกลับภายใน 24 ชม.",
        href: "mailto:hello@HFT.co.th",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-20 bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div data-aos="fade-up">
                    <SectionHead
                        eyebrow="พร้อมช่วยเสมอ"
                        title="ติดต่อเรา"
                        desc="สอบถามสินค้า ขอคำแนะนำ หรือนัดเข้าชมโชว์รูม ติดต่อได้ทุกช่องทาง"
                    />
                </div>

                <div className="mt-10 grid lg:flex gap-6 items-stretch">
                    {/* left: channels + address */}
                    <div className="flex flex-col gap-4 lg:flex-2">
                        <div className="grid sm:grid-cols-3 gap-4">
                            {channels.map((c, i) => {
                                const Ico = c.icon;
                                return (
                                    <a
                                        key={c.label}
                                        href={c.href}
                                        data-aos="fade-up"
                                        data-aos-delay={i * 80}
                                        className="rounded-2xl bg-white border border-slate-100 p-5 hover:shadow-lg hover:-translate-y-1 transition group flex items-center gap-4 lg:grid lg:gap-1"
                                    >
                                        <span className="grid place-items-center w-12 h-12 rounded-xl bg-primary-50 text-primary group-hover:bg-accent group-hover:text-white transition">
                                            <Ico size={24} stroke={2} />
                                        </span>
                                        <div>
                                            <div className="mt-3 text-xs text-slate-400">{c.label}</div>
                                            <div className="font-heading font-semibold text-[15px] text-slate-800">
                                                {c.value}
                                            </div>
                                            <div className="text-xs text-slate-400 mt-0.5">{c.sub}</div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        <div
                            className="rounded-2xl bg-primary text-white p-6 flex items-start gap-4"
                            data-aos="fade-up"
                        >
                            <span className="grid place-items-center w-12 h-12 rounded-xl bg-white/15 shrink-0">
                                <Icon.pin size={24} stroke={2} />
                            </span>
                            <div>
                                <div className="font-heading font-bold text-lg">
                                    HomeFitTools - ดัมเบล ม้านั่ง จักรยาน อุปกรณ์ออกกำลังกาย
                                </div>
                                <p className="mt-1 text-white/80 text-[15px] leading-relaxed">
                                    896 ถ. รามอินทรา แขวงคันนายาว เขตคันนายาว
                                    <br />
                                    กรุงเทพมหานคร 10230
                                </p>
                                <p className="mt-2 text-sm text-white/70 flex items-center gap-2">
                                    <Icon.clock size={15} /> เปิดทุกวัน 09:00–21:00 น.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* right: map placeholder */}
                    <div
                        className="rounded-2xl border w-full border-slate-100 bg-white p-3 lg:flex-1"
                        data-aos="fade-left"
                    >
                        <div className="w-full h-full rounded-xl grid place-items-center text-center overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15497.769742899633!2d100.6951414!3d13.8124509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6523a6826aef%3A0xd42eb60c308e989b!2zSG9tZUZpdFRvb2xzIC0g4LiU4Lix4Lih4LmA4Lia4LilIOC4oeC5ieC4suC4meC4seC5iOC4hyDguIjguLHguIHguKPguKLguLLguJkg4Lit4Li44Lib4LiB4Lij4LiT4LmM4Lit4Lit4LiB4LiB4Liz4Lil4Lix4LiH4LiB4Liy4Lii!5e0!3m2!1sth!2sth!4v1780684811446!5m2!1sth!2sth"
                                style={{ border: 0, width: "100%", height: "100%" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

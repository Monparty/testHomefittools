import Icon from "./Icon";
import logo from "../../public/images/logo.svg";

export default function Logo({ bg = false }) {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <a href="#top" onClick={scrollToTop} className="flex items-center gap-2.5 group">
            <span
                className={`flex font-heading font-extrabold tracking-tight p-1 rounded-md ${bg ? "" : "bg-primary"}`}
            >
                <img src={logo} alt="Logo" />
            </span>
        </a>
    );
}

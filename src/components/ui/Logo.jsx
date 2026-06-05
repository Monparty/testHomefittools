import Icon from "./Icon";
import logo from "../../public/images/logo.svg";

export default function Logo({ light = false }) {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <a href="#top" onClick={scrollToTop} className="flex items-center gap-2.5 group">
            <span
                className={`flex font-heading font-extrabold bg-primary tracking-tight p-1 rounded-md ${
                    light ? "text-white" : "text-primary"
                }`}
            >
                <img src={logo} alt="Logo" />
            </span>
        </a>
    );
}

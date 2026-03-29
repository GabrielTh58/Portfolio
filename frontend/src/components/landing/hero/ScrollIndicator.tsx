import { scrollToSection } from "@/utils/ScrollSuave";
import { IconArrowDown } from "@tabler/icons-react";
import Link from "next/link";

export default  function ScrollIndicator() {
    return (
        <div className="hidden absolute bottom-8 left-1/2 -translate-x-1/2 md:flex flex-col items-center">
            <span className="text-[10px] font-mono text-slate-500 mb-2 uppercase tracking-widest opacity-70">
                Scroll
            </span>
            <Link
                href="#sobre"
                onClick={(e) => scrollToSection(e, "#sobre")}               
                className="animate-bounce p-2 text-slate-400 hover:text-blue- transition-all cursor-pointer"
                aria-label="Rolar para a seção Sobre"
            >
                <IconArrowDown size={24} stroke={1.5} />
            </Link>
        </div>
    )
}
import { scrollToSection } from "@/utils/ScrollSuave";
import { IconArrowDown, IconMail } from "@tabler/icons-react";
import Link from "next/link";
export default function HeroActions() {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto px-4">
            <Link
                href="#contato"
                onClick={(e) => scrollToSection(e, "#contato")}
                className="group relative inline-flex items-center justify-center w-full sm:w-auto overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400
                 focus:ring-offset-2 focus:ring-offset-black transition-transform hover:scale-105"
            >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#0f172a_50%,#3b82f6_100%)] opacity-80" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-[#05070D]/90 backdrop-blur-xl px-8 py-4 text-sm font-bold
                    text-white gap-2 transition-colors hover:bg-black"
                >
                    <IconMail size={20} className="text-blue-400" />
                    Entrar em Contato
                </span>
            </Link>

            <Link
                href="#projetos"
                onClick={(e) => scrollToSection(e, "#projetos")}                
                className="group flex items-center justify-center w-full sm:w-auto gap-2 px-8 py-4 bg-transparent border border-zinc-700/80 hover:border-zinc-500
                    text-slate-300 hover:text-white rounded-xl font-bold transition-all backdrop-blur-sm cursor-pointer"
            >
                Ver Projetos
                <IconArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
            </Link>
        </div>
    )
}
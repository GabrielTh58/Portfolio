import RedesSociais from "@/components/shared/RedesSociais";
import { IconMail, IconMapPin } from "@tabler/icons-react";

interface ContatoLinksProps {
    isMobile: boolean;
}

export default function ContatoLinks({isMobile}: ContatoLinksProps) {
    
    if (isMobile) return <ContatoMobile />

    return (
        <div className="hidden lg:flex flex-col gap-6 mb-12">
            <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <IconMapPin className="text-blue-400" size={20} />
                </div>
                <div>
                    <p className="text-xs md:text-sm text-slate-500 font-mono">BASE</p>
                    <p className="text-sm md:text-base font-medium">Curitiba, PR </p>
                </div>
            </div>

            <a href="mailto:gabrieloliveira.dev.br@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <IconMail className="text-blue-400" size={20} />
                </div>
                <div className="break-all">
                    <p className="text-xs md:text-sm text-slate-500 font-mono">E-MAIL</p>
                    <p className="text-sm md:text-base font-medium line-clamp-1">gabrieloliveira.dev.br@gmail.com</p>
                </div>
            </a>
        </div>
    )
}    

function ContatoMobile() {
    return (
         <div className="flex lg:hidden flex-col gap-6 mt-4 w-full max-w-lg mx-auto">
            <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <IconMapPin className="text-blue-400" size={20} />
                </div>
                <div>
                    <p className="text-xs text-slate-500 font-mono">BASE</p>
                    <p className="text-sm font-medium">Curitiba, PR </p>
                </div>
            </div>

            <a href="mailto:gabrieloliveira.dev.br@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <IconMail className="text-blue-400" size={20} />
                </div>
                <div className="break-all">
                    <p className="text-xs text-slate-500 font-mono">E-MAIL</p>
                    <p className="text-sm font-medium">gabrieloliveira.dev.br@gmail.com</p>
                </div>
            </a>

            <div className="pt-6 border-t border-zinc-800/60 w-full">
                <p className="text-xs text-slate-500 font-mono mb-4">REDES SOCIAIS</p>
                <RedesSociais />
            </div>
        </div>
    )
}
       

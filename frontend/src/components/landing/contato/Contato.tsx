import { IconCodeCircle2 } from "@tabler/icons-react"
import RedesSociais from "../../shared/RedesSociais"
import FormularioContato from "./FormularioContato"
import ContatoLinks from "./ContatoLinks"

export default function Contato() {
    return (
        <section id="contato" className="relative py-24 md:py-32 w-full max-w-[1250px] mx-auto border-t border-zinc-800/50">
            
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/10 blur-[80px] md:blur-[100px] pointer-events-none rounded-full"></div>
            
            <div className="relative z-10 w-full flex flex-col lg:flex-row gap-12 lg:gap-20">

                <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 w-fit rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs 
                            sm:text-sm font-mono mb-6 md:mb-8 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                        >
                            <IconCodeCircle2 size={18} className="animate-pulse" />
                            <span>Status: Open to Work</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black mb-4 md:mb-6 text-white tracking-tight leading-[1.1]">
                            Vamos <span className="text-blue-500">Conversar?</span> 
                        </h2>
                    
                        <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed font-fira max-w-md">
                            Aberto a oportunidades em desenvolvimento web. Me envie uma mensagem para trocar ideias sobre projetos e vagas.
                        </p>
                    </div>

                   <ContatoLinks isMobile={false} />

                    <div className="hidden lg:block pt-8 border-t border-zinc-800/60 max-w-sm">
                        <p className="text-xs md:text-sm text-slate-500 font-mono mb-4">REDES SOCIAIS</p>
                        <RedesSociais />
                    </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end">
                    <div className="w-full max-w-lg bg-zinc-950/60 backdrop-blur-xl border border-zinc-800/80 rounded-2xl md:rounded-3xl p-3 lg:p-6 md:p-10 shadow-2xl">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8">Envie uma mensagem</h3>
                        <FormularioContato />
                    </div>
                </div>

                <ContatoLinks isMobile={true} />
            </div>
        </section>
    )
}
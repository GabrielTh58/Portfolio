import { Tecnologia } from "@core";
import { Code2, Terminal } from "lucide-react";

interface InspecaoTechProps {
    techAtiva: Tecnologia | null;
}

export default function InspecaoTech({ techAtiva }: InspecaoTechProps) {
    return (
        <div className="w-full md:w-2/5 text-center md:text-left pt-4 min-h-[250px] flex flex-col justify-center">
            {techAtiva ? (
                <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                    <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                        <Code2 size={18} style={{ color: techAtiva.cor }} />
                        <span className="font-mono text-xs tracking-widest uppercase opacity-70" style={{ color: techAtiva.cor }}>
                           {"//"} runtime_info
                        </span>
                    </div>
                    <h3
                        className="text-5xl md:text-6xl font-black mb-6 transition-all duration-300 tracking-tighter"
                        style={{
                            color: techAtiva.cor,
                            textShadow: `0 0 40px ${techAtiva.cor}40`
                        }}
                    >
                        {techAtiva.nome}
                    </h3>
                    <div
                        className="pl-5 border-l-2 transition-colors duration-500"
                        style={{ borderColor: techAtiva.cor }}
                    >
                        <p className="font-fira text-zinc-300 text-lg leading-relaxed">
                            {techAtiva.descricao}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="animate-in fade-in duration-300">
                    <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                        <Terminal size={18} className="text-zinc-600" />
                        <span className="font-mono text-zinc-600 text-xs tracking-widest uppercase">
                           {"//"} system_idle
                        </span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-bold text-zinc-200 mb-6 tracking-tight">
                        Stack Tecnológica
                    </h3>
                    <div className="pl-5 border-l-2 border-zinc-800">
                        <p className="font-mono text-zinc-500 text-base leading-relaxed">
                            <span className="text-cyan-500 mr-2">{">"}</span>
                            Interaja com os ícones para visualizar detalhes técnicos e aplicações de cada stack.
                            <span className="animate-pulse inline-block w-2 h-5 bg-cyan-500 ml-1 align-middle" />
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
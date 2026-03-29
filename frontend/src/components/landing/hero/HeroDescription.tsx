import { useAnimacaoDigitacao } from "@/hooks/useAnimacaoDigitacao";
import { useAnimacaoDigitacaoCircular } from "@/hooks/useAnimacaoDigitacaoCircular";
import { IconCoffee } from "@tabler/icons-react";

export default function HeroDescription() {
    const nome = useAnimacaoDigitacao("Gabriel Oliveira", 60, 0);

        const role = useAnimacaoDigitacaoCircular([
            "Full Stack Dev",
            "React & Next.js Dev",
            "Software Engineering",
            "Design System"
        ], 80, 50, 2000);

    return (
        <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
                {nome}
                {nome.length < "Gabriel Oliveira".length && (
                    <span className="inline-block w-2 sm:w-3 h-10 sm:h-14 md:h-16 lg:h-20 bg-blue-500 ml-2 sm:ml-4 animate-pulse rounded-sm" />
                )}
            </h1>

            <h2 className="text-lg sm:text-3xl lg:text-4xl font-mono text-blue-400 font-medium mb-8 drop-shadow-lg flex items-center justify-center gap-2 w-full">
                <span className="text-slate-600">{"<"}</span>
                <span>{role}</span>
                <span className="inline-block w-1 h-6 sm:h-8 bg-blue-500 animate-pulse" />
                <span className="text-slate-600">{"/>"}</span>
            </h2>

            <p className="max-w-2xl text-slate-300/90 text-sm md:text-xl leading-relaxed mb-8 font-fira px-4">
                Desenvolvedor Full Stack. Desenvolvimento de aplicações web completas, com foco em arquitetura, boas práticas e 
                organização de código.
            </p>

            <div className="flex items-center justify-center w-fit mx-auto gap-2 px-4 py-1.5 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-slate-400 mb-12 shadow-inner">
              <IconCoffee size={16} className="text-amber-600/80" />
              <span className="font-mono text-xs uppercase tracking-widest">Powered by caffeine & discipline</span>
            </div>
            
        </div>
    )
}
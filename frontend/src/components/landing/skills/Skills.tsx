'use client'
import { Tecnologia } from "@core";
import { Cpu } from "lucide-react";
import { useState } from "react";
import InspecaoTech from "./InspecaoTech";
import SkillsTecnologias from "./SkillsTecnologias";

interface SkillsProps {
  tecnologias: Tecnologia[]
}

export default function Skills({ tecnologias }: SkillsProps) {
  const [techAtiva, setTechAtiva] = useState<Tecnologia | null>(null);

  return (
    <section id="skills" className="w-full max-w-[1250px] mx-auto px-4 md:px-8 relative overflow-hidden">
      <SkillsTitulo />
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center md:items-start justify-between">
        <InspecaoTech techAtiva={techAtiva} />

        <SkillsTecnologias
          techAtiva={techAtiva}
          setTechAtiva={setTechAtiva}
          tecnologias={tecnologias}
        />
      </div>
    </section>
  )
}


function SkillsTitulo() {
    return (
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-24 relative">
            <div className="flex items-center gap-2 mb-4 group justify-center">
                <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg group-hover:border-cyan-500/50 transition-colors">
                    <Cpu className="text-cyan-500 w-4 h-4 animate-pulse" />
                </div>
                <span className="font-mono text-xs text-cyan-400 uppercase tracking-[0.3em]">
                    Tech Stack & Tools
                </span>
            </div>

            <div className="space-y-2 flex flex-col items-center justify-center">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                    Meu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                        Arsenal</span> Técnico
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full mx-auto" />
            </div>
        </div>
    )
}
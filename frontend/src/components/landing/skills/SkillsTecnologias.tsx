import { Tecnologia } from "@core";
import Image from "next/image";

interface SkillsTecnologiasProps {
  tecnologias: Tecnologia[];
  techAtiva: Tecnologia | null;
  setTechAtiva: (tecnologia: Tecnologia | null) => void;
}

export default function SkillsTecnologias({ tecnologias, techAtiva, setTechAtiva }: SkillsTecnologiasProps) {
  return (
    <div className="flex justify-center items-center sm:justify-start gap-4 lg:gap-6 flex-wrap w-full md:w-3/5">
      {tecnologias.sort((a, b) => a.id - b.id).map((tecnologia: Tecnologia) => {
        const isActive = techAtiva?.id === tecnologia.id;
        return (
          <div
            key={tecnologia.id}
            onMouseEnter={() => setTechAtiva(tecnologia)}
            onMouseLeave={() => setTechAtiva(null)}
            onClick={() => setTechAtiva(tecnologia)}
            className={`group relative p-[2px] rounded-2xl transition-all duration-300 ease-out cursor-pointer hover:-translate-y-2
                          ${isActive ? 'scale-110 z-10' : 'scale-100 opacity-70 hover:opacity-100'}
                        `}
            style={{
              background: isActive
                ? `linear-gradient(135deg, ${tecnologia.cor}, transparent, ${tecnologia.cor})`
                : `linear-gradient(135deg, ${tecnologia.cor}50, transparent)`,
              boxShadow: isActive ? `0 10px 40px -10px ${tecnologia.cor}` : 'none'
            }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-zinc-950/80 border border-white/5 rounded-[14px] backdrop-blur-md transition-colors group-hover:bg-zinc-900/90">
              <Image
                src={tecnologia.imagem}
                alt={tecnologia.nome}
                width={45}
                height={45}
                className={`transition-all duration-300 ${isActive ? 'scale-110' : 'scale-100 grayscale-[20%]'}`}
                style={{
                  filter: isActive ? `drop-shadow(0 0 10px ${tecnologia.cor}80)` : 'none'
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
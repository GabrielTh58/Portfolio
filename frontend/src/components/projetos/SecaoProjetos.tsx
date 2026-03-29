'use client'

import { Projeto } from "@core"
import { useEffect, useState } from "react"
import { Modal } from "./ModalProjetos"
import ProjetosDestaques from "./ProjetosDestaques"
import OutrosProjetos from "./OutrosProjetos"
import { TerminalSquare } from "lucide-react";
import Link from "next/link"


interface ProjetosProps {
  projetos: {
    todos: Projeto[]
    destaques: Projeto[]
  }
}

export default function SecaoProjetos({ projetos }: ProjetosProps) {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(null)

  const destaques = projetos.destaques.length > 0
    ? projetos.destaques
    : projetos.todos.slice(0, 3)

  const featuredIds = destaques.map((p) => p.id)
  const outros = projetos.todos.filter((p) => !featuredIds.includes(p.id))

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setProjetoSelecionado(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <section id="projetos" className="w-full">
      <div className="w-full flex justify-center mb-4">
        <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />
      </div>

      <CabecalhoProjeto />

      <ProjetosDestaques 
        destaques={destaques} 
        setProjetoSelecionado={setProjetoSelecionado}    
      />
    
      <OutrosProjetos 
        outros={outros} 
        setProjetoSelecionado={setProjetoSelecionado}  
      />     

      <Modal
        projetoSelecionado={projetoSelecionado}
        setProjetoSelecionado={setProjetoSelecionado}
      />

      <CTA />
    </section>
  )
}


function CabecalhoProjeto() {
    return (
        <div className="flex flex-col items-center text-center mb-24 gap-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase">
                <TerminalSquare size={14} />
                projetos selecionados
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                Projetos
            </h2>
            <p className="text-zinc-400 max-w-xl text-base leading-relaxed">
                Aplicações desenvolvidas com foco em uso real, arquitetura sólida e resolução de problemas.
            </p>
        </div>
    )
}

function CTA() {
    return (
        <div className="mt-16 lg:mt-22 mb-16 flex justify-center w-full relative">

            <div className="absolute -inset-10 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-[80px] opacity-50 group-hover/cta:opacity-100
                transition-opacity duration-1000 pointer-events-none" 
            />

            <div className="relative group/cta">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-20 group-hover/cta:opacity-60 
                    transition duration-700 pointer-events-none"
                ></div>

                <Link
                    href="https://github.com/GabrielTh58"
                    target="_blank"
                    className="relative flex items-center gap-4 px-5 lg:px-8 py-4 rounded-xl 
                       bg-zinc-950/40 backdrop-blur-md border border-white/10 
                       text-zinc-300 transition-all duration-500 
                       group-hover/cta:bg-zinc-900/50 group-hover/cta:border-cyan-500/40 group-hover/cta:text-white 
                       shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover/cta:shadow-cyan-500/20"
                >
                    <span className="font-mono text-cyan-400/80 text-base group-hover/cta:text-cyan-400 transition-colors">
                        &lt;/&gt;
                    </span>

                    <span className="font-mono text-sm tracking-widest uppercase font-medium">
                        Ver repositório no GitHub
                    </span>

                    <span className="font-mono text-zinc-500 group-hover/cta:text-cyan-400 transition-all duration-300 group-hover/cta:translate-x-1">
                        -&gt;
                    </span>
                </Link>
            </div>
        </div>
    )
}
'use client'

import { Projeto } from "@core"
import { useEffect, useState } from "react"
import { Modal } from "./ModalProjetos"
import ProjetosDestaques from "./ProjetosDestaques"
import OutrosProjetos from "./OutrosProjetos"
import { TerminalSquare } from "lucide-react";


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

      <ProjetosDestaques destaques={destaques} />
    
      <OutrosProjetos 
        outros={outros} 
        setProjetoSelecionado={setProjetoSelecionado}  
      />     

      <Modal
        projetoSelecionado={projetoSelecionado}
        setProjetoSelecionado={setProjetoSelecionado}
      />
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


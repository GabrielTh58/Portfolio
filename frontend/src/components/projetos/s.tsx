"use client"

import { Projeto } from "@core";
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjetosProps {
  projetos: {
    todos: Projeto[]
    destaques: Projeto[]
  };
}

export default function SecaoProjetos({ projetos }: ProjetosProps) {
  // Vamos usar os destaques se existirem, senão usamos todos (limitando a uns 4 para não ficar gigante)
  const projetosParaExibir = projetos.destaques.length > 0 
    ? projetos.destaques 
    : projetos.todos.slice(0, 4);

  return (
    <section id="projetos" className="py-24 md:py-32 relative border-t border-zinc-800/30">
      
      {/* Background Glows (Sutil para não poluir) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 px-4 md:px-6 mx-auto max-w-7xl">
        
        {/* === Section Header === */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <span className="font-mono text-blue-500 text-sm mb-4 tracking-widest uppercase">
            {"// repositórios_e_produtos"}
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-zinc-100">
            Projetos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Destaque</span>
          </h2>
          <p className="max-w-2xl text-zinc-400 text-lg font-light leading-relaxed">
            Aplicações desenvolvidas com foco em uso real, arquitetura organizada e resolução de problemas práticos.
          </p>
        </div>

        {/* === Featured Projects (Zig-Zag Layout) === */}
        <div className="grid gap-20 md:gap-32 mb-20">
          {projetosParaExibir.map((projeto, index) => {
            // Lógica para inverter a ordem (zigue-zague)
            const isReversed = index % 2 === 1;

            return (
              <div
                key={projeto.id}
                className="group grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* 1. Imagem do Projeto */}
                <div className={`relative overflow-hidden rounded-2xl border border-zinc-800/80 shadow-2xl bg-zinc-950 ${isReversed ? "md:order-2" : "md:order-1"}`}>
                  <div className="relative aspect-[16/10] w-full">
                    {/* Imagem Real mapeada da sua API/Dados */}
                    <Image 
                      src={projeto.imagens[0]} 
                      alt={projeto.nome} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    />
                    
                    {/* Overlay escuro que some no hover */}
                    <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                  </div>

                  {/* Links Flutuantes sobre a imagem no Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      
                      {/* Botão GitHub (Só renderiza se tiver repositório) */}
                      {projeto.repositorio && (
                        <Link
                          href={`/projeto/${projeto.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-zinc-900/90 backdrop-blur text-zinc-300 rounded-full border border-zinc-700 hover:border-blue-500 hover:text-white transition-all shadow-xl"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                      )}
                      
                      {/* Botão Deploy/Live URL */}
                      {projeto.link && (
                        <Link
                          href={projeto.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-blue-600/90 backdrop-blur text-white rounded-full border border-blue-500 hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Link>
                      )}

                    </div>
                  </div>
                </div>
                
                {/* 2. Informações do Projeto */}
                <div className={`flex flex-col ${isReversed ? "md:order-1 md:text-right md:items-end" : "md:order-2 md:text-left md:items-start"}`}>
                  
                  <span className="font-mono text-blue-400 text-xs tracking-wider uppercase mb-2">
                    Projeto Autorais
                  </span>
                  
                  <h3 className="text-3xl lg:text-4xl font-bold text-zinc-100 mt-2 mb-6 tracking-tight group-hover:text-blue-400 transition-colors">
                    {projeto.nome}
                  </h3>
                  
                  {/* Glassmorphism Text Box */}
                  <div className={`bg-zinc-900/50 backdrop-blur-md border border-zinc-800/80 rounded-2xl p-6 lg:p-8 mb-6 shadow-xl relative z-10 ${isReversed ? "md:-mr-12" : "md:-ml-12"}`}>
                    <p className="text-zinc-400 leading-relaxed font-light text-left">
                      {projeto.descricao}
                    </p>
                  </div>
                  
                  {/* Stacks Técnicas */}
                  <div className={`flex flex-wrap gap-2 ${isReversed ? "md:justify-end" : "md:justify-start"}`}>
                    {projeto.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 border border-zinc-800 rounded-lg group-hover:border-zinc-700 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            )
          })}
        </div>

        {/* === View More Button === */}
        <div className="text-center mt-20">
          <Link 
            href="https://github.com/gabriel" // Troque pelo seu github real
            target="_blank"
            className="inline-flex items-center justify-center h-12 px-8 font-medium transition-colors rounded-xl border border-zinc-800 bg-transparent text-zinc-300 hover:bg-zinc-900 hover:text-white"
          >
            <Github className="w-4 h-4 mr-2" />
            Ver todos no GitHub
          </Link>
        </div>

      </div>
    </section>
  )
}
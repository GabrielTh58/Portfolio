import { Projeto } from "@core"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjetosDestaquesProps {
    destaques: Projeto[]
}

export default function ProjetosDestaques({ destaques }: ProjetosDestaquesProps) {
    return (
        <div className="flex flex-col gap-20 mb-32">
            {destaques.map((projeto, index) => {
                const isReversed = index % 2 === 1

                return (
                    <div
                        key={projeto.id}
                        className={`flex flex-col lg:flex-row items-center gap-12 ${isReversed ? "lg:flex-row-reverse" : ""
                            }`}
                    >
                        <div className="group/img relative w-full lg:w-[55%] aspect-[16/10] rounded-2xl overflow-hidden bg-zinc-950 shadow-xl 
                            transition-colors border-b-3 border-cyan-500/50 hover:border-cyan-500/80"
                        >
                            <Image
                                src={projeto.imagens[0] ?? "/logo.png"}
                                alt={projeto.nome}
                                fill
                                className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105 z-10"
                            />

                            {/* Scan Line Effect */}
                            <div className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_20px_3px_rgba(34,211,238,0.7)] -top-10 group-hover/img:top-[110%]
                                transition-all duration-[2s] ease-in-out opacity-0 group-hover/img:opacity-100 z-30 pointer-events-none" 
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                        </div>

                        {/* CONTENT */}
                        <div className="w-full lg:w-[45%] flex flex-col gap-5">
                            <div className="flex items-center gap-2 text-blue-500 font-mono text-xs uppercase tracking-wider">
                                <Sparkles size={14} />
                                Destaque
                            </div>

                            <h3 className="text-2xl md:text-3xl font-semibold text-white">
                                {projeto.nome}
                            </h3>

                            <p className="text-zinc-400 text-base leading-relaxed">
                                {projeto.descricao}
                            </p>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2">
                                {projeto.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-mono text-zinc-300 bg-cyan-500/10 border border-cyan-500/40 rounded-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {projeto.repositorio && (
                                <div className="mt-3 w-full sm:w-auto sm:mt-0 ">
                                    <Link
                                        href={projeto.repositorio}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-300 transition p-2"
                                    >
                                        <Github size={16} />
                                        Código no GitHub
                                    </Link>
                                </div>
                            )}

                            <Actions projeto={projeto} />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

function Actions({projeto}: {projeto: Projeto}) {
    return (
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full">
            {projeto.link && (
                <>
                    <Link
                        href={projeto.link}
                        target="_blank"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg w-full sm:w-auto bg-blue-600 hover:bg-blue-500/80
                            text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-cyan-500/30"
                    >
                        <ExternalLink size={18} />
                        Preview
                    </Link>

                    <Link
                        href={`/projeto/${projeto.id}`}
                        className="flex items-center justify-center px-6 py-3 rounded-lg w-full sm:w-auto border border-zinc-700 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:bg-zinc-800 hover:text-white transition-all duration-300"
                    >
                        Ver detalhes
                    </Link>
                </>
            )}
        </div>
    )
}
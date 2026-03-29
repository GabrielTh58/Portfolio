import { Projeto } from "@core"
import { FolderGit2, Github, Maximize2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface OutrosProjetosProps {
    outros: Projeto[]
    setProjetoSelecionado: (projeto: Projeto | null) => void
}

export default function OutrosProjetos({ outros, setProjetoSelecionado }: OutrosProjetosProps) {
    const ordenados = [...outros].sort((a, b) => {
        const orderA = a.ordem ?? 999;
        const orderB = b.ordem ?? 999;
        return orderA - orderB;
    });


    return (
        outros.length > 0 && (
            <div>
                <Cabecalho />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ordenados.map((projeto) => (
                        <div
                            key={projeto.id}
                            onClick={() => setProjetoSelecionado(projeto)}
                            className="group relative rounded-xl overflow-hidden border border-cyan-500/20 bg-zinc-900 hover:border-cyan-500/80 cursor-pointer"
                        >
                            <div className="relative aspect-[16/10]">
                                <Image
                                    src={projeto.imagens[0] ?? "/logo.png"}
                                    alt={projeto.nome}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white/90">
                                        <span className="text-xs text-cyan-500/80 font-medium">Ver detalhes</span>
                                        <Maximize2 size={14}  className="text-cyan-500/80"/>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-zinc-950/80 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-5 gap-3">
                                    <div>
                                        <h4 className="text-white text-lg font-semibold mb-1">
                                            {projeto.nome}
                                        </h4>
                                        <p className="text-zinc-300 text-sm line-clamp-2">
                                            {projeto.descricao}
                                        </p>
                                    </div>
                                    <Actions projeto={projeto} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    )
}

function Actions({ projeto }: { projeto: Projeto }) {
    return (
        <div className="flex items-center gap-3 mt-2">
            {projeto.link && (
                <Link
                    href={projeto.link}
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    className="text-xs px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition"
                >
                    Preview
                </Link>
            )}
            {projeto.repositorio && (
                <Link
                    href={`/projeto/${projeto.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs px-4 py-2 border border-zinc-600 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-800 transition"
                >
                    Detalhes
                </Link>
            )}

            {projeto.repositorio && (
                <Link
                    onClick={(e) => e.stopPropagation()}
                    href={projeto.repositorio}
                    target="_blank"
                    aria-label={`Ver repositório do projeto ${projeto.nome}`}
                    className="ml-auto text-zinc-400 hover:text-white p-1"
                >
                    <Github size={18} />
                </Link>
            )}
        </div>
    )
}

function Cabecalho() {
    return (
        <div className="flex flex-col items-center text-center mb-16">

            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-widest uppercase mb-3">
                <FolderGit2 size={14} />
                exploração
            </div>

            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Outros projetos
            </h3>

            <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                Projetos que fui desenvolvendo ao longo do tempo, testes, ideias e soluções que também fazem parte da minha evolução.
            </p>

            <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60" />
        </div>
    )
}


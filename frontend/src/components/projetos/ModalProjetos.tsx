import { Projeto } from "@core"
import { IconX } from "@tabler/icons-react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect } from "react"

interface ModalProps {
    projetoSelecionado: Projeto | null
    setProjetoSelecionado: (projeto: Projeto | null) => void
}

export function Modal({ projetoSelecionado, setProjetoSelecionado }: ModalProps) {

    useEffect(() => {
        if (projetoSelecionado) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "unset"
        }
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [projetoSelecionado])

    if (!projetoSelecionado) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setProjetoSelecionado(null)}
        >
            <div
                className="relative w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setProjetoSelecionado(null)}
                    className="absolute top-4 right-4 z-50 flex items-center justify-center w-8 h-8 rounded-full bg-black/50 text-zinc-400 hover:text-white
                        hover:bg-black/80 transition-colors cursor-pointer "
                    aria-label="Fechar modal"
                >
                    <IconX size={20} />
                </button>

                <div className="relative aspect-[16/9] group/modal overflow-hidden bg-zinc-950">
                    <Image
                        src={projetoSelecionado.imagens[0] ?? "/logo.png"}
                        alt={projetoSelecionado.nome}
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-5">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                        {projetoSelecionado.nome}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                        {projetoSelecionado.descricao}
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {projetoSelecionado.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1.5 text-xs font-mono font-medium text-cyan-400 bg-cyan-950/30 border border-cyan-900/50 rounded-md"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* ACTIONS */}
                    <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-zinc-800/50">
                        {projetoSelecionado.link && (
                            <Link
                                href={projetoSelecionado.link}
                                target="_blank"
                                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                            >
                                <ExternalLink size={16} />
                                Preview
                            </Link>
                        )}

                        {projetoSelecionado.repositorio && (
                            <>
                                <Link
                                    href={`/projeto/${projetoSelecionado.id}`}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:text-white transition"
                                >
                                    Ver detalhes
                                </Link>

                                <Link
                                    href={projetoSelecionado.repositorio}
                                    target="_blank"
                                    className="rounded-lg transition ml-auto"
                                >
                                    <Github size={18} className="hover:scale-120 transition-all duration-300 " />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
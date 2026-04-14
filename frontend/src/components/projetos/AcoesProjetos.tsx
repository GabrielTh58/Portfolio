import { Projeto } from "@swc/core"
import { ExternalLink, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
    
export default function Acoes({ projeto }: { projeto: Projeto }) {
    const router = useRouter()
    const [loading, setLoading] = useState<"preview" | "details" | null>(null)

    function handleNavigate(type: "preview" | "details", url: string) {
        if (type === "preview") {
            window.open(url, "_blank", "noopener,noreferrer")
            return
        }

        setLoading(type)
        router.push(url)
    }

    return (
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full">
            {projeto.link && (
                <>
                    {/* PREVIEW */}
                    <button
                        onClick={() => handleNavigate("preview", projeto.link!)}
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg w-full sm:w-auto bg-blue-600 hover:bg-blue-500/80
                        text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-cyan-500/30 disabled:opacity-70 cursor-pointer"
                        disabled={loading !== null}
                    >
                        {loading === "preview" ? (
                            <Loader2 size={18} className="animate-spin" />
                        ) : (
                            <ExternalLink size={18} />
                        )}
                        {loading === "preview" ? "Abrindo..." : "Preview"}
                    </button>

                    {/* DETAILS */}
                    <button
                        onClick={() => handleNavigate("details", `/projeto/${projeto.id}`)}
                        className="flex items-center justify-center px-6 py-3 rounded-lg w-full sm:w-auto border border-zinc-700 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:border-zinc-500 hover:bg-zinc-800 hover:text-white transition-all duration-300 disabled:opacity-70 cursor-pointer"
                        disabled={loading !== null}
                    >
                        {loading === "details" ? (
                            <Loader2 size={18} className="animate-spin" />
                        ) : (
                            "Ver detalhes"
                        )}
                    </button>
                </>
            )}
        </div>
    )
}
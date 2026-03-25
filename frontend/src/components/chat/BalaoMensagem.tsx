import Mensagem from "@/model/Mensagem"
import ConteudoMD from "../shared/ConteudoMD"
import Image from "next/image"

export interface BalaoMensagemProps {
    mensagem: Mensagem
    omitirAutor?: boolean
}

export default function BalaoMensagem(props: BalaoMensagemProps) {
    return props.mensagem.lado === "esquerdo" ? (
        <BalaoEsquerdo {...props} />
    ) : (
        <BalaoDireito {...props} />
    )
}

function BalaoEsquerdo(props: BalaoMensagemProps) {
    return (
        <div className="flex gap-3 w-full">
            {/* Avatar IA */}
            <div className="flex-shrink-0 w-8 flex flex-col items-center">
                {!props.omitirAutor && (
                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center p-1.5 overflow-hidden">
                        <Image src="/chat.svg" alt="IA" width={24} height={24} className="opacity-80" />
                    </div>
                )}
            </div>
            
            <div className="flex flex-col gap-1 w-[calc(100%-2.5rem)]">
                {!props.omitirAutor && (
                    <span className="text-[10px] font-mono font-medium text-cyan-500 uppercase tracking-wider ml-1">
                        {props.mensagem.autor}
                    </span>
                )}
                <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm px-5 py-3 rounded-2xl rounded-tl-sm max-w-fit shadow-md">
                    <ConteudoMD markdown={props.mensagem.texto} />
                </div>
            </div>
        </div>
    )
}

function BalaoDireito(props: BalaoMensagemProps) {
    return (
        <div className={`flex flex-col items-end gap-1 w-full ${props.omitirAutor ? "mt-1" : "mt-4"}`}>
            {!props.omitirAutor && (
                <span className="text-[10px] font-mono font-medium text-zinc-500 uppercase tracking-wider mr-1">
                    {props.mensagem.autor || "Visitante"}
                </span>
            )}
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 text-cyan-50 text-sm px-5 py-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-md shadow-cyan-500/5">
                <ConteudoMD markdown={props.mensagem.texto} />
            </div>
        </div>
    )
}
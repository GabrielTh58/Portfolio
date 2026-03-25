"use client"
import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { IconMessages, IconReload, IconSend, IconTerminal2 } from "@tabler/icons-react"
import useChat from "@/hooks/useChat"
import BalaoMensagem from "./BalaoMensagem"
import Image from "next/image"

export default function JanelaChat() {
    const { mensagens, pensando, adicionarMensagem, limparMensagens } = useChat()
    const [texto, setTexto] = useState("")
    const fimChatRef = useRef<HTMLDivElement>(null)

    function enviarMensagem() {
        if (!texto.trim()) return // Evita enviar mensagem vazia acidentalmente
        adicionarMensagem(texto)
        setTexto("")
    }

    useEffect(() => {
        fimChatRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [mensagens])

    return (
        <div className="flex flex-col bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 rounded-2xl text-zinc-300 overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.8)] shadow-cyan-500/10">
            
            {/* Header do Chat */}
            <div className="flex justify-between items-center bg-zinc-900/50 border-b border-zinc-800 p-4">
                <div className="flex items-center gap-2">
                    <IconTerminal2 size={20} className="text-cyan-400" />
                    <h2 className="text-lg font-bold text-white tracking-tight">Olá Visitante!</h2>
                </div>
                <button 
                    onClick={limparMensagens}
                    className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-800 hover:text-cyan-400 transition-colors cursor-pointer"
                    title="Limpar conversa"
                >
                    <IconReload size={18} />
                </button>
            </div>

            {/* Corpo do Chat */}
            {mensagens.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-[400px]">
                    <div className="p-4 rounded-full bg-zinc-900/50 mb-4 border border-zinc-800/50">
                        <IconMessages size={40} stroke={1.5} className="text-cyan-500/50" />
                    </div>
                    <span className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Vamos Conversar?</span>
                </div>
            ) : (
                <div className="flex flex-col p-4 gap-4 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                    {mensagens.map((mensagem, i) => {
                        const mesmoAutor = i > 0 && mensagens[i - 1].autor === mensagem.autor
                        return (
                            <BalaoMensagem
                                key={mensagem.id}
                                mensagem={mensagem}
                                omitirAutor={mesmoAutor}
                            />
                        )
                    })}
                    {pensando && (
                        <div className="flex items-center gap-3 pl-2">
                            <Image src="/pensando.gif" alt="Processando..." width={24} height={24} className="opacity-70 rounded-full" />
                            <span className="text-xs text-zinc-500 font-mono animate-pulse">Processando...</span>
                        </div>
                    )}
                    <div ref={fimChatRef} className="pb-2"></div>
                </div>
            )}

            {/* Input Area */}
            <div className="p-4 bg-zinc-900/30 border-t border-zinc-800/50">
                <div className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 focus-within:border-cyan-500/50 transition-colors shadow-inner">
                    <span className="text-cyan-500 font-mono pl-2">{'>'}</span>
                    <input
                        type="text"
                        value={texto}
                        placeholder="Digite um comando..."
                        className="flex-1 bg-transparent text-sm text-zinc-200 h-10 outline-none placeholder:text-zinc-600 font-mono"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setTexto(e.target.value)}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === "Enter") enviarMensagem()
                        }}
                    />
                    <button
                        className="flex justify-center items-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 hover:from-cyan-500
							hover:to-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mr-1 cursor-pointer"
                        onClick={enviarMensagem}
                        disabled={!texto.trim()}
                    >
                        <IconSend className="text-white" size={16} stroke={2} />
                    </button>
                </div>
            </div>
        </div>
    )
}
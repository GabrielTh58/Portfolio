'use client'

import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import JanelaChat from "./JanelaChat"
import { BotMessageSquare } from "lucide-react"

export default function BotaoChat() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button 
                    className="group fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-zinc-950/80 backdrop-blur-md border cursor-pointer
                        border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.2)] 
                        hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:scale-110 hover:border-cyan-400 hover:bg-zinc-900/90
                        transition-all duration-300 focus:outline-none"
                    aria-label="Abrir chat"
                >
                    <BotMessageSquare 
                        className="text-cyan-500 transition-colors duration-300 group-hover:text-cyan-300 drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                        size={28} 
                    />
                </button>
            </PopoverTrigger>
            
            <PopoverContent
                side="top"
                align="end"
                sideOffset={16}
                className="w-[350px] sm:w-[450px] p-0 bg-transparent border-none shadow-none z-[100]"
            >
                <JanelaChat />
            </PopoverContent>
        </Popover>
    )
}
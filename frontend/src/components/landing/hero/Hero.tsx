'use client'
import { IconTerminal2 } from "@tabler/icons-react"
import ScrollIndicator from "./ScrollIndicator"
import HeroActions from "./HeroActions"
import HeroDescription from "./HeroDescription"
import HeroBackground from "./HeroBackground"

export default function Hero() {
  return (
    <div
      id="inicio"
      className="
        relative flex flex-col w-full h-[100vh] 
        bg-[url('/bg-hero.png')] bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 flex flex-col w-full h-full">
        <div className="flex-1 w-full max-w-[1000px] mx-auto px-4 md:px-8 flex flex-col justify-center items-center">

          <HeroTitle />

          <div className="flex flex-col items-center text-center">
            <HeroDescription />
            <HeroActions />
          </div>

          
        </div>

        <ScrollIndicator />
      </div>
    </div>
  )
}

function HeroTitle() {
    return (
        <div className="inline-flex items-center gap-2 px-5 py-2 lg:py-2.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full mb-4 lg:mb-10 shadow-[0_0_30px_rgba(0,0,0,0.5)] 
          transition-transform hover:scale-105"
        >
            <IconTerminal2 className="w-5 h-5 text-blue-500" stroke={2} />
            <span className="text-sm font-mono text-slate-300">
                ~/portfolio <span className="text-blue-500 font-bold">$</span> whoami
            </span>
        </div>
    )
}
"use client"
import SobreDestaques from "./SobreDestaques"
import SobreImagem from "./SobreImagem"
import SobreBotoes from "./SobreBotoes"
import SobreApresentacao from "./SobreApresentacao"

export default function Sobre() {
  return (
    <section id="sobre" className="relative w-full max-w-[1250px] mx-auto px-4 sm:px-6 md:px-8">
      
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">        
        <SobreImagem />

        <div className="order-1 lg:order-2 space-y-8 text-center lg:text-left">
        
          <SobreApresentacao />

          <SobreDestaques />

          <SobreBotoes />
          
        </div>
      </div>
    </section>
  )
}
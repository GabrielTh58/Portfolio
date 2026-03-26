import { BookOpen } from "lucide-react";
import Image from "next/image";

export default function SobreImagem() {
  return (
    <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start w-full mt-6 lg:mt-0">
      <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">

        <div className="absolute -inset-4 rounded-2xl border border-blue-500/20" />
        <div className="absolute -inset-8 rounded-2xl border border-blue-500/10 hidden sm:block" />

        <div className="relative h-full w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] 
            bg-[size:32px_32px]" 
          />

          <Image
            src="/perfil.jpeg"
            alt="Gabriel Oliveira"
            fill
            className="object-cover rounded-xl opacity-90"
          />

          <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/90 backdrop-blur-md rounded-lg border border-zinc-800 font-mono text-xs shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>
            <div className="space-y-1.5 text-slate-400">
              <div><span className="text-blue-400">const</span> developer = {"{"}</div>
              <div className="pl-4">name: <span className="text-emerald-400">"Gabriel Oliveira"</span>,</div>
              <div className="pl-4">role: <span className="text-emerald-400">"Full Stack JS"</span>,</div>
              <div className="pl-4">focus: <span className="text-emerald-400">"growth"</span></div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>


        <div className="absolute -right-6 top-1/2 p-2.5 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 rounded-xl
                shadow-2xl hidden md:flex items-center gap-2.5 hover:-translate-y-0.5 transition-transform duration-300 z-10"
        >
          <div className="flex items-center justify-center p-2 rounded-lg bg-zinc-900 border border-zinc-800 shadow-inner">
            <BookOpen className="text-blue-600" />
          </div>
          <div className="flex flex-col pr-1">
            <span className="text-[10px] text-slate-500 font-mono mb-0.5">{"// foundation"}</span>
            <span className="text-xs font-bold text-zinc-200">Software Engineering</span>
          </div>
        </div>
         <div className="absolute -right-6 top-1/4 p-4 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl hidden md:block">
              <div className="text-xl font-black text-blue-500 mb-1">Stack JS</div>
              <div className="text-xs text-slate-400 font-mono">React, Next & Node</div>
            </div>
      </div>
    </div>
  )
}
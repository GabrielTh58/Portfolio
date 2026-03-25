import { MonitorSmartphone, Server, Layers3 } from "lucide-react";
export default function SobreDestaques() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 py-8 border-y border-zinc-800/60">
      <div className="flex flex-col items-center sm:items-center lg:items-start gap-2">
        <MonitorSmartphone className="text-blue-500" size={28} />
        <div className="font-bold text-white text-xl lg:text-base xl:text-lg">Frontend</div>
        <div className="text-[10px] text-slate-500 ">React & Next.js</div>
      </div>

      <div className="flex flex-col items-center sm:items-center lg:items-start gap-2">
        <Server   className="text-blue-500" size={28} />
        <div className="font-bold text-white text-xl lg:text-base xl:text-lg">Backend</div>
        <div className="text-[10px] text-slate-500 ">Express & Nest</div>
      </div>

      <div className="flex flex-col items-center sm:items-center lg:items-start gap-2">
        <Layers3 className="text-blue-500" size={28} />
        <div className="font-bold text-white text-xl lg:text-base xl:text-lg">Arquitetura</div>
        <div className="text-[10px] text-slate-500 ">DDD, Arquitetura limpa e Hexagonal</div>
      </div>
    </div>
  )
}
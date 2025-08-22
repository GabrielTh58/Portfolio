import { IconArrowUpRight } from "@tabler/icons-react";
import TituloSecao from "../shared/TituloSecao";

export default function CallToAction() {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 mb-32">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <TituloSecao titulo="Cada ponte nasce de uma escolha" center />
        <p className="text-zinc-400 mb-10 max-w-xl text-center">
          Estou disponível para projetos freelance e oportunidades em empresas
        </p>

        <button
          type="button"
          aria-label="Vamos conversar — abrir contato"
          className="group flex items-center gap-3 text-white px-8 py-3 rounded-full border cursor-pointer bg-gradient-to-r from-[#05070D] via-[#193CB8] to-[#05070D] transition-transform duration-200 ease-out transform hover:scale-105 hover:-translate-y-1 hover:hover:shadow-[0_20px_40px_rgba(25,60,184,0.18)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/30 hover:animate-pulse"
        >
          <span className="font-medium">Vamos conversar</span>
          <IconArrowUpRight
            size={18}
            className="transition-transform duration-200 ease-out transform group-hover:translate-x-1 group-hover:rotate-12"
            aria-hidden
          />
        </button>
      </div>
    </div>
  )
}

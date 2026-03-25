import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";

 
export default function SobreBotoes(){
    return(
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link 
              href="https://api.whatsapp.com/send?phone=5541995667727"
              target="_blank"
              className="group flex items-center justify-center gap-2 px-8 lg:px-4 xl:px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all 
                shadow-lg shadow-blue-500/20 w-full sm:w-auto"
            >
              Iniciar Conversa
              <IconArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a 
              href="/curriculo.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 lg:px-4 xl:px-8 py-3.5 bg-transparent border border-zinc-700 hover:border-zinc-500 text-slate-300
               hover:text-white rounded-xl font-bold transition-all w-full sm:w-auto"
            >
              Download CV
            </a>
          </div>
    )
}
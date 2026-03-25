import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"

interface RedesSociaisProps {
  variant?: "header" | "card"
}

export default function RedesSociais({ variant = "card" }: RedesSociaisProps) {
  const isHeader = variant === "header"
  
  const baseClass = isHeader
    ? "p-2 text-slate-400 hover:-translate-y-1 transition-all duration-300"
    : "p-3 bg-zinc-900/50 border border-zinc-800 rounded-lg text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" 

  return (
    <div className="flex items-center gap-3">
      <Link href="https://www.linkedin.com/in/gabrielcorreiadev" target="_blank" aria-label="LinkedIn"
        className={`${baseClass} hover:text-[#0A66C2] ${!isHeader && "hover:border-[#0A66C2]/30 hover:shadow-[#0A66C2]/10"}`}
      >
        <IconBrandLinkedin size={isHeader ? 22 : 24} />
      </Link>
      
      <Link href="https://github.com/GabrielTh58" target="_blank" aria-label="GitHub"
        className={`${baseClass} hover:text-white ${!isHeader && "hover:border-white/30 hover:shadow-white/10"}`}
      >
        <IconBrandGithub size={isHeader ? 22 : 24} />
      </Link>
      
      <Link href="https://api.whatsapp.com/send?phone=41995667727" target="_blank" aria-label="WhatsApp"
        className={`${baseClass} hover:text-[#25D366] ${!isHeader && "hover:border-[#25D366]/30 hover:shadow-[#25D366]/10"}`}
      >
        <IconBrandWhatsapp size={isHeader ? 22 : 24} />
      </Link>
    </div>
  )
}
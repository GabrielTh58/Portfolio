"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { scrollToSection } from "@/utils/ScrollSuave"
import { MenuIcon, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Menu() {
  const [menuAberto, setMenuAberto] = useState(false)
  const caminho = usePathname()
  
  const menuRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setMenuAberto(!menuAberto)
  const fecharMenu = () => setMenuAberto(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        fecharMenu()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative flex items-center" ref={menuRef}>
      <button 
        onClick={toggleMenu}  
        className={`p-2 rounded-xl transition-all cursor-pointer duration-300 focus:outline-none relative z-50 
          text-zinc-300 hover:text-blue-400 hover:bg-white/5`}
        aria-label="Alternar menu"
      >
        {menuAberto ? <X size={24} /> : <MenuIcon size={24} /> }
      </button>

      <div 
        className={`
          absolute top-14 right-0 w-52 p-2 flex flex-col gap-1 z-100 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800/80 rounded-2xl
          shadow-[0_20px_40px_rgba(0,0,0,0.7)] shadow-blue-500/10 transform origin-top-right transition-all duration-300 ease-out
          ${menuAberto ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-2 pointer-events-none"}
        `}
      >
        <MenuItem href="#inicio" onClick={fecharMenu} selecionado={caminho === "#inicio"}>Início</MenuItem>
        <MenuItem href="#sobre" onClick={fecharMenu} selecionado={caminho === "#sobre"}>Sobre</MenuItem>
        <MenuItem href="#projetos" onClick={fecharMenu} selecionado={caminho === "#projetos"}>Projetos</MenuItem>
        <MenuItem href="#contato" onClick={fecharMenu} selecionado={caminho === "#contato"}>Contato</MenuItem>
      </div>
    </div>
  )
}

interface MenuItemProps {
  href: string
  children: React.ReactNode
  selecionado?: boolean
  novaAba?: boolean
  onClick: () => void 
}

function MenuItem({ href, children, selecionado, novaAba, onClick }: MenuItemProps) {
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick() 
    scrollToSection(e, href) 
  }

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      target={novaAba ? "_blank" : "_self"}
      className={`relative group px-4 py-3 rounded-xl transition-colors duration-300 overflow-hidden 
        ${selecionado ? "bg-white/5" : "hover:bg-white/5"}`}
    >
      <span
        className={`
          flex items-center gap-2 text-sm font-medium transition-colors duration-300 relative z-10
          ${selecionado ? "text-cyan-400" : "text-zinc-300 group-hover:text-white"}
        `}
      >
        {children}
      </span>
      
      <span 
        className={`
          absolute bottom-0 left-4 h-[1px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 rounded-full
          ${selecionado ? "w-[calc(100%-2rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-2rem)] group-hover:opacity-100"}
        `} 
      />
    </Link>
  )
}
"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Menu() {
	const caminho = usePathname()

	return (
		<nav className="flex gap-6">
			<MenuItem href="/" selecionado={caminho === "/"}>
				Início
			</MenuItem>
			<MenuItem href="/projeto/2" selecionado={caminho.startsWith("/projeto")}>
				Projetos
			</MenuItem>
		</nav>
	)
}

function MenuItem(props: {
  href: string
  children: React.ReactNode
  selecionado: boolean
  novaAba?: boolean
}) {
  return (
    <Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
      <span
        className={`
          flex items-center gap-2 text-sm hover:text-white
          ${props.selecionado ? "text-white" : "text-zinc-300 hover:text-white"}
        `}
        style={
          props.selecionado
            ? {
                borderBottom: "2px solid transparent",
                borderImage: "linear-gradient(90deg, #2B7FFF, #1A4C99) 1",
              }
            : {}
        }
      >
        {props.children}
      </span>
    </Link>
  )
}

import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp } from "@tabler/icons-react"
import Link from "next/link"

export default function RedesSociais() {
  return (
    <div className="flex items-center gap-3">
      <Link href="https://www.linkedin.com/in/gabrielcorreiadev" target="_blank">
        <IconBrandLinkedin
          className="text-zinc-400 transition-transform duration-200 hover:text-zinc-100 hover:scale-110"
        />
      </Link>
      <Link href="https://github.com/GabrielTh58" target="_blank">
        <IconBrandGithub
          className="text-zinc-400 transition-transform duration-200 hover:text-zinc-100 hover:scale-110"
        />
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=41995667727" target="_blank">
        <IconBrandWhatsapp
          className="text-zinc-400 transition-transform duration-200 hover:text-zinc-100 hover:scale-110"
        />
      </Link>
    </div>
  )
}

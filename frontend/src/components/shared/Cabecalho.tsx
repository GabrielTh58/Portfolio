import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import Menu from "./Menu"
import RedesSociais from "./RedesSociais"
export default function Cabecalho() {
	return (
		<header className="w-full flex items-center h-16 bg-black/50">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex items-center gap-10">
					<Link href="/" className="hidden sm:block text-lg">
						<Image src="/logo.svg" alt="Logo" width={80} height={20} />
					</Link>
					
				</div>
				<Menu />
				<div className="hidden sm:flex items-center">				
					<RedesSociais />
				</div>
			</Container>
		</header>
	)
}
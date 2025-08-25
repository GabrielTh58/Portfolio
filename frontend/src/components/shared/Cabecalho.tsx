import Container from "./Container"
import Menu from "./Menu"
import RedesSociais from "./RedesSociais"
import Logo from "./Logo"
export default function Cabecalho() {
	return (
		<header className="w-full flex items-center h-16 bg-black/50">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex items-center gap-10">
					<Logo width={100} height={80} />
					
				</div>
				<Menu />
				<div className="hidden sm:flex items-center">				
					<RedesSociais />
				</div>
			</Container>
		</header>
	)
}
import { Tecnologia } from "@core"
import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/Tecnologias"

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
	return (
		<div
			className="
                flex flex-col items-center justify-center h-[800px]
                bg-[url('/bg-hero.png')] bg-cover bg-center
            "
		>
			<Cabecalho />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center">
					<h1 className="flex gap-3 items-center mb-4">
						<span className="w-2 h-2 rounded-full bg-blue-500"></span>
						<span className="text-3xl sm:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300">
							Gabriel Oliveira
						</span>
						<span className="w-2 h-2 rounded-full bg-blue-500"></span>
					</h1>
					<h2 className="text-blue-500 text-center mb-6 sm:text-2xl">Desenvolvedor Web</h2>
				</div>
				<Tecnologias lista={props.tecnologias} />
			</div>
		</div>
	)
}

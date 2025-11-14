'use client'
import { Tecnologia } from "@core"
import Cabecalho from "../shared/Cabecalho"
import Tecnologias from "../tecnologias/Tecnologias"
import { useAnimacaoDigitacao } from "@/hooks/useAnimacaoDigitacao";

export interface PrincipalProps {
	tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps) {
	const nome = useAnimacaoDigitacao("Gabriel Oliveira", 100, 0);
	const role = useAnimacaoDigitacao("Desenvolvedor Web", 80, 1800);

	return (
		<div
			className="
                flex flex-col items-center justify-center w-full h-[600px] lg:h-[800px]
                bg-[url('/bg-hero.png')] bg-cover bg-right sm:bg-center bg-no-repeat"
		>
			<Cabecalho />
			<div className="flex-1 w-full flex flex-col justify-center items-center gap-5">
				<div className="flex flex-col items-center">
					<h1 className="flex gap-1 sm:gap-3 items-center mb-4">
						<span className="w-2 h-2 rounded-full bg-blue-500 font-medium"></span>
						<span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
							{nome}
							{nome.length < "Gabriel Oliveira".length && (
								<span className="inline-block w-1 h-8 sm:h-12 md:h-14 lg:h-16 bg-blue-500 ml-1 animate-pulse" />
							)}
						</span>
						<span className="w-2 h-2 rounded-full bg-blue-500"></span>
					</h1>
					<h2 className="text-blue-500 text-center mb-6 sm:text-2xl">
						{role}
						{role.length > 0 && role.length < "Desenvolvedor Web".length && (
							<span className="inline-block w-0.5 h-5 sm:h-6 bg-blue-500 ml-1 animate-pulse" />
						)}
					</h2>
				</div>
				<Tecnologias lista={props.tecnologias} />
			</div>
		</div>
	)
}

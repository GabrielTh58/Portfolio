import Hero from "@/components/landing/hero/Hero"
import Skills from "@/components/landing/skills/Skills"
import Sobre from "@/components/landing/sobre/Sobre"
import Contato from "@/components/landing/contato/Contato"
import SecaoProjetos from "@/components/projetos/SecaoProjetos"
import Container from "@/components/shared/Container"
import Footer from "@/components/shared/Footer"
import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"
import RolagemStacks from "@/components/landing/RolagemStacks"
import BackgroundAnimado from "@/components/landing/BackgroundAnimado"
import Cabecalho from "@/components/shared/Cabecalho"

export default async function Home() {
	const tecnologias =  (await obterTecnologias()) ?? { todas: [] } 
	const projetos =  (await obterProjetos()) ?? { todos: [] }
	const projetosFormatados = JSON.parse(JSON.stringify(projetos))

	return (
		<div>
	        <Cabecalho />
			<Hero />
			<BackgroundAnimado />
			<RolagemStacks />
			<div className="relative lg:mt-10 2xl:bg-[url('/bg-portfolio.png')] bg-contain bg-repeat-space overflow-x-hidden">
				<Container className="py-16 flex flex-col items-center gap-52">	
					<Sobre />
					<SecaoProjetos projetos={projetosFormatados} />
					<Skills tecnologias={tecnologias.todas} />
					<Contato />
				</Container>
				<Footer />
			</div>
			
		</div>
	)
}

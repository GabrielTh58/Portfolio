import CallToAction from "@/components/landing/CallToAction"
import Principal from "@/components/landing/Principal"
import Skills from "@/components/landing/Skills"
import Sobre from "@/components/landing/Sobre"
import Contato from "@/components/landing/contato/Contato"
import SecaoProjetos from "@/components/projetos/SecaoProjetos"
import Container from "@/components/shared/Container"
import Footer from "@/components/shared/Footer"
import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"


export default async function Home() {
	const tecnologias =  (await obterTecnologias()) ?? { todas: [] } 
	const projetos =  (await obterProjetos()) ?? { todos: [] }

	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<div className="lg:mt-10 2xl:bg-[url('/bg-portfolio.png')] bg-contain bg-repeat-space">
				<Container className="py-16 flex flex-col items-center gap-56">
					<Sobre />
					<SecaoProjetos projetos={projetos} />
					<Skills tecnologias={tecnologias.todas} />
					<Contato />
					<CallToAction />
				</Container>
				<Footer />
			</div>
		</div>
	)
}

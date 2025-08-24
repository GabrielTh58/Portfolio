import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"
import Container from "@/components/shared/Container"
import Principal from "@/components/landing/Principal"
import Sobre from "@/components/landing/Sobre"
import Skills from "@/components/landing/Skills"
import Contato from "@/components/landing/contato/Contato"
import SecaoProjetos from "@/components/projetos/SecaoProjetos"
import CallToAction from "@/components/landing/CallToAction"
import Footer from "@/components/shared/Footer"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()
	
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

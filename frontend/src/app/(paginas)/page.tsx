import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"
import Container from "@/components/shared/Container"
import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import Projetos from "@/components/projetos/Projetos"
import Sobre from "@/components/landing/Sobre"
import Skills from "@/components/landing/Skills"
import Contato from "@/components/landing/contato/Contato"
import TituloSecao from "@/components/shared/TituloSecao"
import SecaoProjetos from "@/components/projetos/SecaoProjetos"
import CallToAction from "@/components/landing/CallToAction"
import Footer from "@/components/shared/Footer"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()

	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<div className="mt-20">
				<Container className="py-16 flex flex-col items-center gap-50">
					<Sobre />
					<SecaoProjetos projetos={projetos} />
					<Skills tecnologias={tecnologias.todas} />
					<Contato />
					<CallToAction />
					{/* <Curriculo tecnologias={tecnologias.todas} /> */}
				</Container>
				<Footer />
			</div>
		</div>
	)
}

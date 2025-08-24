import { Projeto } from "@core"
import CardProjeto from "./CardProjeto"

export interface ProjetosProps {
	lista: Projeto[]
}

export default function Projetos({lista}: ProjetosProps) {
	return (
		<div>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
				{lista.sort((a, b) => a.id - b.id).map((projeto) => (
					<div key={projeto.id}>
						<CardProjeto projeto={projeto} />
					</div>
				))}
			</div>
		</div>
	);
}

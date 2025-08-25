import { obterProjeto, obterProjetos } from "@/functions/projetos"
import { obterReadme } from "@/functions/github"
import Cabecalho from "@/components/shared/Cabecalho"
import Container from "@/components/shared/Container"
import Readme from "@/components/projetos/Readme"
import Tecnologias from "@/components/tecnologias/Tecnologias"
import CarrosselProjetos from "@/components/shared/CarrosselProjetos"

export default async function PaginaProjeto(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params
  const projetoAtual = await obterProjeto(id)
  if (!projetoAtual) return null

  const projetos = await obterProjetos()
  const listaProjetos = projetos.todos

  const projetosOrdenados = listaProjetos.slice().sort((a, b) => (a.ordem ?? 0) - (b.ordem ?? 0))

  const indiceAtual = projetosOrdenados.findIndex(p => String(p.id) === String(projetoAtual.id))
  const indiceProximo = indiceAtual >= 0 ? (indiceAtual + 1) % projetosOrdenados.length : 0
  const indiceAnterior = indiceAtual >= 0 ? (indiceAtual - 1) % projetosOrdenados.length : 0
  const idProximoProjeto = String(projetosOrdenados[indiceProximo]?.id ?? "")
  const idProjetoAnterior = String(projetosOrdenados[indiceAnterior]?.id ?? "")
	
  const readme = await obterReadme(projetoAtual.repositorio)

  return (
    <div className="bg-black">
      <Cabecalho />
      <Container className="py-7 flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold self-start">{projetoAtual.nome}</h1>
        <CarrosselProjetos imagens={projetoAtual.imagens.slice(1)} idProximoProjeto={idProximoProjeto} idProjetoAnterior={idProjetoAnterior}  />
        <Tecnologias lista={projetoAtual.tecnologias} tamanhoMenor />
        <Readme markdown={readme} />
      </Container>
    </div>
  )
}

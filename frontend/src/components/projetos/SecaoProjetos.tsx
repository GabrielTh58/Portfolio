import { Projeto } from "@core";
import TituloSecao from "../shared/TituloSecao";
import Projetos from "./Projetos";

interface ProjetosProps {
  projetos: {
    todos: Projeto[]
    mobile: Projeto[]
    web: Projeto[]
    jogos: Projeto[]
    destaques: Projeto[]
  };
}

export default function SecaoProjetos({ projetos }: ProjetosProps) {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-20">
        <TituloSecao titulo={"Projetos"} />
        <p className="text-slate-400 text-center md:text-start max-w-md">
          Uma seleção de trabalhos que demonstram minhas habilidades em desenvolvimento web.
        </p>
      </div>
      <Projetos lista={projetos.todos} />
    </section>
  )
}
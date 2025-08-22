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

export default function SecaoProjetos({projetos}: ProjetosProps) {
    return (
        <div className="w-full">
            <TituloSecao titulo={"Projetos"} />
            <Projetos titulo="Destaque" lista={projetos.destaques} />
            <Projetos titulo="Web" lista={projetos.web} />
            <Projetos titulo="Mobile" lista={projetos.mobile} />
            <Projetos titulo="Jogos" lista={projetos.jogos} />
        </div>
    )
}
import { Tecnologia } from "../tecnologia"
import { Nivel } from "./Nivel"

export default interface Proejeto{
    id: number
    nome: string
    descricao: string
    imagens: string[]
    nivel: Nivel
    link: string
    repositorio: string
    destaque: boolean
    tags: string[]
    ordem: number
    tecnologias: Tecnologia[]
}

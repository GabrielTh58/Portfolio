import { Tecnologia } from "../tecnologia"
import { Nivel } from "./Nivel"
import { Tipo } from "./Tipo"

export default interface Proejeto{
    id: number
    nome: string
    descricao: string
    imagens: string[]
    tipo: Tipo
    nivel: Nivel
    repositorio: string
    destaque: boolean
    tags: string[]
    tecnologias: Tecnologia[]
}

'use client'
import TituloSecao from "../shared/TituloSecao";
import { Tecnologia } from "@core";
import Image from "next/image";
import { useState } from "react";

interface SkillsProps{
    tecnologias: Tecnologia[]
}

export default function Skills({tecnologias}: SkillsProps){
    const [descricao, setDescricao] = useState("");

    function handleMouseEnter(tecnologia: Tecnologia){
        setDescricao(tecnologia.descricao)
    }

    return(
        <section className="w-full">
            <TituloSecao titulo="Conhecimentos" />
            <div className="flex justify-between">
                <div className="w-2/5">
                    <p>{descricao}</p>
                </div>

                <div className="flex items-center gap-4 flex-wrap w-1/2">
                    {tecnologias.map((tecnologia) => (
                        <div 
                            key={tecnologia.id}    
                            onMouseEnter={() => handleMouseEnter(tecnologia)} 
                            className="w-26 h-26 flex items-center justify-center rounded-2xl border"
                            style={{border: "1px solid transparent", borderImage: `linear-gradient(90deg, ${tecnologia.cor}, #1C398E) 1`}}
                        >
                            <p>{tecnologia.cor}</p>
                            <Image src={tecnologia.imagem} alt={tecnologia.nome} width={50} height={50} />
                        </div>
                    ))}
                </div>                      
            </div>

        </section>
    )
}

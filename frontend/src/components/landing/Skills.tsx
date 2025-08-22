'use client'
import TituloSecao from "../shared/TituloSecao";
import { Tecnologia } from "@core";
import Image from "next/image";
import { useState } from "react";

interface SkillsProps {
    tecnologias: Tecnologia[]
}

export default function Skills({ tecnologias }: SkillsProps) {
    const [descricao, setDescricao] = useState("* Passe ou toque o cursor do mouse no card para ler *");

    function handleMouseEnter(tecnologia: Tecnologia) {
        setDescricao(tecnologia.descricao)
    }

    return (
        <section className="w-full">
            <TituloSecao titulo="Conhecimentos" />
            <div className="flex flex-col gap-12 xl:gap-0 md:flex-row justify-between">
                <div className="w-full md:w-3/5 lg:2/5 text-center md:text-start">
                    <p className="text-zinc-400">{descricao}</p>
                </div>

                <div className="flex justify-center items-center gap-3 lg:gap-5 flex-wrap w-full md:w-4/5 xl:w-2/5">
                    {tecnologias.sort((a, b) => a.id - b.id).map((tecnologia: Tecnologia) => (
                        <div
                            key={tecnologia.id} 
                            onMouseEnter={() => handleMouseEnter(tecnologia)}
                            onMouseLeave={() => setDescricao("* Passe ou toque o cursor do mouse no card para ler *")}
                            onClick={() => handleMouseEnter(tecnologia)}
                            className={`p-[1px] rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_40px_rgba(25,60,184,0.18)]`}
                            style={{
                                background: `linear-gradient(200deg, ${tecnologia.cor}, #1C398E)`,
                            }}
                        >
                            <div className="w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24  flex items-center justify-center bg-background rounded-2xl">
                                <Image
                                    src={tecnologia.imagem}
                                    alt={tecnologia.nome}
                                    width={50}
                                    height={50}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

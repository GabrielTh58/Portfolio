'use client'
import { Projeto } from "@core";
import { IconExternalLink } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface CardProjetoProps {
    projeto: Projeto
}

export default function CardProjeto ( {projeto}: CardProjetoProps) {    
    return (        
        <div className="group relative rounded-xl overflow-hidden bg-slate-900/60 transition-all duration-500 will-change-transform h-[500px]">
            <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-br from-cyan-400 to-purple-500 bg-origin-border opacity-40 transition-opacity 
            duration-500 group-hover:opacity-100 [-webkit-mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:destination-out] [mask-composite:exclude]"/>
            
            <div className="flex h-full flex-col relative z-10 ">
                <div className="h-48 overflow-hidden relative">
                    <Image src={projeto.imagens[0]} alt={projeto.nome} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                </div>
                
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-slate-100 mb-2">{projeto.nome}</h3>
                        <p className="text-slate-400 text-sm mb-4 overflow-hidden">{projeto.descricao}</p>
                    </div>
                    <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {projeto.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <Link
                            href={`/projeto/${projeto.id}`}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 bg-white/5 px-3 py-1.5 rounded-lg transition-all duration-300 
                                hover:bg-blue-400 hover:text-slate-800 hover:scale-105 hover:shadow-lg"
                            >
                                Ver Projeto 
                                <IconExternalLink />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
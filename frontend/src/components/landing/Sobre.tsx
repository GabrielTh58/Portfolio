import Image from "next/image";

export default function Sobre(){
    return(
        <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 bg-[url('/bg-sobre.png')] bg-contain">
            <div className="w-full flex items-center justify-center lg:w-1/2">
                <div className="w-[280px] h-[280px]  md:w-[415px] md:h-[430px] rounded-full overflow-hidden relative">
                    <Image src="/perfil.jpeg" alt="Foto Perfil" fill className="object-cover"/>
                </div>
            </div>

            <div className="w-full md:max-w-3/4 lg:w-1/2 flex flex-col items-center lg:items-start">
                <h2 className="font-semibold mb-4">SOBRE</h2>
                <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-[#1A4C99] 
                    mb-8 font-bruno-ace text-2xl sm:text-5xl capitalize text-center lg:text-start"
                >
                    Construindo pontes entre ideias e soluções
                </h3>
                <p className="text-xl sm:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300 mb-5">Desenvolvedor full stack</p>
                <p className="text-zinc-400 text-center lg:text-start">Estudante de Engenharia de Software e Desenvolvedor Web Fullstack, com foco em front-end. Tenho experiência prática em projetos usando Typescript, React, Node.js, Nest, PostgreSQL, TailwindCss. Apaixonado por transformar ideias em soluções digitais e criar interfaces que geram valor para negócios</p>
            </div>
        </section>
    )
}
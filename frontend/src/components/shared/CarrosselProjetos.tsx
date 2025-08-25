'use client'
import Image from "next/image"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "../ui/carousel"
import { useRouter } from "next/navigation"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"

export interface CarrosselImagensProps {
	imagens: string[]
	idProximoProjeto: string
	idProjetoAnterior: string
}

export default function CarrosselProjetos({imagens, idProximoProjeto, idProjetoAnterior}: CarrosselImagensProps) {
	const router = useRouter()
	const navegarParaProximoProjeto = (e: React.MouseEvent) => {
		if (!idProximoProjeto) return
		router.push(`/projeto/${idProximoProjeto}`)
	}

	const navegarParaProjetoAnterior = (e: React.MouseEvent) => {
		if (!idProjetoAnterior) return
		router.push(`/projeto/${idProjetoAnterior}`)
	}

	return (
		<Carousel opts={{ loop: true }} className="w-7/10 md:w-11/12 xl:w-full">
			<CarouselContent>
				{imagens.map((imagem) => (
					<CarouselItem key={imagem} className="relative h-72 md:h-96 w-full">
						<Image src={imagem} alt="Imagem" fill className="object-contain md:object-cover" />
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="flex items-center gap-2">
				<Button navegarParaProximoProjeto={navegarParaProjetoAnterior} />
				<Button proximo navegarParaProximoProjeto={navegarParaProximoProjeto} />
			</div>
		</Carousel>
	)
}

interface ButtonProps {
	navegarParaProximoProjeto: (e: React.MouseEvent) => void
	proximo?: boolean
}

function Button({navegarParaProximoProjeto, proximo=false}: ButtonProps ){
	return(
		<button
			onClick={navegarParaProximoProjeto}
			className={`md:absolute z-20 cursor-pointer border rounded-full p-1 transition-all ease duration-300 hover:scale-105 hover:bg-slate-950/80 hover:shadow-[0_20px_40px_rgba(25,60,184,0.18)]				
				${proximo ? 'top-1/2 -right-12 -translate-y-1/2' : 'top-1/2 -left-12 -translate-y-1/2' }
				`}
        >
			{proximo ? <IconArrowRight stroke={1} size={20} /> : <IconArrowLeft stroke={1} size={20} />}
        </button>
	)
}
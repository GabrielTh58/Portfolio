interface TituloSecaoProps{
    titulo: string
    center?: boolean
}
export default function TituloSecao({titulo, center}: TituloSecaoProps){
    return(
        <div className="flex flex-col items-center md:items-start">
            <div className={`w-20 h-[2px] gradiente-principal mb-4 ${center ? "self-center" : ""}`}></div>
            <h2 className="text-3xl text-center md:self-start sm:text-4xl mb-10 font-bruno-ace">{titulo}</h2>
        </div>

    )
}
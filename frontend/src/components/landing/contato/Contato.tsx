import RedesSociais from "../../shared/RedesSociais"
import TituloSecao from "../../shared/TituloSecao"
import FormularioContato from "./FormularioContato"

export default function Contato(){
    return(
        <section className="w-full " id="contato">
            <TituloSecao titulo="Contato" />

            <div className="w-full flex flex-col gap-14 items-center md:items-start md:gap-0 md:flex-row md:justify-between ">
                <div className="md:w-2/5 max-w-sm text-center md:text-start">
                    <p className="font-fira mb-10 md:mb-16">Tem um projeto em mente ou uma vaga que se encaixa no meu perfil? Vamos conversar!</p>

                    <div className="flex justify-center md:justify-start">
                        <RedesSociais/>
                    </div>
                </div>

                <div className="self-center ">
                    <FormularioContato />
                </div>
            </div>
                
        </section>
    )
}
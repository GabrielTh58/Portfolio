import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Menu from "./Menu";

export default function Cabecalho() {
    return (
        <header className="w-full flex items-center h-16 bg-black/50">
            <Container className="flex-1 flex justify-center items-center sm:justify-between">
                <div className="flex items-center gap-10">
                    <Link href="/" className="hidden sm:block">
                        <Image src="/logo.svg" alt="Logo" width={80} height={0} />
                    </Link>

                    <Menu />
                </div>
                <div className="hiddem sm:flex items-center">
                    <Link 
                        href="" 
                        target="_blank"
                        className="bg-red-500 text-sm  font-bold rounded-full px-7 py-1"
                    >
                        Perfil                        
                    </Link>
                </div>
            </Container>
        </header>
    )
}
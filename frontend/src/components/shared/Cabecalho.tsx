import Container from "./Container"
import Menu from "./Menu"
import RedesSociais from "./RedesSociais"
import Logo from "./Logo"

export default function Cabecalho() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full flex items-center h-20 bg-zinc-950/60 backdrop-blur-md border-b border-white/5 z-999">
            <Container className="flex-1 flex justify-between items-center h-full">
                
                <Logo width={100} height={80} />
                
                <div className="hidden lg:flex items-center gap-6">               
                    <RedesSociais variant="header" />
                </div>

                <Menu />
            </Container>
        </header>
    )
}
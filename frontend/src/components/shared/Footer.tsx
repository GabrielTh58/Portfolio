import Container from "./Container";
import Logo from "./Logo";
import RedesSociais from "./RedesSociais";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 py-8 sm:py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mb-12 sm:mb-20">
       
          <div className="text-center mb-4 md:mb-0 md:text-start">
            <Logo width={100} height={50}/>
            <p className="ml-1 mt-2 text-sm text-slate-300">Desenvolvedor Fullstack</p>        
          </div>

          <RedesSociais />
        </div>

        <p className="text-slate-400 text-center">© Copyright 2025. Feito por Gabriel</p>
      </Container>
    </footer>
  )
}
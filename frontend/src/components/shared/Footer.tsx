"use client"
import Container from "./Container";
import Logo from "./Logo";
import RedesSociais from "./RedesSociais";
import { IconArrowUp, IconCoffee, IconHeartFilled } from "@tabler/icons-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#05070D] pt-10 pb-10">
      <Container className="max-w-[1250px]">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-12"></div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-start">
              <Logo width={110} height={55} />
              <p className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.2em] mt-2">
                Full Stack Developer 
              </p>
            </div>

            <div className="flex items-center justify-center">
              <RedesSociais variant="header" />
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-zinc-500 hover:text-white transition-all duration-500 cursor-pointer"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Back to top</span>
              <IconArrowUp size={18} className="transition-transform duration-500 group-hover:-translate-y-1" />
            </button>
          </div>

          <div className="mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-zinc-900/50 pt-8">
            <p className="text-center text-zinc-600 text-[11px] font-mono uppercase tracking-widest">
              © {currentYear} Gabriel Oliveira — Curitiba, Brasil.
            </p>

            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 bg-zinc-900/30 px-3 py-1.5 rounded-full border border-zinc-800/50
              hover:bg-zinc-800/50 transition-colors hover:text-zinc-400
            ">
              <span>Made with</span>
              <IconHeartFilled size={14} className="text-red-500/80" />
              <span>&</span>
              <IconCoffee size={14} className="text-amber-600/80" />
              <span className="ml-1 tracking-tighter">by a coffee driven dev</span>
            </div>
          </div>

        </div>
      </Container>
    </footer>
  );
}
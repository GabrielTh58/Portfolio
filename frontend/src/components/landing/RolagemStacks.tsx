export default function RolagemStacks() {
  const tecnologias = [
    "React", "Next.js", "Node.js", "TypeScript", "Nest.js", "Express", "Prisma", "MongoDB",
    "Tailwind CSS", "PostgreSQL", "Docker", "Clean Architecture", "Git", "Figma"
  ];

  return (
    <div className="relative flex overflow-x-hidden bg-zinc-950/60 border-y border-zinc-800 py-6 w-full mt-12 mb-16 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)]">
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />
      
      <div className="animate-marquee flex whitespace-nowrap items-center w-max">
        {[...tecnologias, ...tecnologias].map((tech, index) => (
          <div key={index} className="flex items-center gap-8 mx-6">
            <span className="text-zinc-200 font-bold tracking-wide text-lg hover:text-blue-400 hover:scale-110 transition-all duration-300 cursor-default drop-shadow-md">
              {tech}
            </span>
            <span className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
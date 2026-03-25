export default function HeroBackground() {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="absolute inset-0 bg-black/60 md:bg-black/40 bg-gradient-to-b from-transparent via-[#05070D]/50 to-[#05070D]"></div>

            <div
                className="absolute inset-0 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(59,130,246,0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(59,130,246,0.03) 1px, transparent 1px)
                      `,
                    backgroundSize: '64px 64px'
                }}
            ></div>
        </div>
    )
}
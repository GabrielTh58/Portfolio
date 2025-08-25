import Image from "next/image"
import Link from "next/link"

interface LogoProps{
    width: number
    height: number
}
function Logo({width, height}: LogoProps) {
    return (
        <Link href="/" className="hidden sm:flex">
            <Image src="/logo.png" alt="Logo" width={width} height={height} className="object-cover" />
        </Link>
    )
}

export default Logo

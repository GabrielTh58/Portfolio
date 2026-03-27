import Image from "next/image"
import Link from "next/link"

interface LogoProps{
    width: number
    height: number
}
function Logo({width, height}: LogoProps) {
    return (
        <Link href="/" className="">
            <Image src="/logo.png" alt="Logo" width={width ?? 'auto'} height={height ?? 'auto'} className="object-cover" />
        </Link>
    )
}

export default Logo

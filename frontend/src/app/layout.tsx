import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import { Bruno_Ace } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Portfolio Dev Web",
	description: "Portfólio de projetos de desenvolvimento",
}

const fira = Fira_Code({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

const brunoAce = Bruno_Ace({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--bruno-ace",
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fira.className} ${brunoAce.variable} antialiased`}>{children}</body>
		</html>
	)
}

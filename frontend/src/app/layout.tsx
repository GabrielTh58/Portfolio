import type { Metadata } from "next"
import { Fira_Code } from "next/font/google"
import { Bruno_Ace } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
	title: "GabCode",
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
			<body className={`${fira.className} ${brunoAce.variable} antialiased`}>
				{children}
				<Toaster
					position="top-right" 
					toastOptions={{
						style: {
							background: "var(--background)", 
							color: "#E0E0E0",
							border: "1px solid #155dfc", 
							boxShadow: '0 4px 12px rgba(0,0,0,0.3)' 
						}
					}}
				/>
			</body>
			
		</html>
	)
}

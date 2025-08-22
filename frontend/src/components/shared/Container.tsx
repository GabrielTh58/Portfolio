export interface ContainerProps {
	children: React.ReactNode
	className?: string
}

export default function Container(props: ContainerProps) {
	return <div className={`max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 ${props.className ?? ""}`}>{props.children}</div>
}

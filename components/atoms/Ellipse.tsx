import React from 'react'

interface ElProps {
	width: number
	height: number
	ElClassName?: string
	bgColor?: string
	children?: any
}
export default function Ellipse(props: ElProps) {
	return (
		<div
			className={`w-[${props.width}px] h-[${props.height}px] bg-[${props.bgColor}]  ${props.ElClassName} rounded-full`}
		>
			{props.children}
		</div>
	)
}

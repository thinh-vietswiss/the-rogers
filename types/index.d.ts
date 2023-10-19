export {}

export type TClassName = {
	className?: string
}

export interface IImageData {
	src: string
}

export interface IBlogData {
	name?: string
	type?: string
	date?: string
	content?: string
}

export type SVGProps = HTMLAttributes<HTMLOrSVGElement> & TClassName

import { HTMLAttributes } from 'react'

type TClassName = {
	className?: string
}
type SVGProps = HTMLAttributes<HTMLOrSVGElement> & TClassName

const ButtonPlus = ({ ...props }: SVGProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='91'
			height='91'
			viewBox='0 0 91 91'
			fill='none'
		>
			<circle
				cx='45.5'
				cy='45.5'
				r='45.5'
				transform='matrix(-1 0 0 1 91 0)'
				fill={'#E40521'}
			/>
			<line x1='44.875' y1='28' x2='44.875' y2='62' stroke={'white'} strokeWidth='2' />
			<line x1='29' y1='46.125' x2='63' y2='46.125' stroke={'white'} strokeWidth='2' />
		</svg>
	)
}

export default ButtonPlus

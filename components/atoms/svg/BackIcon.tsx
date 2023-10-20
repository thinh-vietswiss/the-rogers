import { HTMLAttributes } from 'react'

type TClassName = {
	className?: string
}
type SVGProps = HTMLAttributes<HTMLOrSVGElement> & TClassName

const BackIcon = ({ ...props }: SVGProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='20'
			height='16'
			viewBox='0 0 20 16'
			fill='none'
		>
			<path
				d='M0.292893 8.70711C-0.0976314 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928933C7.04738 0.538409 7.68054 0.538409 8.07107 0.928933C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65686 15.0711L0.292893 8.70711ZM20 9L1 9L1 7L20 7L20 9Z'
				fill='white'
			/>
		</svg>
	)
}

export default BackIcon

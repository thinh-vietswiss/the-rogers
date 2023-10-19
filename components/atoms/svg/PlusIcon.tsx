import React, { HTMLAttributes } from 'react'

interface TClassName {
	className?: string
	firstLineProps?: any
	secondLineProps?: any
}
type SVGProps = React.SVGProps<SVGSVGElement> & TClassName

const PlusIcon = ({ firstLineProps = {}, secondLineProps = {}, ...props }: SVGProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='23'
			height='23'
			viewBox='0 0 23 23'
			fill='none'
		>
			<line
				x1='11'
				y1='4.37114e-08'
				x2='11'
				y2='23'
				stroke='#E40521'
				strokeWidth='2'
				{...firstLineProps}
			/>
			<line y1='12' x2='23' y2='12' stroke='#E40521' strokeWidth='2' {...secondLineProps} />
		</svg>
	)
}

export default PlusIcon

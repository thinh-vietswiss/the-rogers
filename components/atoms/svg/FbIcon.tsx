import { HTMLAttributes } from 'react'

type TClassName = {
	className?: string
}
type SVGProps = HTMLAttributes<HTMLOrSVGElement> & TClassName

const FbIcon = ({ ...props }: SVGProps) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='48'
			height='48'
			viewBox='0 0 48 48'
			fill='none'
		>
			<path
				d='M44 24.1213C44 13.008 35.0467 4 24 4C12.9533 4 4 13.008 4 24.1213C4 34.1667 11.312 42.4907 20.8747 44V29.9387H15.7973V24.12H20.8747V19.688C20.8747 14.6453 23.86 11.8587 28.4293 11.8587C30.616 11.8587 32.9067 12.252 32.9067 12.252V17.204H30.3827C27.8987 17.204 27.1253 18.756 27.1253 20.348V24.1213H32.672L31.7853 29.9373H27.1253V44C36.688 42.4907 44 34.1667 44 24.1213Z'
				fill='black'
			/>
		</svg>
	)
}

export default FbIcon

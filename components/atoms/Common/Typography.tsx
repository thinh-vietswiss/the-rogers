import { ElementType, memo, HTMLAttributes, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<ReactElement> {
	renderAs?: ElementType
	content?: string
	textSize?:
		| 'heading1'
		| 'heading2'
		| 'heading3'
		| 'heading5'
		| 'text2xl'
		| 'textLg'
		| 'base'
		| 'form-label'
}

const typoStyle = {
	heading1: ` text-[228.188px] not-italic font-bold leading-[normal] uppercase`,
	heading2: `  text-[150px] not-italic font-normal leading-[normal]`,
	heading3: `  text-[78px] not-italic font-bold leading-[normal]`,
	heading5: `  text-black text-[33px] font-normal leading-10 tracking-[1.65px]`,
	text2xl: `  text-black text-2xl not-italic font-bold leading-[normal]`,
	textLg: `  text-lg not-italic font-bold leading-[normal]`,
	base: ' text-base not-italic font-light leading-6',
	'form-label': 'text-xs lg:text-sm lg:leading-5 lg:tracking-[0.2px]',
}

const Typography = ({ renderAs = 'div', content = '', textSize = 'base', ...props }: Props) => {
	const Element = renderAs
	const clsDefault = 'font-normal'

	return (
		<Element
			{...props}
			className={twMerge(clsDefault, typoStyle[textSize], props.className || '')}
		>
			{props.children && <>{props.children}</>}
		</Element>
	)
}

export default memo(Typography)

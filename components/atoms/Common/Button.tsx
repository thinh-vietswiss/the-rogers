'use client'

import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ElementType, HTMLAttributes, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends HTMLAttributes<ReactElement>, ButtonHTMLAttributes<ReactElement> {
	renderAs?: ElementType
	disabled?: boolean
	active?: boolean
	variant?:
		| 'line'
		| 'outline'
		| 'primary'
		| 'secondary'
		| 'red'
		| 'icon-primary'
		| 'disabled'
		| 'square'
}

const btnStyle = {
	primary: 'text-primary bg-green py-4 px-8 lg:py-6 lg:px-10',
	secondary: 'text-primary bg-green-light py-3 px-4',
	red: 'text-white bg-red py-4 px-8 lg:py-6 lg:px-10',
	line: 'rounded-none text-primary border-b-2 border-green-dark py-0 px-1',
	outline:
		' h-10 text-sm not-italic font-bold leading-[25px] tracking-[0.28px] uppercase bg-transparent  text-blue-dark font-semibold hover:text-[#E40521] py-2 px-4 border border-blue  hover:border-[#E40521]   rounded-[20px]',
	'icon-primary': 'rounded-full text-primary bg-green p-[15px]',
	square: 'text-base min-w-[48px] py-[14px] rounded-lg px-2 leading-[1.25] text-dark hover:bg-primary hover:text-white hover:opacity-100 lg:px-2 lg:text-[16px]',
	disabled: 'text-primary bg-green py-4 px-8 lg:py-6 lg:px-10 opacity-[0.5]',
}

const Button = ({
	renderAs = 'button',
	disabled = false,
	active = false,
	variant = 'primary',
	title,
	...props
}: Props) => {
	const Element = renderAs

	return (
		<Element
			{...props}
			disabled={disabled}
			className={twMerge(
				clsx(
					'transition-all box-border duration-500 rounded-[100px] font-medium text-base flex justify-center items-center ',
					btnStyle[variant],
					{
						'bg-primary text-white': variant === 'square' && active,
						'opacity-[0.65]': variant === 'square' && !active,
					}
				),
				props.className ?? ''
			)}
		>
			{props.children}
		</Element>
	)
}

export default Button

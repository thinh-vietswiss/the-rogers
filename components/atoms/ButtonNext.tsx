'use client'
import React from 'react'
import NextIcon from './svg/NextIcon'
import clsx from 'clsx'

interface BtProps {
	buttonProps?: object
	className?: string
}

const ButtonBack = ({ buttonProps = {}, ...props }: BtProps) => {
	return (
		<button
			{...buttonProps}
			className={clsx(
				'w-[74px] h-[74px] bg-[#E40521] rounded-full	flex justify-center items-center',
				props.className
			)}
		>
			<NextIcon />
		</button>
	)
}
export default ButtonBack

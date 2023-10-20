'use client'
import React from 'react'
import BackIcon from './svg/BackIcon'
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
			<BackIcon />
		</button>
	)
}
export default ButtonBack

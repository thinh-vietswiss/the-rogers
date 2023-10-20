'use client'
import React, { useState } from 'react'
import ButtonPlus from './svg/PlusIcon'
import clsx from 'clsx'

interface BtProps {
	buttonProps?: object
	className?: string
	bgColor?: string
}

const ButtonPlusSmall = ({ buttonProps = {}, bgColor = '', ...props }: BtProps) => {
	const [isHovered, setIsHovered] = useState<boolean>(false)

	return (
		<button
			{...buttonProps}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={clsx(
				`w-[47px] h-[47px] ${
					bgColor || 'bg-white'
				} hover:bg-[#E40521] rounded-full	flex justify-center items-center`,
				props.className
			)}
		>
			<ButtonPlus
				firstLineProps={{ stroke: isHovered ? '#F2F2F2' : '#E40521' }}
				secondLineProps={{ stroke: isHovered ? '#F2F2F2' : '#E40521' }}
			/>
		</button>
	)
}
export default ButtonPlusSmall

'use client'
import React, { useState } from 'react'
import ButtonPlus from './svg/PlusIcon'

interface BtProps {
	buttonProps?: object
}

const ButtonPlusSmall = ({ buttonProps = {} }: BtProps) => {
	const [isHovered, setIsHovered] = useState<boolean>(false)

	return (
		<button
			{...buttonProps}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className='w-[47px] h-[47px] bg-white hover:bg-[#E40521] rounded-full	flex justify-center items-center'
		>
			<ButtonPlus
				firstLineProps={{ stroke: isHovered ? '#F2F2F2' : '#E40521' }}
				secondLineProps={{ stroke: isHovered ? '#F2F2F2' : '#E40521' }}
			/>
		</button>
	)
}
export default ButtonPlusSmall

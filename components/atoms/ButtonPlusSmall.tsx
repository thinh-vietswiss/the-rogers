'use client'
import React, { useState } from 'react'

interface BtProps {
	noChangeColor?: boolean
	buttonProps?: object
}

const ButtonPlusSmall = ({ noChangeColor = false, buttonProps = {} }: BtProps) => {
	const [isHovered, setIsHovered] = useState<boolean>(false)

	return (
		<button
			{...buttonProps}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className='w-[47px] h-[47px] bg-white hover:bg-[#E40521] rounded-full	flex justify-center items-center'
		>
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
					stroke={isHovered ? '#F2F2F2' : '#E40521'}
					stroke-width='2'
				/>
				<line
					y1='12'
					x2='23'
					y2='12'
					stroke={isHovered ? '#F2F2F2' : '#E40521'}
					stroke-width='2'
				/>
			</svg>
		</button>
	)
}
export default ButtonPlusSmall

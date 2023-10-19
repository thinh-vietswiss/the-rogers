'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { IImageData } from '@/types'
import PlusIcon from '../atoms/svg/PlusIcon'
import Typography from '../atoms/Common/Typography'

interface BlogsProps {
	name?: any
	date?: string
}

const BlogsItem: React.FC<BlogsProps> = ({ name = '', date = '' }) => {
	const [isHovered, setIsHovered] = useState(false)
	return (
		<button
			className='sticky z-10 '
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div className='flex justify-center z-10  py-[15px]'>
				<PlusIcon />
			</div>
			<div className='flex justify-center z-10 pb-[12px] '>
				<Typography className='text-sm not-italic font-bold leading-[normal] text-center'>
					{date}
				</Typography>
			</div>
			<Typography
				textSize='heading5'
				className={`w-full z-10  font-abril-fatface text-center whitespace-pre-line ${
					isHovered ? 'text-[#E40521]' : ''
				}`}
			>
				{name}
			</Typography>
		</button>
	)
}

export default BlogsItem

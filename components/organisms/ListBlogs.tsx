import React from 'react'
import BlogsItem from '../molecules/BlogsItem'
import { IBlogData } from '@/types'
import ButtonsFilterBlogs from '../molecules/ButtonsFilterBlogs'

interface ClubProps {
	blogData?: IBlogData[]
}

const ClubPart: React.FC<ClubProps> = ({ blogData = [] }) => {
	return (
		<div className='min-h-[937px]'>
			<div className='mt-[94px] ml-[201px]'>
				<ButtonsFilterBlogs />
				<div className='flex gap-[64px] flex-wrap	 mt-[64px]'>
					{blogData.map((item, index) => (
						<div
							className=' w-[210px] h-[210px] relative text-center'
							key={`blog${index}`}
						>
							<BlogsItem name={item.name} date={item.date} />
							<div className='absolute z-0 w-[201px] h-[201px] top-0 left-0 rounded-full  bg-[#EFEEEA]'></div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ClubPart

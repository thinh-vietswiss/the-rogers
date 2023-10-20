import Post from '@/components/molecules/Post'
import Image from 'next/image'
import Typography from '../atoms/Common/Typography'
import Ellipse from '../atoms/Ellipse'
import ButtonBack from '../atoms/ButtonBack'
import ButtonNext from '../atoms/ButtonNext'
import ButtonPlusSmall from '../atoms/ButtonPlusSmall'

const NewsPart = () => {
	return (
		<div className='relative min-h-[1307px]  '>
			<div className='absolute top-[106px] left-[311px] z-10 '>
				<Image
					src='/image/women-news.png'
					alt=''
					sizes='(min-width: 1024px): 225px, (min-width: 768px) 50vw, 90vw'
					width={225}
					height={656}
					className=' w-[225px] h-[656px] object-cover'
				/>
			</div>
			<Ellipse
				width={480}
				height={480}
				bgColor='#EFEEEA'
				ElClassName='z-0 top-[173px] left-[220px]  absolute '
			/>
			<div className='absolute top-[564px] left-[776px]'>
				<Typography className='border-b-2 border-black pb-[0.4px] mb-[32px] inline-block	text-[14px] font-bold '>
					07. Mai 2022
				</Typography>
				<Post
					title={<>Das ist grad los</>}
					contentCustom={
						<Image
							src='/image/bicycle-2.png'
							alt=''
							sizes='(min-width: 1024px): 385px, (min-width: 768px) 50vw, 90vw'
							width={385}
							height={196}
							className=' w-[385px] h-[215px] object-cover pb-[30px]'
						/>
					}
					postClassName='w-[460px]'
					contentClassName='whitespace-pre-line w-[388px]'
					titleClassName='text-6xl not-italic font-normal leading-[65px] tracking-[1.2px] pb-5'
					content={`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. \n \n Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`}
				/>
			</div>
			<Typography
				textSize='heading2'
				className='absolute top-[295px] left-[271px] font-abril-fatface text-[#E40521] z-20'
			>
				news
			</Typography>
			<div className=' absolute top-[418px] left-0 w-full border-t-[6px] border-t-[#EFEEEA] border-dotted'></div>

			<ButtonBack className='absolute top-[387px] left-[93px] ' />
			<ButtonNext className='absolute top-[387px] right-[93px] ' />
			<div className=' absolute top-[360px] left-[768px] rotate-[270deg]  w-fit text-[#E40521] flex items-center	gap-x-4 align-middle pb-5 text-sm not-italic font-bold leading-[25px] tracking-[0.28px] uppercase'>
				<ButtonPlusSmall bgColor='bg-[#EFEEEA]' />
				News
			</div>
			<div className=' absolute top-[314px] right-[344px] rotate-[270deg]  w-fit text-[#E40521] flex items-center	gap-x-4 align-middle pb-5 text-sm not-italic font-bold leading-[25px] tracking-[0.28px] uppercase'>
				<ButtonPlusSmall bgColor='bg-[#EFEEEA]' />
				DaS IST GRAD LOS
			</div>
			<div className=' absolute top-[360px] right-[216px] rotate-[270deg]  w-fit text-[#E40521] flex items-center	gap-x-4 align-middle pb-5 text-sm not-italic font-bold leading-[25px] tracking-[0.28px] uppercase'>
				<ButtonPlusSmall bgColor='bg-[#EFEEEA]' />
				News
			</div>
		</div>
	)
}

export default NewsPart

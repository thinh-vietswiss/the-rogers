import Post from '@/components/molecules/Post'
import Image from 'next/image'
import Typography from '../atoms/Common/Typography'
import Ellipse from '../atoms/Ellipse'

const ClubPart = () => {
	return (
		<div className='relative min-h-[1188px]  '>
			<div className='absolute top-[154px] left-[152px] z-10 '>
				<Image
					src='/image/women-club.png'
					alt=''
					sizes='(min-width: 1024px): 436px, (min-width: 768px) 50vw, 90vw'
					width={600}
					height={973}
					className=' w-[600px] h-[973px] object-cover'
				/>
			</div>
			<Ellipse
				width={480}
				height={480}
				bgColor='#EFEEEA'
				ElClassName='z-0 top-[318px] left-[264px]  absolute '
			/>
			<div className='absolute top-[534px] left-[878px]'>
				<Typography className='border-b-2 border-black pb-[0.4px] mb-[32px] inline-block	text-[14px] font-bold uppercase'>
					DAS KLUBHAUS
				</Typography>
				<Post
					title={
						<>
							The Place <br />
							to be
						</>
					}
					postClassName='w-[362px]'
					titleClassName='text-6xl not-italic font-normal leading-[65px] tracking-[1.2px]'
					content='Im internen Fashion-Shop finden modebewusste Sportlerinnen und Sportler eine exklusive Auswahl an namhaften Brands mit hochwertigen Produkten für den aktiven Lifestyle: entspanntes Shopping in besonders angenehmem Ambiente und mit fachkundiger Modeberatung.'
				/>
			</div>
			<Typography
				textSize='heading2'
				className='absolute top-[295px] left-[350px] font-abril-fatface text-[#E40521] z-20'
			>
				klubhaus
			</Typography>
		</div>
	)
}

export default ClubPart

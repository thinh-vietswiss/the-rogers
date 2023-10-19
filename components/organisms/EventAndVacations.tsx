import Post from '@/components/molecules/Post'
import Image from 'next/image'
import Typography from '../atoms/Common/Typography'
import Ellipse from '../atoms/Ellipse'

const EventAndVacations = () => {
	return (
		<div className='relative min-h-[814px]'>
			<div className='absolute top-[208px] left-[727px] z-10 '>
				<Image
					src='/image/three-women.png'
					alt=''
					sizes='(min-width: 1024px):594px, (min-width: 768px) 50vw, 90vw'
					width={594}
					height={596}
					className=' w-[594px] h-[596px] object-cover'
				/>
			</div>
			<Ellipse
				width={480}
				height={480}
				bgColor='#EFEEEA'
				ElClassName='z-0 top-[271px] left-[789px]  absolute '
			/>
			<div className='absolute top-[340px] left-[200px]'>
				<Typography className='border-b-2 border-black pb-[0.4px] mb-[32px] inline-block	text-[14px] font-bold uppercase'>
					EVENTS & VACATIONS
				</Typography>
				<Post
					title={
						<>
							Hier ist <br />
							was los
						</>
					}
					postClassName='w-[388px]'
					titleClassName='text-6xl not-italic font-normal leading-[65px] tracking-[1.2px]'
					content='Create the spirit and share the passion: The Roger’s Klubhaus bietet für Sportbegeisterte alles für gemeinsame Erlebnisse und bleibende Momente – vom eindrücklichen Vortrag einer bekannten Persönlichkeit bis zu unvergesslichen Sportreisen zu den schönsten Orten dieser Erde. Unser vielfältiges Angebot richtet sich an alle Leistungsniveaus und Ansprüche. Dabei sein ist alles!'
				/>
			</div>
			<Typography
				textSize='heading2'
				className='absolute top-[208px] left-[692px] font-abril-fatface text-[#E40521] z-20 text-center'
			>
				events <br />&<br /> vacations
			</Typography>
		</div>
	)
}

export default EventAndVacations

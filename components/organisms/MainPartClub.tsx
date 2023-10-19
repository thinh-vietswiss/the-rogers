import Post from '@/components/molecules/Post'
import MenuMol from '@/components/molecules/Menu'
import Logo from '@/components/atoms/svg/logo'
import Image from 'next/image'
import Typography from '../atoms/Common/Typography'
import ButtonPlusSvg from '../atoms/svg/buttonPlus'
import Ellipse from '../atoms/Ellipse'

const MainPageClub = () => {
	return (
		<div className='relative mx-[90px]  h-[840px] mt-[73px]'>
			<MenuMol className='pt-[17px]' />
			<div className='absolute top-0 right-0'>
				<Logo />
			</div>
			<div className='absolute top-[128px] left-[-50px] z-10 '>
				<Image
					src='/image/bicycle.png'
					alt=''
					sizes='(min-width: 1024px): 436px, (min-width: 768px) 50vw, 90vw'
					width={900}
					height={720}
					className=' w-[900px] h-[720px] rotate-[-0.5deg] shrink-0 object-cover'
				/>
			</div>
			<Ellipse
				width={693}
				height={693}
				bgColor='#EFEEEA'
				ElClassName='z-0 top-[97px] left-2  absolute '
			/>
			<div className=' absolute right-0 top-[238px]'>
				<Post
					title='Wilkommen im Klub'
					postClassName='w-[450px]'
					content='Das Klubhaus ist ein Ort für Menschen mit einem aktiven und bewussten Lebensstil, die sich hier in lockerer Atmosphäre treffen und kennenlernen können. Hier findet man alles rund um die Passion des Velo- und Laufsports – vom Shop mit der richtigen Bekleidung, über die Werkstatt für einen Service bis zu gemeinsamen Events. Das kulinarische Angebot bietet die perfekte Gelegenheit für den lockeren Austausch unter Sportbegeisterten. Komm vorbei und erlebe das Klubhaus.'
				/>
			</div>
			<div className='absolute top-[199px] left-[4px] z-20'>
				<Typography
					textSize='base'
					className='pb-3 uppercase text-[#E40521] text-sm not-italic font-bold leading-[normal]'
				>
					RESERVATION <br /> BISTRO
				</Typography>
				<button>
					<ButtonPlusSvg />
				</button>
			</div>
			<Typography
				textSize='heading1'
				className='text-[#E40521] absolute right-[38px] top-[543px] z-10 '
			>
				KLUBHAUS
			</Typography>
		</div>
	)
}

export default MainPageClub

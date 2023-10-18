import Post from '@/components/molecules/Post'
import MenuMol from '@/components/molecules/Menu'
import Logo from '@/components/atoms/svg/logo'
import Image from 'next/image'
import Typography from '../atoms/Common/Typography'
import Button from '../atoms/Common/Button'
import ButtonPlus from '../atoms/svg/buttonPlus'
import Ellipse from '../atoms/Ellipse'
import MenuFood from '../molecules/MenuFood'
import dynamic from 'next/dynamic'
const ImageSlider = dynamic(() => import('../molecules/ImageSlider'), { ssr: false })
const SportPart = () => {
	return (
		<div className=' mx-[90px]  relative'>
			<div className='absolute top-[646px] left-[110px]'>
				<Typography className='border-b-2 border-black pb-[2.8px] mb-[32px] inline-block	text-[14px] font-bold uppercase'>
					WERKSTATT
				</Typography>
				<Post
					title={
						<>
							Der Ort
							<br /> für Sport
						</>
					}
					postClassName='w-[466px]'
					titleClassName='text-6xl not-italic font-normal leading-[65px] tracking-[1.2px]'
					content='Die Begeisterung für Sport ist ein Lebensstil und das Klubhaus der Ort dafür. Hier treffen sich gleichgesinnte Menschen für einen ungezwungenen Austausch beim Shopping oder zum Essen.'
				/>
			</div>
			<Image
				src='/image/bicycle-women-1.png'
				alt=''
				sizes='(min-width: 1024px): 681px, (min-width: 768px) 50vw, 90vw'
				width={681}
				height={705}
				className='absolute top-[194px] left-[730px]  w-[681px] h-[705px] z-10  shrink-0 object-cover'
			/>
			<Typography
				textSize='heading2'
				className='absolute top-[486px] left-[670px] font-abril-fatface text-[#E40521] z-20'
			>
				sports
			</Typography>
			<div
				className={`w-[480px] h-[480px] bg-white  absolute top-[366px] left-[790px]  z-0 rounded-full`}
			></div>
			<div
				className={`w-[97px] h-[97px] bg-white  absolute top-[97px] left-[515px]  z-0 rounded-full`}
			/>
			<div
				className={`w-[97px] h-[97px] bg-white  absolute top-[1116px] left-[848px]  z-0 rounded-full`}
			/>
			<div
				className={`w-[97px] h-[97px] bg-white  absolute top-[2993px] left-[410px]  z-0 rounded-full`}
			/>
			<div
				className={`w-[480px] h-[480px] bg-white  absolute top-[1466px] left-[150px]  z-0 rounded-full`}
			/>
			<div
				className={`w-[480px] h-[480px] bg-white  absolute top-[3106px] left-[744px]  z-0 rounded-full`}
			/>
			<Image
				src='/image/two-women.png'
				alt=''
				sizes='(min-width: 1024px): 681px, (min-width: 768px) 50vw, 90vw'
				width={681}
				height={705}
				className='absolute top-[1429px] left-[152px]  w-[459.757px] h-[516px] z-10  shrink-0 object-cover'
			/>
			<Typography
				textSize='heading2'
				className='absolute top-[1758px] left-[308px] font-abril-fatface text-[#E40521] z-20'
			>
				food
			</Typography>
			<div className='absolute top-[1428px] left-[764px]'>
				<Typography className='border-b-2 border-black pb-[0.4px] mb-[32px] inline-block	text-[14px] font-bold uppercase'>
					BISTRO LA BICI
				</Typography>
				<Post
					title={
						<>
							Genuss: <br />
							schmackhaft <br />
							und gesund
						</>
					}
					postClassName='w-[388px]'
					titleClassName='text-6xl not-italic font-normal leading-[65px] tracking-[1.2px]'
					content='Der kleine Hunger zwischendurch, eine schmackhafte Stärkung nach dem Training oder einfach Lust auf etwas Süsses: Im Klubhaus gibt’s täglich frische und leckere Angebote an schmackhaften Köstlichkeiten der Focacceria, kleine italienische Dolci mit einer köstlichen Tasse echtem italienischem Espresso und für das Geschmackserlebnis zuhause exklusive Delikatessen zum Mitnehmen.'
				/>
				<MenuFood ulClassName='pt-[67px]' />
			</div>
			<div className='absolute top-[2266px] left-[-90px] w-[1440px]'>
				<ImageSlider />
			</div>
			<Image
				src='/image/fashion-man.png'
				alt=''
				sizes='(min-width: 1024px): 397px, (min-width: 768px) 50vw, 90vw'
				width={397}
				height={889}
				className='absolute top-[2935px] left-[762px]  w-[397px] h-[889px] z-10  shrink-0 object-cover'
			/>
			<Typography
				textSize='heading2'
				className='absolute top-[3231px] left-[630px] font-abril-fatface text-[#E40521] z-20'
			>
				fashion
			</Typography>
			<div className='absolute top-[3329px] left-[110px]'>
				<Typography className='border-b-2 border-black pb-[0.4px] mb-[32px] inline-block	text-[14px] font-bold uppercase'>
					FASHION BRANDS
				</Typography>
				<Post
					title={
						<>
							Gut gerüstet <br />
							besser <br />
							aussehen
						</>
					}
					postClassName='w-[602px]'
					titleClassName='text-6xl not-italic font-normal leading-[65px] tracking-[1.2px]'
					content='Im internen Fashion-Shop finden modebewusste Sportlerinnen und Sportler eine exklusive Auswahl an namhaften Brands mit hochwertigen Produkten für den aktiven Lifestyle: entspanntes Shopping in besonders angenehmem Ambiente und mit fachkundiger Modeberatung.'
				/>
			</div>
		</div>
	)
}

export default SportPart

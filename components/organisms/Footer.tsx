import Typography from '../atoms/Common/Typography'
import ContactInfo from '../molecules/ContactInfo'
import Logo from '@/components/atoms/svg/logo'
import Socials from '../molecules/Socials'

const Footer = () => {
	return (
		<div className='relative  w-full   text-center'>
			<div className='z-0 absolute left-[50%] -translate-x-2/4 translate-y-0 w-full h-full bg-[#EFEEEA] rounded-t-full '></div>

			<Typography
				textSize='heading5'
				className='font-abril-fatface sticky text-[#E40521] z-20 pt-[143px]  tracking-[0.66px]  '
			>
				SIGN UP to get a member
			</Typography>
			<Typography className='sticky z-20  pt-[50px] pb-[44px] font-normal leading-[normal]'>
				Die aktuellsten News, die exklusive Events oder die neusten Fashion-Trends:
				Abonniere <br /> jetzt den Newsletter und bleib jederzeit up to date beim The
				Roger’s Klubhaus.
			</Typography>
			<button className='sticky z-20  mb-[79px] pb-[2px] outline-none border-b-[1px]  text-[#E40521] text-sm not-italic font-bold leading-[normal]'>
				SIGN UP
			</button>
			<div className='sticky text-center'>
				<Typography textSize='heading3' className='   text-[#E40521] z-20   uppercase'>
					klubhaus
				</Typography>
				<Typography
					textSize='text2xl'
					className='  font-bold text-[#E40521] z-20   uppercase'
				>
					sports  .  fashion  .  food
				</Typography>
			</div>
			<div className='grid grid-cols-2 gap-8  pt-[10px] pb-[100px]  md:grid-cols-3 sticky z-20'>
				<div className='pt-[68px] pl-[198px] text-left'>
					<Socials />
					<Typography textSize='textLg' className='mt-[47px]'>
						IMPRESSUM
					</Typography>
				</div>
				<div className='flex  justify-center mt-7'>
					<Logo />
				</div>
				<div>
					<div className='pl-[90px]'>
						<ContactInfo />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer

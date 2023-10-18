import MainPartClub from '@/components/organisms/MainPartClub'
import SportPart from '@/components/organisms/SportPart'
const HomeTemplate = () => {
	return (
		<div className='lg:max-w-[1440px] lg:mx-auto max-w-full'>
			<MainPartClub />
			<div className='h-[4341px] bg-[#EFEEEA]'>
				<SportPart />
			</div>
		</div>
	)
}

export default HomeTemplate

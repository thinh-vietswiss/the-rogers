import MainPartClub from '@/components/organisms/MainPartClub'
import SportPart from '@/components/organisms/SportPart'
import ClubPart from '@/components/organisms/ClubPart'
import sponsorLogo from '@/data/sponsorLogo.json'
import ImageSlider from '../molecules/ImageSlider'
import EventAndVacations from '../organisms/EventAndVacations'
import ListBlogs from '../organisms/ListBlogs'
import blogData from '@/data/blogData.json'
const HomeTemplate = () => {
	return (
		<div className='lg:max-w-[1440px] lg:mx-auto max-w-full'>
			<MainPartClub />
			<div className='h-[4341px] overflow-hidden bg-[#EFEEEA]'>
				<SportPart sponsorLogoData={sponsorLogo} />
			</div>
			<div className=''>
				<ClubPart />
				<div className='min-h-[488px]'>
					<ImageSlider />
				</div>
				<EventAndVacations />
				<ListBlogs blogData={blogData} />
			</div>
		</div>
	)
}

export default HomeTemplate

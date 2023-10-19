import React from 'react'
import Image from 'next/image'
import { IImageData } from '@/types'

interface ListSponsorProps {
	listSponsor: IImageData[]
}

const ListSponsorLogo: React.FC<ListSponsorProps> = ({ listSponsor = [] }) => {
	return (
		<div className='grid grid-cols-7 gap-x-[30px] '>
			{listSponsor.map((item, index) => (
				<div key={`id${index}`} className='w-[127px] h-[105px] relative text-center'>
					<Image src={item.src} width={127} height={105} alt='' className='absolute' />
				</div>
			))}
		</div>
	)
}

export default ListSponsorLogo

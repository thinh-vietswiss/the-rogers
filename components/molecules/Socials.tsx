import React from 'react'
import ButtonPlusSmall from '../atoms/ButtonPlusSmall'
import Link from 'next/link'
import FbIcon from '../atoms/svg/FbIcon'
import LinkedinIcon from '../atoms/svg/LinkedinIcon'
import InstagramIcon from '../atoms/svg/InstagramIcon'

interface BtProps {
	ulClassName?: string
}

const Socials: React.FC<BtProps> = ({ ulClassName = '' }) => {
	return (
		<div className='flex space-x-5  md:mt-0'>
			<Link href='#'>
				<FbIcon></FbIcon>
			</Link>
			<Link href='#'>
				<LinkedinIcon></LinkedinIcon>
			</Link>
			<Link href='#'>
				<InstagramIcon></InstagramIcon>
			</Link>
		</div>
	)
}

export default Socials

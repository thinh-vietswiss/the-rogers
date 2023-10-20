import React from 'react'
import Typography from '../atoms/Common/Typography'
import PhoneIcon from '../atoms/svg/PhoneIcon'
import EmailIcon from '../atoms/svg/EmailIcon'
import Link from 'next/link'

interface BtProps {
	ulClassName?: string
}

const ContactInfo: React.FC<BtProps> = ({ ulClassName = '' }) => {
	return (
		<ul className='text-left'>
			<li className='mb-[30px]'>
				<Typography textSize='heading5' className='font-abril-fatface'>
					Contact us
				</Typography>
			</li>
			<li className='mb-[22px]'>
				<Typography>
					Fürstenlandstrasse
					<br /> 98 9014 St. Gallen
				</Typography>
			</li>
			<li>
				<ul className='font-medium'>
					<li className=''>
						<div className='inline-flex'>
							<PhoneIcon />
							<Typography>&nbsp;+41 71 272 13 13</Typography>
						</div>
					</li>
					<li>
						<div className='inline-flex'>
							<EmailIcon />
							&nbsp;
							<Link href='#' className='underline'>
								info@klubhaus.sg
							</Link>
						</div>
					</li>
				</ul>
			</li>
		</ul>
	)
}
export default ContactInfo

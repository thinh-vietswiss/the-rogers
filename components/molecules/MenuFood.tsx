import React from 'react'
import ButtonPlusSmall from '../atoms/ButtonPlusSmall'

interface BtProps {
	ulClassName?: string
}

const MenuFood: React.FC<BtProps> = ({ ulClassName = '' }) => {
	return (
		<>
			<ul className={ulClassName}>
				<li className=' text-[#E40521] flex items-center	gap-x-4 align-middle pb-5 text-sm not-italic font-bold leading-[25px] tracking-[0.28px] uppercase'>
					<ButtonPlusSmall />
					TISCHRESERVATION
				</li>
				<li className=' text-[#E40521] flex items-center	gap-x-4 align-middle pb-5 text-sm not-italic font-bold leading-[25px] tracking-[0.28px] uppercase'>
					<ButtonPlusSmall />
					BISTRO LA BICI - MENü
				</li>
				<li className=' text-[#E40521] flex items-center	gap-x-4 align-middle pb-5 text-sm not-italic font-bold leading-[25px] tracking-[0.28px] uppercase'>
					<ButtonPlusSmall />
					CAFFE DOLCI - ANGEBOTE
				</li>
			</ul>
		</>
	)
}
export default MenuFood

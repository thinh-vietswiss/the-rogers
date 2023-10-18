// MenuItem.tsx
import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
	active?: boolean
	children: any
	href: string
}

const MenuItem: React.FC<MenuItemProps> = ({ active, children, ...props }) => {
	return (
		<Link
			className={`menu-item ${
				active ? 'active' : ''
			}  font-bold uppercase font-sans text-black text-[20px]  hover:text-[#E40521]`}
			{...props}
		>
			{children}
		</Link>
	)
}

export default MenuItem

import Link from '@/components/atoms/Common/Link'

interface MenuMolProps {
	className?: string
}

const MenuMol: React.FC<MenuMolProps> = ({ className }) => {
	return (
		<div className={className}>
			<ul className='flex'>
				<li className='mr-[50px]'>
					<Link href='/?'>sports</Link>
				</li>
				<li className='mr-[50px]'>
					<Link href='/?'>food</Link>
				</li>
				<li className='mr-[50px]'>
					<Link href='/?'>fashion</Link>
				</li>
				<li className='mr-[50px]'>
					<Link href='/?'>KLUBHAUS</Link>
				</li>
				<li className='mr-[50px]'>
					<Link href='/?'>EVENTS</Link>
				</li>
				<li className='mr-[50px]'>
					<Link href='/?'>NEWS</Link>
				</li>
			</ul>
		</div>
	)
}

export default MenuMol

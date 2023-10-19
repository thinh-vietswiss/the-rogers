import React from 'react'
import Button from '../atoms/Common/Button'

const ButtonsFilterBlogs: React.FC = () => {
	return (
		<div className='flex gap-x-[26px] '>
			<Button variant='outline'>ALLE</Button>
			<Button variant='outline'>INHOUSE EVENTS</Button>
			<Button variant='outline'>ACTIVITIES</Button>
			<Button variant='outline'>CYCLING VACATION</Button>
		</div>
	)
}

export default ButtonsFilterBlogs

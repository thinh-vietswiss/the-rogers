import Link from '@/components/atoms/Common/Link'
import Typography from '@/components/atoms/Common/Typography'
import Logo from '@/components/atoms/Logo'
import React from 'react'
interface PostProps {
	title?: any
	content: string
	titleClassName?: string
	postClassName?: string
	contentClassName?: string
}

const Post: React.FC<PostProps> = (props) => {
	return (
		<div className={`${props.postClassName}`}>
			<Typography
				textSize='heading5'
				className={`pb-7 font-abril-fatface ${props.titleClassName}`}
			>
				{props.title}
			</Typography>
			<Typography textSize='base' className={`${props.contentClassName}`}>
				{props.content}
			</Typography>
		</div>
	)
}

export default Post

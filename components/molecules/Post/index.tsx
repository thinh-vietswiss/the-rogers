import { clsx } from 'clsx'
import Typography from '@/components/atoms/Common/Typography'
import React from 'react'
interface PostProps {
	title?: any
	content?: any
	contentCustom?: any
	titleClassName?: string
	postClassName?: string
	contentClassName?: string
}

const Post: React.FC<PostProps> = (props) => {
	return (
		<div className={props.postClassName}>
			<Typography
				textSize='heading5'
				className={clsx(`pb-7 font-abril-fatface `, props.titleClassName)}
			>
				{props.title}
			</Typography>
			{props.contentCustom}
			<Typography textSize='base' className={props.contentClassName}>
				{props.content}
			</Typography>
		</div>
	)
}

export default Post

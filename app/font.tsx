import { Abril_Fatface } from 'next/font/google'
import localFont from 'next/font/local'

export const abrilFatface = Abril_Fatface({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-abril-fatface',
})

export const helvetica = localFont({
	src: [
		{
			path: '../public/fonts/Helvetica-Bold.eot',
			weight: '400',
			style: 'normal',
		},

		{
			path: '../public/fonts/Helvetica-Bold.ttf',
			weight: '400',
			style: 'normal',
		},

		{
			path: '../public/fonts/Helvetica-Bold.woff',
			weight: '400',
			style: 'normal',
		},

		{
			path: '../public/fonts/Helvetica-Bold.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Helvetica-Light.eot',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Helvetica-Light.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Helvetica-Light.woff',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Helvetica-Light.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Helvetica.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Helvetica.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Helvetica.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Helvetica.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-helvetica',
})

// ImageSlider.tsx
'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
interface Image {
	id: number
	url: string
}

interface ImageSliderProps {
	images?: Image[]
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
	return (
		<Swiper
			effect={'coverflow'}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={2}
			coverflowEffect={{
				rotate: 0,
				stretch: 0,
				depth: 500,
				modifier: 1,
				slideShadows: true,
			}}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			pagination={true}
			modules={[Autoplay, EffectCoverflow]}
			className='mySwiper'
			spaceBetween={200}
			loop
		>
			<SwiperSlide>
				<Image src='/image/slide2.png' width={732} alt='' height={329} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/image/slide2.png' width={732} alt='' height={329} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/image/slide2.png' width={732} alt='' height={329} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/image/slide2.png' width={732} alt='' height={329} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/image/slide2.png' width={732} alt='' height={329} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/image/slide2.png' width={732} alt='' height={329} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/image/slide2.png' width={732} alt='' height={329} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/image/slide2.png' width={732} alt='' height={329} />
			</SwiperSlide>
		</Swiper>
	)
}

export default ImageSlider

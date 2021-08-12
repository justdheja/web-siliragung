import Image from 'next/image';
import SwiperCore, { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import gallery1 from '../public/1.jpg';
import gallery2 from '../public/2.jpg';
import gallery3 from '../public/3.jpg';
import gallery4 from '../public/4.jpg';

// Import Swiper styles
import 'swiper/swiper.min.css';

// install Virtual module
SwiperCore.use([Virtual]);

const ImageGallery = () => {
	return (
		<div className="shadow-2xl rounded w-full p-4 lg:p-8 bg-white relative overflow-hidden ">
			<div className="text-4xl dm-serif text-center mb-8">Gallery</div>
			<Swiper
				spaceBetween={50}
				slidesPerView={2}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				loop={true}
			>
				<SwiperSlide>
					<Image src={gallery1} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={gallery2} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={gallery3} alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={gallery4} alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default ImageGallery;

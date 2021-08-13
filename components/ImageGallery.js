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
			<div className="text-3xl dm-serif text-center mb-8">Gallery</div>
			<Swiper
				spaceBetween={10}
				slidesPerView={2}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
				loop={true}
			>
				<SwiperSlide>
					<Image src={gallery1} alt="gallery-image" className=" w-20 cursor-grab" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={gallery2} alt="gallery-image" className=" w-20 cursor-grab" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={gallery3} alt="gallery-image" className=" w-20 cursor-grab" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src={gallery4} alt="gallery-image" className=" w-20 cursor-grab" />
				</SwiperSlide>
			</Swiper>

			<p className="text-sm mt-4">sumber: Luqman Adi Putra</p>
		</div>
	);
};

export default ImageGallery;

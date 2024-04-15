// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image from '../../../public/Slides.json'

const Slider = () => {
    [
        {
          "id": 1,
          "img": "https://example.com/image1.jpg"
        },
        {
          "id": 2,
          "img": "https://example.com/image2.jpg"
        },
        {
          "id": 3,
          "img": "https://example.com/image3.jpg"
        }
      ]
    return (
        <div>
             <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        {
            image.map((img)=>(
                <SwiperSlide key={img.id}><img className='w-screen h-96' src={img.img} alt="" />jjj</SwiperSlide>
            ))
        }
    </Swiper>
        </div>
    );
};

export default Slider;
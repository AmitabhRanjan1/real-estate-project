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

                    image.map((img) => (
                        
                        <SwiperSlide key={img.id}>
                            <div className="relative">
                            <img className='w-screen h-96' src={img.img} alt="" />
                            <div className="absolute top-14 left-5 lg:top-20  lg:left-60 lg:p-4 text-sky-950 p-6 ">
                                <h2 className="text-3xl text-sky-950 font-bold">{img.title}</h2>
                                <p className="text-base  font-bold mt-2">{img.description}</p>
                                <button className='bg-[#E1F7F5] text-sky-950 btn mt-4 font-bold text-base'>View</button>
                            </div>
                        </div>
                            
                            </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slider;
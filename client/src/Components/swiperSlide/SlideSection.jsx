import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { projectIcons } from '../../assets/icons';
import { projectImage } from '../../assets/image';


function SlideSection() {

    return (
        <div className='py-24'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={false}


                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,

                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, EffectCoverflow, Pagination]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                className="mySwiper"


            >
                <SwiperSlide className='rounded-lg'>
                    <div className='h-[200px] bg-red-300 relative rounded-lg'>
                        <img src={projectImage.HeaderImage} alt="" className='w-full h-full' />
                        <div className="slider__cover absolute bottom-5 left-5">
                            <p className='text-white'>Desert</p>
                            <span className='text-white'>
                                rating
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[200px] bg-red-300 relative'>
                        <img src={projectImage.HeaderImage} alt="" className='w-full h-full' />
                        <div className="slider__cover absolute bottom-5 left-5">
                            <p className='text-white'>Desert</p>
                            <span className='text-white'>
                                rating
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[200px] bg-red-300 relative'>
                        <img src={projectImage.HeaderImage} alt="" className='w-full h-full' />
                        <div className="slider__cover absolute bottom-5 left-5">
                            <p className='text-white'>Desert</p>
                            <span className='text-white'>
                                rating
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[200px] bg-red-300 relative'>
                        <img src={projectImage.HeaderImage} alt="" className='w-full h-full' />
                        <div className="slider__cover absolute bottom-5 left-5">
                            <p className='text-white'>Desert</p>
                            <span className='text-white'>
                                rating
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[200px] bg-red-300 relative'>
                        <img src={projectImage.HeaderImage} alt="" className='w-full h-full' />
                        <div className="slider__cover absolute bottom-5 left-5">
                            <p className='text-white'>Desert</p>
                            <span className='text-white'>
                                rating
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[200px] bg-red-300 relative'>
                        <img src={projectImage.HeaderImage} alt="" className='w-full h-full' />
                        <div className="slider__cover absolute bottom-5 left-5">
                            <p className='text-white'>Desert</p>
                            <span className='text-white'>
                                rating
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default SlideSection;

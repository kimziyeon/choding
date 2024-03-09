"use client";
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './mainSlide.scss';

import popularJsonData from '@/data/popular.json';


export default function MainSlide() {
    const [slideNum, setNum] = useState<number>(2.5);

    const innerWidth = window.innerWidth;

    useEffect(() => {
        const handleResize = () => {
            window.innerWidth < 430 ? setNum(1.5) : setNum(2.5)
      };
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <section className='contentsBox' id="mainPopularSlide">
        <div className='contLeft'>
            <p className='subtext'>초딩들이 스크랩한</p>
            <h3 className='title'>
                <span>요즘 인기있는</span> 강의
            </h3>
        </div>
        <Swiper
        slidesPerView={slideNum}
        spaceBetween={18}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, Pagination]}
                className="mySwiper"
                id="mainSlide"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
      </Swiper>
    </section>
    )
}
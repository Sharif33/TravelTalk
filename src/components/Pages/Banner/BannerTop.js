import React from 'react';
import b1 from "../../images/travel1.jpg";
import b2 from "../../images/travel2.jpg";
import b3 from "../../images/travel3.jpg";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Banner.css";
SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);

const BannerTop = () => {
    return (
        <div>
            <div className="main-swiper">
                <Swiper
                    spaceBetween={30} centeredSlides={true} autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }} pagination={{
                        "clickable": true
                    }} navigation={false} className="mySwiper">
                    <SwiperSlide>
                        <img className='img-fluid bnrImg' src={b1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-fluid bnrImg' src={b2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='img-fluid bnrImg' src={b3} alt="" />
                    </SwiperSlide>
                    </Swiper>
            </div>
        </div>
    );
};

export default BannerTop;
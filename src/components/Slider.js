import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Img1 from "../images/1.jpg"
import Img2 from "../images/2.jpg"
import Img3 from "../images/3.jpg"
import Img4 from "../images/4.jpg"
import Img5 from "../images/5.jpg"


// import required modules
import { Navigation } from "swiper";

function Slider() {
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-[80vh] ">
                <SwiperSlide><img src={Img1} className="w-full h-full object-cover " alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img2} className="w-full h-full object-cover " alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img3} className="w-full h-full object-cover " alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img4} className="w-full h-full object-cover " alt="" /></SwiperSlide>
                <SwiperSlide><img src={Img5} className="w-full h-full object-cover " alt="" /></SwiperSlide>

            </Swiper>
        </>
    );
}

export default Slider;
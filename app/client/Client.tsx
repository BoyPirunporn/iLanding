import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
const images = [
    "/assets/client-1.png",
    "/assets/client-2.png",
    "/assets/client-3.png",
    "/assets/client-4.png",
    "/assets/client-5.png",
    "/assets/client-6.png",
    "/assets/client-7.png",
    "/assets/client-8.png",
]
const Client = () => {
    const [slidePerView, setSlidePerView] = useState(6);

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth < 768) {
                setSlidePerView(2);
            } else {
                setSlidePerView(6);
            }
        };

        handleSize(); // เรียกใช้งานครั้งแรกตอนโหลดหน้า
        window.addEventListener("resize", handleSize);

        return () => {
            window.removeEventListener("resize", handleSize);
        };
    }, []);
    return (
        <section id='client' className='container mx-auto p-[60px_0]'>
            <Swiper modules={[Autoplay, Pagination, Navigation]}
                loop
                pagination={{
                    enabled: true,
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={50}
                slidesPerView={slidePerView}>
                {images.map((src, index) => (
                    <SwiperSlide key={index} className='cursor-pointer'>
                        <div className="w-[116px] h-[40px]  ">
                            <Image
                                src={src}
                                alt=''
                                fill
                                objectFit='contain'
                                className='  grayscale hover:grayscale-0 hover:opacity-1 transition-[.3s] opacity-[.5]'
                            /></div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    );
}

export default Client;

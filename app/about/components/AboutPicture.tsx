import AboutFoating from './AboutFoating';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutPicture = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 1.2
            }}
            whileInView={{
                opacity: 1,
                scale: 1
            }}
            viewport={{ amount: .5, once: true }}
            transition={{
                delay: 0.3,
                duration: .5,
            }}
            className="w-full  relative h-auto flex flex-col gap-5 xl:gap-0 justify-center items-center">
            <div className="relative h-[365px] w-full xl:w-[636px] xl:h-[424px] xl:left-20">
                <Image
                    src={"/assets/about-5.webp"}
                    alt=""
                    fill
                    className="object-cover rounded-xl"
                />
            </div>
            <div className="xl:absolute mb-10 md:mb-0 xl:top-20 xl:left-0 xl:right-10 w-full  ">
                <div className="w-full relative xl:h-[271px] xl:w-[271px] h-[396px] lg:h-[696px]">
                    <Image
                        src={"/assets/about-2.webp"}
                        alt=""
                        fill
                        className="object-fill rounded-xl xl:border-[5px] xl:border-white"
                    />
                </div>
            </div>
            <div className="py-2 xl:py-0"></div>
            <AboutFoating />
        </motion.div>
    );
}

export default AboutPicture;

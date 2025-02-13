import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
const FeaturePhonePicture = () => {
    return (
        <div className="w-full flex justify-center">
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: false }}
                transition={{
                    ease: "easeIn",
                    duration: .5
                }}
                className="w-[300px] h-[593px] relative ">
                <Image
                    alt=''
                    fill
                    className='object-contain'
                    src="/assets/phone-app-screen.webp"
                />
            </motion.div>
        </div>
    );
}

export default FeaturePhonePicture;

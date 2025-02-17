import { motion } from 'framer-motion';
import React from 'react';

const AboutFoating = () => {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }} // ขยับขึ้น -20px แล้วกลับมาที่เดิม
            transition={{
                duration: 3,    // ระยะเวลารอบละ 1 วินาที
                repeat: Infinity, // ทำซ้ำไม่สิ้นสุด
                repeatType: "loop", // ให้วนซ้ำแบบ loop
                ease: "easeInOut" // ทำให้การเคลื่อนไหวเนียนขึ้น
            }}
            className="text-white w-[250px] bg-accent  xl:absolute  xl:bottom-[5%] xl:right-[5%] rounded-xl text-center p-[1.5rem]">
            <p className=" flex flex-row gap-2 items-center justify-center">
                <span className="text-2xl xl:text-5xl">15+</span>
                <span className="text-sm">Years</span>
            </p>
            <span className="text-sm">Of experience in business service</span>
        </motion.div>
    );
}

export default AboutFoating;

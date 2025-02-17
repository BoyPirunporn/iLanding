import React from 'react';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa6';
const AboutInfoWrapper = () => {
    return (
        <div className="flex flex-row gap-10 mt-10">
            <div className=" flex flex-row gap-2">
                <div className="relative w-[60px] h-[60px] ">
                    <Image
                        src={"/assets/avatar/avatar-1.webp"}
                        alt=""
                        className="rounded-full"
                        fill
                        objectFit="cover"
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-[18px]">Mario Smith</p>
                    <p className="text-[14px] text-accent">CEO & Founder</p>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
                <FaPhone className="text-accent" size={28} />
                <div className="flex flex-col ">
                    <p className="text-primary/70">Call us anytime</p>
                    <p className="text-primary font-bold">+123 456-789</p>
                </div>
            </div>
        </div>
    );
}

export default AboutInfoWrapper;

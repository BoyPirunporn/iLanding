import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { IoCheckmarkDone } from "react-icons/io5";

const Modisit = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .1, duration: .3, ease: "easeIn" } }} >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 items-center ">
                <div className='order-2 md:order-none flex flex-col'>
                    <h1 className='mb-[20px] pb-[20px]  text-3xl font-[500] relative after:w-[100px] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[3px] after:bg-accent after:content-[""] '>
                        Voluptatem dignissimos provident
                    </h1>
                    <p className="text-[16px] text-primary/80 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus vel necessitatibus ut fuga minus dolorem qui corrupti eius omnis rem!</p>

                    <ul className="flex flex-col gap-3 mt-10">
                        {[
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa.",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti?",
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse modi inventore voluptas vitae laborum molestiae dolorem, debitis culpa sequi!"
                        ].map((value, index) => (
                            <li key={index} className='flex flex-row gap-2 items-center w-full'>
                                <IoCheckmarkDone className='h-6 w-6 flex-shrink-0 text-[#0d83fd]'/>
                                <p className='text-md leading-tight'>{value}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='order-1 md:order-none w-full h-[200px] md:h-[435px] relative'>
                    <Image
                        src={"/assets/features/features-illustration-1.webp"}
                        alt=''
                        fill
                        className='object-cover'
                    />
                </div>
            </div>
        </motion.div>
    );
}

export default Modisit;

'use client';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import { BsCheckCircle } from "react-icons/bs";

const ContentRight = () => {
    return (
        <motion.div
            initial={{
                y: 100,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: .5,
                    ease: "easeIn"
                }
            }}

            className='w-[820px] '>
            <div className='relative h-[518px]'>
                <Image
                    src={"/assets/services.jpg"}
                    alt=""
                    fill
                    objectFit="cover"
                />
            </div>
            <div className='mt-3'>
                <h1 className='text-2xl text-primary font-bold'>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h1>
                <p className='my-3 text-md '>Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.</p>
                <ul className='flex flex-col gap-5 my-7'>
                    <li className='flex items-center !flex-shrink-0 '>
                        <BsCheckCircle className={`rounded-full flex-shrink-0 mr-2 text-accent`} size={20} />
                        <p className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, distinctio!</p>
                    </li>
                    <li className='flex items-center !flex-shrink-0 '>
                        <BsCheckCircle className={`rounded-full flex-shrink-0 mr-2 text-accent`} size={20} />
                        <p className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, distinctio!</p>
                    </li>
                    <li className='flex items-center !flex-shrink-0 '>
                        <BsCheckCircle className={`rounded-full flex-shrink-0 mr-2 text-accent `} size={20} />
                        <p className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, distinctio!</p>
                    </li>
                </ul>
                <p className="text-md mb-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia modi nam dolores vitae magnam voluptate repellat magni placeat? Voluptatibus, pariatur.</p>
                <p className="text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eaque hic facere maiores minus aliquid, repellendus deserunt vero nihil. Possimus consectetur nulla ad accusantium maiores ipsa alias iusto dicta cum necessitatibus itaque laudantium doloremque impedit nesciunt nisi in maxime id fuga fugit, commodi aliquam qui! Perferendis rerum suscipit nesciunt commodi.</p>
            </div>
        </motion.div>
    );
}

export default ContentRight;

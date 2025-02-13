import { motion } from 'framer-motion';
import React from 'react';

import {
    BsArrowRightCircle,
    BsFiletypePdf,
    BsFileEarmarkWord,
    BsHeadset,
    BsTelephone,
    BsEnvelope 
} from "react-icons/bs";

const sericesList = [
    { icon: <BsArrowRightCircle size={16} className='text-accent group-hover:text-white' />, title: "Web Design" },
    { icon: <BsArrowRightCircle size={16} className='text-accent group-hover:text-white' />, title: "Product Management" },
    { icon: <BsArrowRightCircle size={16} className='text-accent group-hover:text-white' />, title: "Graphic Design" },
    { icon: <BsArrowRightCircle size={16} className='text-accent group-hover:text-white' />, title: "Marketing" },
]
const catalog = [
    { icon: <BsFiletypePdf size={24} className='text-accent group-hover:text-white' />, title: "Catalog PDF" },
    { icon: <BsFileEarmarkWord size={24} className='text-accent group-hover:text-white' />, title: "Catalog DOC" },
]
const ContentLeft = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: .5,
                    ease: "easeIn"
                }
            }}
            className='w-full md:max-w-[33.33%]'
        >
            <div className="flex flex-col gap-10 mb-10">
                <h1 className='text-2xl text-primary font-bold'>Serices List</h1>
                <ul className="flex flex-col gap-2 items-center w-full">
                    {sericesList.map((item, index) => (
                        <li key={index} className='transition-all group hover:bg-accent hover:text-white w-full flex flex-row items-center gap-5 py-4 px-3 cursor-pointer duration-300'>
                            {item.icon}
                            <p className='text-md'>{item.title}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col gap-10 mb-10">
                <h1 className='text-2xl text-primary font-bold'>Download Catalog</h1>
                <ul className="flex flex-col gap-2 items-center w-full">
                    {catalog.map((item, index) => (
                        <li key={index} className='transition-all group hover:bg-accent hover:text-white w-full flex flex-row items-center gap-5 py-4 px-3 cursor-pointer duration-300'>
                            {item.icon}
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-10 w-full ">
                <div className='bg-accent w-full p-10 text-white flex flex-col justify-center items-center'>
                    <BsHeadset size={48} className='text-white mb-5' />
                    <h1 className="text-3xl mb-5">Have a Question?</h1>
                    <p className='flex flex-row gap-2 items-center mb-2'>
                        <BsTelephone size={16} />
                        <span>+1 5589 55488 55</span>
                    </p>
                    <p className='flex flex-row gap-2 items-center mb-2'>
                        <BsEnvelope size={16} />
                        <span>contact@example.com</span>
                    </p>
                </div>
            </div>

        </motion.div>
    );
}

export default ContentLeft;

import { motion } from 'framer-motion';
import React from 'react';
import { BsDisplay, BsFeather, BsEye } from "react-icons/bs";

const listFeature = [
    { icon: <BsDisplay size={24} className='flex-shrink-0 text-accent' />, title: "Use On Any Device", description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia." },
    { icon: <BsFeather size={24} className='flex-shrink-0 text-accent' />, title: "Feather Icons", description: "Phasellus ullamcorper ipsum rutrum nunc nunc nonummy metus vestibulum volutpat sapien arcu sed augue aliquam erat volutpat." },
    { icon: <BsEye size={24} className='flex-shrink-0 text-accent' />, title: "Retina Ready", description: "Aenean tellus metus bibendum sed posuere ac mattis non nunc vestibulum fringilla purus sit amet fermentum aenean commodo." },
]
const FeatureLeft = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            viewport={{ once: false }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                delay: 1
            }}
            className='flex flex-col gap-10'>
            {listFeature.map((feature, index) => (
                <motion.div
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ once: false }}
                    initial={{
                        opacity: 0,
                        x: -100
                    }}
                    transition={{
                        delay: 1 + index * .4,
                        duration: .5,
                        ease: "easeIn"
                    }}
                    key={index} className="flex flex-col md:flex-row gap-10 items-center min-h-[140px]">
                    <div className="flex flex-col gap-3 ">
                        <h1 className="text-2xl text-center md:text-end font-[600]">{feature.title}</h1>
                        <p className="text-md text-primary/80 text-center md:text-end">{feature.description}</p>
                    </div>
                    {feature.icon}
                </motion.div>
            ))
            }
        </motion.div >
    );
}

export default FeatureLeft;

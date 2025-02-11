import { motion, Variants } from 'framer-motion';
import React, { JSX } from 'react';

interface CardFeatureProps {
    index: number;
    icon: JSX.Element;
    bg: string;
    title: string;
    description: string
}

const variants: Variants = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: .2,
            duration: .5,
            ease: "easeIn"
        }
    }
}
const CardFeature = ({
    icon,
    index,
    bg: backgroundColor,
    title,
    description
}: CardFeatureProps) => {
    return (
        <motion.div
            variants={{
                initial: {
                    opacity: 0,
                    scale: 0
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
            }}
            initial='initial'
            animate={"animate"}
            transition={{
                duration: 0.2,
                each: "easeInOut",
                delay: index * 0.3,
                
            }}
            className='flex flex-col gap-3 py-9 px-6 rounded-lg'
            style={{
                backgroundColor
            }}
        >
            {icon}
            <h3 className="text-lg font-bold">{title}</h3>
            <p className='text-md text-primary/90'>{description}</p>
        </motion.div>
    );
}

export default CardFeature;

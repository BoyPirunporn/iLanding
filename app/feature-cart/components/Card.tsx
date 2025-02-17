import {  Variants } from 'framer-motion';
import React, { JSX } from 'react';

interface CardFeatureProps {
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
    bg: backgroundColor,
    title,
    description
}: CardFeatureProps) => {
    return (
        <div
            className='flex flex-col gap-3 py-9 px-6 rounded-lg h-full'
            style={{
                backgroundColor
            }}
        >
            {icon}
            <h3 className="text-lg font-bold">{title}</h3>
            <p className='text-md text-primary/90'>{description}</p>
        </div>
    );
}

export default CardFeature;

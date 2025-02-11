import Link from 'next/link';
import React, { JSX } from 'react';
import { BsArrowRightShort } from "react-icons/bs";

const ServiceCard = ({
    icon, title, description, href
}: {
    icon: JSX.Element;
    title: string;
    description: string;
    href: string;
}) => {
    return (
        <div className="flex flex-row gap-10 group">
            <div className="h-[60px] flex-shrink-0 transition-all duration-300 w-[60px] items-center flex justify-center  group-hover:bg-accent rounded-lg group-hover:text-white bg-accent/10 text-accent ">
                {icon}
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-xl font-bold">{title}</h1>
                <p className="text-primary/80 text-base">{description}</p>
                <Link href={href} className='text-accent flex flex-row items-center group'>
                    <span>Read More</span>
                    <BsArrowRightShort className='transition-transform group-hover:translate-x-2 duration-300' />
                </Link>
            </div>
        </div>
    );
}

export default ServiceCard;

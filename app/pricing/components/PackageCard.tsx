import React from 'react';
import PackageList from './PackageList';
import { Button } from '@/components/ui/button';
import { BsArrowRightShort } from 'react-icons/bs';

const PackageCard = ({
    title,
    price,
    desc,
    features,
    active
}: {
    title: string;
    price: number;
    desc: string;
    features: string[];
    active: boolean;
}) => {
    return (
        <div className={`flex flex-col  relative ${active ? "bg-accent text-white rounded-3xl" : ""}`}>
            {active && (
                <div className='bg-white rounded-2xl p-2 absolute -top-5 font-bold left-1/2 transform -translate-x-1/2'>
                    <span className='text-accent'>Most Popular</span>
                </div>
            )}
            <div className={`${active && "mb-5"}`}></div>
            <div className='flex flex-col items-start px-5 gap-4'>
                <h1 className='text-xl font-bold '>{title}</h1>
                <h1 className="text-6xl font-[700]">{price} <span className={`text-sm font-normal ${active ? "text-white" : "text-primary/70"}`}>/ month</span></h1>
                <p className='text-base '>{desc}</p>
                <span className='font-[500] text-lg'>Featured Included:</span>
                <ul className='flex flex-col gap-5 mt-4'>
                    {features.map((list, i) => <PackageList key={i} active={active} list={list} />)}
                </ul>
                <Button className={`mt-5 font-bold h-14 rounded-full  w-full ${active ? "bg-white text-accent hover:bg-white hover:text-accent " : "bg-accent text-white hover:bg-accent hover:text-white  "}`}>
                    <span>Buy Now</span>
                    <BsArrowRightShort className='transition-transform group-hover:translate-x-2 duration-300' />
                </Button>
                <div className="mb-5"></div>
            </div>
        </div>
    );
}

export default PackageCard;

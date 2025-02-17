import React from 'react';
import Image from 'next/image';
import Star from './Star';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6';

interface TestimonialItemProps {
    avatar: string;
    name: string;
    position: string;
    rating: number;
    message: string;
}
const TestimonialItem = (item: TestimonialItemProps) => {
    return (
        <div className="flex flex-col gap-4">
            <div className='flex flex-row gap-2'>
                <div className="h-[90px] w-[90px] relative">
                    <Image src={item.avatar} fill className='object-cover rounded-full' alt={''}
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className='text-md font-bold'>{item.name}</h1>
                    <span className='text-sm text-primary/80 mb-3'>{item.position}</span>
                    <Star rating={item.rating} />
                </div>
            </div>
            <p className="italic m-[15px_0_0_0] p-0">
                <FaQuoteLeft className='i-quote right-[10px]' size={18} />
                <span>{item.message}</span>
                <FaQuoteRight className='i-quote right-[-10px]' size={18} />
            </p>
        </div>
    );
}

export default TestimonialItem;

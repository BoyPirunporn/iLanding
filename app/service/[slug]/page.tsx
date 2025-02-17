"use client";
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';
import ContentRight from './components/ContentRight';
import ContentLeft from './components/ContentLeft';


const ServicePage = () => {
    return (
        <div className='container mx-auto w-full pt-[160px] py-[60px]'>
            <div className="py-[60px]">
                <h1 className="text-4xl text-center text-primary font-bold mb-5">Service Details</h1>
                <div className="text-center text-md flex justify-center space-x-4">
                    <Link href={"/"} className='text-accent'>Home </Link> / <span> Service Detail</span>
                </div>
            </div>

            <div className="py-[60px] flex flex-row gap-20 justify-between">
                {/* CONTENT LEFT */}
                <ContentLeft />

                {/* CONTENT RIGHT */}
                <ContentRight />
            </div>
        </div>
    );
}

export default ServicePage;

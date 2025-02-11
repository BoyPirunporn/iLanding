import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';


const Page = ({
    params
}: {
    params: {
        slug: string;
    }
}) => {
    return (
        <div className='container mx-auto w-full pt-[160px] p-[60px_0]'>
            <h1 className="text-4xl text-center text-primary font-bold mb-5">Service Details</h1>
            <div className="text-center text-md flex justify-center space-x-4">
                <Link href={"/"} className='text-accent'>Home </Link> / <span> Service Detail</span>
            </div>

            <div className="p-[60px_0] flex flex-row gap-10 justify-between">
                <div>text</div>
                <div className='w-[820px] h-[518px]'>
                    <div className='relative w-full h-full'>
                        <Image
                            src={"/assets/services.jpg"}
                            alt=""
                            fill
                            objectFit="cover"
                        />
                    </div>
                    <div className='mt-3'>
                        <h1 className='text-xl text-primary font-bold'>Temporibus et in vero dicta aut eius lidero plastis trand lined voluptas dolorem ut voluptas</h1>
                        <p>Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.</p>
                        <ul>
                            <li className='flex-shrink-0 flex flex-row gap-2 items-center'>
                                <IoIosCheckmark className={`rounded-full border-white border-2 text-accent`} size={20} />
                                <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, distinctio!</p>
                            </li>
                            <li className='flex-shrink-0 flex flex-row gap-2 items-center'>
                                <IoIosCheckmark className={`rounded-full border-white border-2 text-accent`} size={20} />
                                <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, distinctio!</p>
                            </li>
                            <li className='flex-shrink-0 flex flex-row gap-2 items-center'>
                                <IoIosCheckmark className={`rounded-full border-white border-2 text-accent`} size={20} />
                                <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, distinctio!</p>
                            </li>
                            <li className='flex-shrink-0 flex flex-row gap-2 items-center'>
                                <IoIosCheckmark className={`rounded-full  text-accent`} size={20} />
                                <p className="text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, distinctio!</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;

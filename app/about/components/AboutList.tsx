import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

const AboutList = () => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
            {[...Array(6)].map((_, index) => (
                <li key={index} className='flex flex-row gap-2 items-center'>
                    <IoIosCheckmark className="rounded-full bg-accent text-white" size={20} />
                    <p className="text-md">Lorem ipsum dolor sit amet.</p>
                </li>
            ))}
        </ul>
    );
}

export default AboutList;

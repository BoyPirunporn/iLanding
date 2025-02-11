import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';

const PackageList = ({ list,active }: { list: string,active:boolean; }) => {
    return (
        <li className='flex-shrink-0 flex flex-row gap-2 items-center'>
            <IoIosCheckmark className={`rounded-full  ${active ? "bg-white text-accent": "bg-accent text-white"}`} size={20} />
            <p className="text-lg">{list}</p>
        </li>
    );
}

export default PackageList;

import React from 'react';
import Image from 'next/image';
const FeaturePhonePicture = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="w-[300px] h-[593px] relative ">
                <Image
                    alt=''
                    fill
                    className='object-contain'
                    src="/assets/phone-app-screen.webp"
                />
            </div>
        </div>
    );
}

export default FeaturePhonePicture;

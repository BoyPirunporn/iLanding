import { Button } from '@/components/ui/button';
import React from 'react';

const CallAction2 = () => {
    return (
        <section id='call-action-2' className='p-[60px_0]'>
            <div className="p-[4rem_2rem] relative  bg-accent/90 w-full">
                <div className=' flex flex-col flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_1.5rem)] ml-[calc(-.5_*1.5rem)]'>
                    <div className="mx-auto text-center w-full md:w-[66%] ">
                        <h1 className='text-3xl text-white font-[600] mb-10'>Call to action</h1>
                        <p className='text-md text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium voluptatibus repellendus eaque, quidem a sit temporibus iste voluptate deserunt!</p>
                        <Button className='bg-accent/60 text-white font-bold text-lg hover:bg-inherit border-white border-2 h-14 rounded-full'>Call To Action</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CallAction2;

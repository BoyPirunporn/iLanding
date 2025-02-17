import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import React from 'react';

const CallAction2 = () => {
    return (
        <section
            id='call-action-2' className='py-[60px]'>
            <div className="p-[4rem_2rem] relative  bg-accent/90 w-full">
                <div className=' flex flex-col flex-wrap mt-[calc(-1_*_0)] mr-[calc(-.5_*_1.5rem)] ml-[calc(-.5_*1.5rem)]'>
                    <motion.div
                        initial={{ opacity: 0, scale: .5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ ease: "easeIn", delay: .3, duration: .5 }}
                        className="mx-auto text-center w-full md:w-[66%] ">
                        <h1 className='text-3xl text-white font-[600] mb-10'>Call to action</h1>
                        <p className='text-md text-white mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium voluptatibus repellendus eaque, quidem a sit temporibus iste voluptate deserunt!</p>
                        <Button className='bg-accent/60 text-white font-bold text-lg hover:bg-inherit border-white border-2 h-14 rounded-full'>Call To Action</Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default CallAction2;

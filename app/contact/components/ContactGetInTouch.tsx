import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, Variants } from 'framer-motion';
import React from 'react';


const variants: Variants = {
    initial: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
}
const ContactGetInTouch = () => {
    return (
        <motion.div
            variants={variants}
            initial="initial"
            whileInView={"visible"}
            viewport={{ once: true }}
            transition={{
                delay: .2,
                duration: .5
            }}
            className=' px-8 py-10 flex gap-5 flex-col '>
            <h1 className="text-3xl text-primary ">Get In Touch</h1>
            <p className='text-lg text-primary/80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, harum.</p>
            <form className='flex flex-col gap-5 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <motion.div
                        variants={variants}
                        initial="initial"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        transition={{
                            delay: .2,
                            duration: .5
                        }}
                        className="">
                        <Input name='name' className='focus:border-accent focus:ring-accent h-10' placeholder='Your Name' />
                    </motion.div>
                    <motion.div variants={variants}
                        initial="initial"
                        viewport={{ once: true }}
                        whileInView={"visible"}
                        transition={{
                            delay: .4,
                            duration: .5
                        }} className="">
                        <Input name='email' className="focus:border-accent focus:ring-accent h-10" placeholder='Your Email' /></motion.div>
                    <motion.div variants={variants}
                        initial="initial"
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        transition={{
                            delay: .6,
                            duration: .5
                        }} className="">
                        <Input name='subject' className='focus:border-accent focus:ring-accent h-10' placeholder='Subject' />
                    </motion.div>
                </div>
                <motion.div
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{
                    delay: .8,
                    duration: .5
                }}
                >
                    <Textarea name='message' className="focus:border-accent focus:ring-accent min-h-[200px]" placeholder='Message' />
                </motion.div>
                <div className="grid place-content-center">
                    <Button size={"sm"} className='w-40 h-14 text-center rounded-full bg-accent text-white hover:bg-accent/80'>Send Message</Button>
                </div>
            </form>
        </motion.div>
    );
}

export default ContactGetInTouch;

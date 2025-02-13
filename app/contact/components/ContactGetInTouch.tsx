import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const ContactGetInTouch = () => {
    return (
        <div className=' px-8 py-10 flex gap-5 flex-col '>
            <h1 className="text-3xl text-primary ">Get In Touch</h1>
            <p className='text-lg text-primary/80'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, harum.</p>
            <form className='flex flex-col gap-5 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <Input name='name' className='focus:border-accent focus:ring-accent h-10' placeholder='Your Name' />
                    <Input name='email' className="focus:border-accent focus:ring-accent h-10" placeholder='Your Email' />
                    <Input name='subject' className='focus:border-accent focus:ring-accent h-10' placeholder='Subject' />
                </div>
                <Textarea name='message' className="focus:border-accent focus:ring-accent min-h-[200px]" placeholder='Message' />
                <div className="grid place-content-center">
                    <Button size={"sm"} className='w-40 h-14 text-center rounded-full bg-accent text-white hover:bg-accent/80'>Send Message</Button>
                </div>
            </form>
        </div>
    );
}

export default ContactGetInTouch;

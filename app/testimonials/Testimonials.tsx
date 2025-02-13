import React from 'react';
import Image from 'next/image'
import Star from './components/Star';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    { name: "Saul Goodman", avatar: "/assets/testimonials/testimonials-1.jpg", position: "Ceo & Founder", rating: 5, message: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper." },
    { name: "Sara Wilsson", avatar: "/assets/testimonials/testimonials-2.jpg", position: "Designer", rating: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, consectetur minus. Veniam et, cupiditate officiis esse odit repellat odio soluta asperiores non aliquam magnam tempora ab at, natus quis nihil!" },
    { name: "Jena Karlis", avatar: "/assets/testimonials/testimonials-3.jpg", position: "Store Owner", rating: 3, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam veniam accusantium blanditiis non, reprehenderit facilis nihil minus quis similique accusamus nulla expedita sed obcaecati!" },
    { name: "Matt Brandon", avatar: "/assets/testimonials/testimonials-4.jpg", position: "Freelancer", rating: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque maxime quibusdam similique iste doloremque eius libero incidunt quaerat voluptatum." },
]

const Testimonials = () => {
    return (
        <section id="testimonials" className='container mx-auto p-[60px_0]'>
            <h1 className="title-section">
                Testimonials
            </h1>
            <p className="desc-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae officia facere numquam placeat distinctio?</p>

            <div className="p-[60px_0]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4">
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
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;

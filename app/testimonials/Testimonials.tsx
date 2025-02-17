import React from 'react';
import Image from 'next/image'
import Star from './components/Star';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import TestimonialItem from './components/TestimonialItem';

const testimonials = [
    { name: "Saul Goodman", avatar: "/assets/testimonials/testimonials-1.jpg", position: "Ceo & Founder", rating: 5, message: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper." },
    { name: "Sara Wilsson", avatar: "/assets/testimonials/testimonials-2.jpg", position: "Designer", rating: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, consectetur minus. Veniam et, cupiditate officiis esse odit repellat odio soluta asperiores non aliquam magnam tempora ab at, natus quis nihil!" },
    { name: "Jena Karlis", avatar: "/assets/testimonials/testimonials-3.jpg", position: "Store Owner", rating: 3, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquam veniam accusantium blanditiis non, reprehenderit facilis nihil minus quis similique accusamus nulla expedita sed obcaecati!" },
    { name: "Matt Brandon", avatar: "/assets/testimonials/testimonials-4.jpg", position: "Freelancer", rating: 4, message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eaque maxime quibusdam similique iste doloremque eius libero incidunt quaerat voluptatum." },
]

const Testimonials = () => {
    return (
        <motion.section
            id="testimonials" className='container mx-auto py-[60px]'>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{ once: true, }}
                transition={{
                    ease: "easeIn",
                    duration: .8,
                }}
                className="">
                <h1 className="title-section">
                    Testimonials
                </h1>
                <p className="desc-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae officia facere numquam placeat distinctio?</p>
            </motion.div>

            <div className="py-[60px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {testimonials.map((item, index) => (
                        <motion.div key={index}
                            initial={{
                                opacity: 0,
                                y: 100
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{ once: true, amount: .5 }}
                            transition={{
                                ease: "easeIn",
                                duration: .8,
                                delay: index * .2
                            }}
                        >
                            <TestimonialItem  {...item} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
}

export default Testimonials;

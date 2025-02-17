'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react'
import { links } from './Header';
import Link from 'next/link';
import { Link as LinkReactScroll } from 'react-scroll';

const MobileNav = ({
    open,
    variants,
    onClick
}: {
    open: boolean;
    variants: Variants;
    onClick:() => void
}) => {

    return (
        <motion.aside
            animate={open ? "open" : "closed"}
            className="flex flex-col justify-center items-center bg-white text-color">
            <motion.div
                variants={variants}
                className="fixed top-0 left-0 bottom-0 w-full bg-white ">
                <div className="flex flex-col h-full  items-center justify-center gap-5 text-3xl">
                    {links.map((link, index) => (
                        <LinkReactScroll to={link.id} smooth duration={300} offset={-80} onClick={onClick} spy activeClass='text-accent' className='text-lg' key={index}>{link.title}</LinkReactScroll>
                    ))}
                </div>
            </motion.div>
        </motion.aside>
    )
}

export default MobileNav
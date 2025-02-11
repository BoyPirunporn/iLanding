'use client';
import { motion, Variants } from 'framer-motion';
import React from 'react'
import { links } from './Header';
import Link from 'next/link';

const MobileNav = ({
    open,
    variants
}: {
    open: boolean;
    variants: Variants;
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
                        <Link href={link.id} key={index}>{link.title}</Link>
                    ))}
                </div>
            </motion.div>
        </motion.aside>
    )
}

export default MobileNav
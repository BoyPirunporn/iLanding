'use client'
import { Link } from 'react-scroll'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import MobileNav from './MobileNav'
import { motion, AnimatePresence, Variants } from 'framer-motion'


export const links = [
    { title: "Home", id: "#hero" },
    { title: "About", id: "#about" },
    { title: "Feature", id: "#feature" },
    { title: "Service", id: "#service" },
    { title: "Pricing", id: "#pricing" },
    { title: "Dropdown", id: "" },
    { title: "Contact", id: "#contact" },
]

const variants: Variants = {
    open: {
        clipPath: "circle(1200px at 88% 50px)",
        transition: {
            type: "spring",
            stiffness: 20
        }
    },
    closed: {
        clipPath: "circle(0 at 88% 50px)",
        transition: {
            delay: .2,
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    }
}
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <header className='py-5 xl:py-8 fixed top-0 left-0 right-0 z-10'>
            <div className='container max-auto flex justify-between  bg-white items-center rounded-full py-3'>
                <div className='text-xl'>iLanding</div>
                <nav className="hidden xl:block">
                    <ul className='flex flex-row gap-5 text-md '>
                        {links.map((link, index) => (
                            <li key={index} >
                                <Link to={link.id} smooth duration={100} offset={-100} className='cursor-pointer' >{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <motion.div animate={open ? "open" : "closed"} className='flex flex-row gap-2 items-center'>
                    <Button className='rounded-full bg-accent text-white text-xs md:text-md hover:bg-accent/90'>Get started</Button>
                    <button onClick={() => setOpen(prve => !prve)} className='text-center md:hidden rounded-full h-[25px] z-10  bg-transparent border-none items-center flex w-full'>
                        <svg width="23" height="23" viewBox="0 0 23 23">
                            <motion.path
                                variants={{
                                    closed: { d: "M 2 2.5 L 20 2.5" },
                                    open: { d: "M 3 16.5 L 17 2.5" },
                                }}
                                strokeWidth="3" stroke="black" strokeLinecap="round" />
                            <motion.path strokeWidth="3" stroke="black" d={"M 2 9.423 L 20 9.423"} initial={"open"} animate={open ? "open" : "closed"} variants={{
                                closed: { opacity: 1 },
                                open: { opacity: 0 },
                            }} strokeLinecap="round" />
                            <motion.path strokeWidth="3" stroke="black" strokeLinecap="round"
                                variants={{
                                    closed: { d: "M 2 16.346 L 20 16.346" },
                                    open: { d: "M 3 2.5 L 17 16.346" },
                                }}
                            />
                        </svg>
                    </button>
                    {/* <AnimatePresence mode='wait'>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1
                            }}>
                            <MobileNav open={open} variants={variants} />
                        </motion.div>
                    </AnimatePresence> */}
                </motion.div>
            </div>
        </header>
    )
}

export default Header
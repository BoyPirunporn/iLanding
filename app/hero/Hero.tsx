'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoPlayCircleOutline } from "react-icons/io5";
import { TbSettingsFilled } from "react-icons/tb";
import Stat from "./components/Stat";
import { motion, Variants } from 'framer-motion'
import Foating from "./components/Foating";
import { useEffect, useState } from "react";

const variant: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { delay: .2, duration: .5, ease: "easeInOut" } },
}


const Hero = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;
    return (
        <motion.section
            id="hero" className="container mx-auto w-full pt-[160px] p-[60px_0]">
            <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-between">
                <motion.div
                    viewport={{ once: false }}
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    className="justify-center items-center flex flex-col md:block"
                >
                    <div className="inline-flex items-center p-2 rounded-full gap-3  mb-10 bg-accent/15">
                        <TbSettingsFilled size={26} className="text-accent" />
                        <p className="text-sm md:text-md font-bold text-accent">
                            Working for your success
                        </p>
                    </div>
                    <h1 className="text-2xl md:text-6xl mb-10 ">
                        Maecenas Vitae<br />
                        Consectetur Led<br />
                        <span className="text-accent font-bold">Vestibulum Ante</span>
                    </h1>
                    <p className="text-[16px] text-primary/80 font-[500] mb-10 text-center md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, rerum aliquid sequi magnam optio suscipit ipsum a repellendus veritatis accusantium!</p>

                    <div className="flex flex-col md:flex-row gap-5">
                        <Button className="bg-accent rounded-full hover:bg-accent/80 transition-all text-white text-md px-10 py-6">Get Started</Button>
                        <Button className=" hover:bg-inherit hover:text-accent transition-all duration-300 text-md flex flex-row gap-2 items-center font-bold px-10 py-6" variant={"ghost"} >
                            <IoPlayCircleOutline className="w-8 h-8" />
                            Play Video
                        </Button>
                    </div>
                </motion.div>
                <motion.div
                    viewport={{ once: false }}
                    initial={{
                        scale: 1.2,
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: .2, duration: .5, ease: "easeInOut" }
                    }}

                    className="relative ">
                    <div className="relative h-[300px] w-[636px]  xl:h-[488px] mb-10 md:mb-0">
                        <Image
                            src={"/assets/illustration-1.webp"}
                            alt=""
                            fill
                            className="object-fill"
                        />
                    </div>
                    <Foating />
                </motion.div>
            </div>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                viewport={{ once: false }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: .5,
                    duration: .5,
                    ease: "easeInOut"
                }}
                className="mt-20">
                <Stat />
            </motion.div>
        </motion.section >
    );
}

export default Hero;
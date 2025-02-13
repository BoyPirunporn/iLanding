import { IoIosCheckmark } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import ScrollAnimation from 'react-animate-on-scroll'
import Image from 'next/image';
import AboutFoating from "./AboutFoating";
import { motion } from "framer-motion";
const About = () => {
    return (
        <section id="about" className="container mx-auto w-full pt-[160px] p-[60px_0]">
            <div className="relative flex flex-col md:flex-row gap-10  items-center justify-between">
                <ScrollAnimation
                    animateIn="fadeInUp"
                    delay={.5}
                    duration={.5}
                    className="flex flex-col w-full xl:w-[40%] gap-5">
                    <h3 className="text-lg text-accent font-bold">MORE ABOUT US</h3>
                    <h2 className="text-3xl  font-[600] text-primary/90">Voluptas enim suscipit temporibus</h2>
                    <p className="text-md text-primary/80">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-10">
                        {[...Array(6)].map((_, index) => (
                            <li key={index} className='flex flex-row gap-2 items-center'>
                                <IoIosCheckmark className="rounded-full bg-accent text-white" size={20} />
                                <p className="text-md">Lorem ipsum dolor sit amet.</p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-row justify-between mt-10">
                        <div className=" flex flex-row gap-2">
                            <div className="relative w-[60px] h-[60px] ">
                                <Image
                                    src={"/assets/avatar/avatar-1.webp"}
                                    alt=""
                                    className="rounded-full"
                                    fill
                                    objectFit="cover"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[18px]">Mario Smith</p>
                                <p className="text-[14px] text-accent">CEO & Founder</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <FaPhone className="text-accent" size={28} />
                            <div className="flex flex-col ">
                                <p className="text-primary/70">Call us anytime</p>
                                <p className="text-primary font-bold">+123 456-789</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 1.2
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        delay: 0.3,
                        duration: .5,
                        ease: "easeInOut"
                    }}
                    viewport={{ once: false }}
                    className="w-full xl:w-[60%] relative h-auto flex flex-col justify-center items-center">
                    <div className="relative h-[365px] w-full md:h-[636px] md:left-20">
                        <Image
                            src={"/assets/about-5.webp"}
                            alt=""
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                    <div className="md:absolute mb-10 md:mb-0 md:top-40 md:left-0 md:right-10 w-full md:w-[250px] h-[250px]">
                        <div className="w-full relative md:h-[286px] h-[265px]">
                            <Image
                                src={"/assets/about-2.webp"}
                                alt=""
                                fill
                                className="object-cover rounded-xl border-[5px] border-white"
                            />
                        </div>
                    </div>
                    <AboutFoating />
                </motion.div>
            </div>
        </section>
    );
}

export default About;
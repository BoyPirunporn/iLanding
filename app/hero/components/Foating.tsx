import { motion } from "framer-motion";
import Image from 'next/image';
const avatars = [
    { src: "/assets/avatar/avatar-1.webp" },
    { src: "/assets/avatar/avatar-2.webp" },
    { src: "/assets/avatar/avatar-3.webp" },
    { src: "/assets/avatar/avatar-4.webp" },
    { src: "/assets/avatar/avatar-5.webp" },
]
const Foating = () => {
    return (
        <motion.div

            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    ease: "easeIn"
                }
            }}
        >
            <motion.div
                animate={{
                    y: [0, '-20px', 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
                className="md:absolute bottom-[10px] right-[90px] max-w-[300px] rounded-xl py-2 px-5 bg-white text-primary/60 flex flex-col gap-2" >
                <div className="flex flex-row relative">
                    {avatars.map((avatar, index) => {

                        return (
                            <div key={index} className="w-8 h-8 relative">
                                <Image
                                    src={avatar.src}
                                    fill
                                    className="rounded-full border-[2px]  absolute"
                                    style={{
                                        left: `-${index * 8}px`
                                    }}
                                    alt="avatar"
                                />
                            </div>
                        )
                    })}
                    <div
                        style={{
                            left: `-${40}px`
                        }}
                        className="w-8 h-8 rounded-full flex justify-center text-center relative  bg-accent items-center   ">
                        <span className="text-center text-[.75rem] text-white">12+</span>
                    </div>
                </div>
                <p className="text-sm">12,000+ Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, officiis!</p>
            </motion.div>
        </motion.div>
    );
}

export default Foating;
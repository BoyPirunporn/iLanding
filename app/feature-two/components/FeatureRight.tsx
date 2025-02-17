import { motion } from 'framer-motion';
import React from 'react';
import { BsCodeSquare, BsPhone, BsBrowserChrome } from "react-icons/bs";

const listFeature = [
    { icon: <BsCodeSquare size={24} className='flex-shrink-0 text-accent' />, title: "W3c Valid Code", description: "Donec vitae sapien ut libero venenatis faucibus nullam quis ante etiam sit amet orci eget eros faucibus tincidunt." },
    { icon: <BsPhone size={24} className='flex-shrink-0 text-accent' />, title: "Fully Responsive", description: "Maecenas tempus tellus eget condimentum rhoncus sem quam semper libero sit amet adipiscing sem neque sed ipsum." },
    { icon: <BsBrowserChrome size={24} className='flex-shrink-0 text-accent' />, title: "Browser Compatibility", description: "Nullam dictum felis eu pede mollis pretium integer tincidunt cras dapibus vivamus elementum semper nisi aenean vulputate." },
]
const FeatureRight = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            viewport={{ once: true, amount: .3 }}
            transition={{
                delay: .2
            }}
            className='flex flex-col gap-10 items-center overflow-hidden'>
            {listFeature.map((feature, index) => (
                <motion.div
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{ once: true, amount: .3 }}
                    initial={{
                        opacity: 0,
                        x: 100
                    }}
                    transition={{
                        delay: .2 + index * .2,
                        duration: .5,
                        ease: "easeIn"
                    }}
                    key={index} className="flex flex-col xl:flex-row gap-10 items-center min-h-[140px]">
                    {feature.icon}
                    <div className="flex flex-col gap-3 ">
                        <h1 className="text-[20px] text-center xl:text-start font-[600]">{feature.title}</h1>
                        <p className="text-[15px] text-primary/80 text-center xl:text-start">{feature.description}</p>
                    </div>

                </motion.div>
            ))}
        </motion.div>
    );
}

export default FeatureRight;

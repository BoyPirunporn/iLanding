import React from 'react';
import { BsAward, BsPatchCheck, BsSunrise, BsShieldCheck } from "react-icons/bs";
import CardFeature from './components/Card';
import { motion } from 'framer-motion';

const featureCards = [
    { icon: <BsAward size={44} color='#edb86e' />, bg: "#fff3e2", title: "Corporis voluptates", description: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip" },
    { icon: <BsPatchCheck size={44} color='#20a5f8' />, bg: "#deedfd", title: "Explicabo consectetur", description: "Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore" },
    { icon: <BsSunrise size={44} color='#48c88a' />, bg: "#d5f1e4", title: "Ullamco laboris", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt" },
    { icon: <BsShieldCheck size={44} color='#f28484' />, bg: "#fdeded", title: "Labore consequatur", description: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere" },
]
const FeatureCart = () => {
    return (
        <motion.section
            id='features-cards' className='container mx-auto py-[60px] grid grid-cols-1 xl:grid-cols-4 gap-5'>
            {featureCards.map((feature, index) => (
                <motion.div
                    key={index}
                    variants={{
                        initial: {
                            opacity: 0,
                            scale: 0
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                    }}
                    initial='initial'
                    whileInView={"animate"}
                    viewport={{ once: true, }}
                    transition={{
                        duration: .5,
                        each: "easeIn",
                        delay: index * 0.3,

                    }}
                >
                    <CardFeature {...feature} />
                </motion.div>
            ))}
        </motion.section>
    );
}

export default FeatureCart;

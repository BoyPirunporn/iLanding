import { motion, Variants } from "framer-motion";
import PackageCard from "./components/PackageCard";

const packages = [
    {
        title: "Basic Plan",
        price: 9.9,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi id nobis reprehenderit!",
        features: [
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        active: false,

    },
    {
        title: "Standard Plan",
        price: 19.9,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi id nobis reprehenderit!",
        features: [
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        active: true,

    },
    {
        title: "Premium Plan",
        price: 49.9,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi id nobis reprehenderit!",
        features: [
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        active: false,

    }
]
const variants: Variants = {
    initial: {
        opacity: 0,
        y: 50
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

const Pricing = () => {
    return (
        <section id="pricing" className="container mx-auto py-[60px]">
            <motion.div variants={variants}
                initial={"initial"}
                whileInView={"visible"}
                viewport={{once:true}}
                transition={{
                    duration: .5,
                    ease: "easeIn",
                    delay: .3
                }} className="pb-[60px]">
                <h1 className="title-section">Pricing</h1>
                <p className="desc-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem odio dolorem nesciunt explicabo!</p>
            </motion.div>
            <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-10">
                {packages.map((p, index) => {
                    return (
                        <motion.div key={index}
                            variants={variants}
                            initial={"initial"}
                            whileInView={"visible"}
                            viewport={{once:true}}
                            transition={{
                                ease: "easeIn",
                                duration: .5,
                                delay: .3 + (index * .2)
                            }}
                        >
                            <PackageCard {...p} />
                        </motion.div>
                    )
                })}
            </div>
        </section>
    );
}

export default Pricing;
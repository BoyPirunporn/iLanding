
import { BsActivity, BsDiagram3, BsEasel, BsClipboard2Data } from "react-icons/bs";
import ServiceCard from "./components/ServiceCard";
import { motion, Variants } from "framer-motion";

const services = [
    { href: "/service/1", icon: <BsActivity size={28} />, title: "Nesciunt Mete", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam facilis nemo magnam laborum? Commodi!" },
    { href: "/service/2", icon: <BsEasel size={28} />, title: "Eosle Commodi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti magnam nihil mollitia. Tempora, sequi?" },
    { href: "/service/3", icon: <BsDiagram3 size={28} />, title: "Ledo Markt", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim incidunt atque ad totam cupiditate dolor pariatur in doloremque!" },
    { href: "/service/4", icon: <BsClipboard2Data size={28} />, title: "Asperiores Commodit", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, culpa." },
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
const Service = () => {
    return (
        <section id="service" className="container mx-auto py-[60px]">
            <motion.div
                viewport={{ once: true }}
                initial={"initial"}
                whileInView={"visible"}
                transition={{
                    ease: "easeIn",
                    duration: .5,
                    delay: .2
                }}
                className="pb-[60px]">
                <h1 className="title-section">Service</h1>
                <p className="desc-section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, at.</p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {services.map((service, index) => (
                    <motion.div variants={variants}
                        initial={"initial"}
                        viewport={{ once: true }}
                        whileInView={"visible"}
                        key={index} transition={{
                            delay: .2 + (index * .2),
                            duration: .5,
                            ease: "easeIn"
                        }}>
                        <ServiceCard key={index} {...service} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Service;


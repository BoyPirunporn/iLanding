import { motion, Variants } from "framer-motion";
import ContactGetInTouch from "./components/ContactGetInTouch";
import ContactInfo from "./components/ContactInfo";
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
const Contact = () => {
    return (
        <section id="contact" className="container mx-auto py-[60px]">
            <motion.div
                variants={variants}
                initial="initial"
                whileInView={"visible"}
                viewport={{ once: true }}
                transition={{
                    ease: "easeIn",
                    delay: .3,
                    duration: .5
                }}
                className="pb-[60px]">
                <h1 className="title-section">Contact</h1>
                <p className="desc-section text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero?</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <ContactInfo />
                <ContactGetInTouch />
            </div>
        </section>
    );
}

export default Contact;
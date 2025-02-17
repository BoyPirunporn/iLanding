import ScrollAnimation from 'react-animate-on-scroll'
import AboutPicture from "./components/AboutPicture";
import AboutList from "./components/AboutList";
import AboutInfoWrapper from "./components/AboutInfoWrapper";
import { motion } from 'framer-motion';
const About = () => {
    return (
        <section id="about" className="container mx-auto w-full py-[60px]">
            <div className="relative flex flex-col xl:flex-row gap-[50px]  items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 60}}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: .4,
                        ease: "easeIn"
                    }}
                    viewport={{ once: true, }}

                    className="flex flex-col w-full  gap-5">
                    <h3 className="text-lg text-accent font-bold">MORE ABOUT US</h3>
                    <h2 className="text-3xl  font-[600] text-primary/90">Voluptas enim suscipit temporibus</h2>
                    <p className="text-md text-primary/80">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <AboutList />
                    <AboutInfoWrapper />
                </motion.div>
                <AboutPicture />
            </div>
        </section>
    );
}

export default About;
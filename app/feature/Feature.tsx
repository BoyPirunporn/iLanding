import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Modisit from "./components/Modisit";
import Praesenti from "./components/Praesenti";
import Explica from "./components/Explica";
import { motion, Variants } from "framer-motion";

const variants: Variants = {
    initial: {
        opacity: 0,
        y: 80
    },
    visible: {
        opacity: 1,
        y: 0,
    }
}
const Feature = () => {
    return (
        <motion.section

            id="feature" className="container mx-auto py-[60px]">
            <motion.div
                variants={variants}
                initial={"initial"}
                whileInView={"visible"}
                viewport={{ once: true, amount: .5 }}
                transition={{
                    delay: .3,
                    duration: .5,
                    ease: "easeIn"
                }}
            >
                <h1 className="text-center mb-[20px] pb-[20px] relative text-4xl font-[700] text-primary/80 after:content-[''] after:absolute after:block after:w-[50px] after:h-[3px] after:bg-accent after:left-0 after:right-0 after:bottom-0 after:m-auto"> Feature </h1>
                <p className="text-md text-primary/80 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae officia facere numquam placeat distinctio?</p>
                <div className="mb-10"></div>
            </motion.div>
            <Tabs defaultValue="modisit">
                <motion.div
                    variants={variants}
                    initial={"initial"}
                    whileInView={"visible"}
                    viewport={{ once: true, amount: .5 }}
                    transition={{
                        delay: .3,
                        duration: .5,
                        ease: "easeIn"
                    }}
                >
                    <TabsList className=" flex flex-row ">
                        <TabsTrigger value="modisit">Modisit</TabsTrigger>
                        <TabsTrigger value="praesenti">Praesenti</TabsTrigger>
                        <TabsTrigger value="explica">Explica</TabsTrigger>
                    </TabsList>
                </motion.div>

                <motion.div
                    variants={variants}
                    initial={"initial"}
                    viewport={{ once: true, amount: .5 }}
                    whileInView={"visible"}
                    transition={{
                        delay: .6,
                        duration: .4,
                        ease: "easeIn"
                    }}
                >
                    <TabsContent value="modisit" className="p-[10px_0]">
                        <Modisit />
                    </TabsContent>
                    <TabsContent value="praesenti" className="p-[10px_0]">
                        <Praesenti />
                    </TabsContent>
                    <TabsContent value="explica" className="p-[10px_0]">
                        <Explica />
                    </TabsContent>
                </motion.div>
            </Tabs>
        </motion.section>
    );
}

export default Feature;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Modisit from "./components/Modisit";
import Praesenti from "./components/Praesenti";
import Explica from "./components/Explica";
import { motion } from "framer-motion";

const Feature = () => {
    return (
        <motion.section
            viewport={{ once: false }}
            initial={{
                opacity: 0,
                y: 80
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{
                delay: .2,
                duration: .4,
                ease: "easeIn"
            }}
            id="feature" className="container mx-auto p-[60px_0]">
            <h1 className="text-center mb-[20px] pb-[20px] relative text-4xl font-[700] text-primary/80 after:content-[''] after:absolute after:block after:w-[50px] after:h-[3px] after:bg-accent after:left-0 after:right-0 after:bottom-0 after:m-auto"> Feature </h1>
            <p className="text-md text-primary/80 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae officia facere numquam placeat distinctio?</p>
            <div className="mb-28"></div>
            <Tabs defaultValue="modisit">
                <TabsList className=" flex flex-row ">
                    <TabsTrigger value="modisit">Modisit</TabsTrigger>
                    <TabsTrigger value="praesenti">Praesenti</TabsTrigger>
                    <TabsTrigger value="explica">Explica</TabsTrigger>
                </TabsList>

                <TabsContent value="modisit" className="p-[10px_0]">
                    <Modisit />
                </TabsContent>
                <TabsContent value="praesenti" className="p-[10px_0]">
                    <Praesenti />
                </TabsContent>
                <TabsContent value="explica" className="p-[10px_0]">
                    <Explica />
                </TabsContent>
            </Tabs>
        </motion.section>
    );
}

export default Feature;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Modisit from "./components/Modisit";
import Praesenti from "./components/Praesenti";
import Explica from "./components/Explica";

const Feature = () => {
    return (
        <section id="feature" className="container mx-auto p-[60px_0]">
            <h1 className="text-center mb-[20px] pb-[20px] relative text-4xl font-[700] text-primary/80 after:content-[''] after:absolute after:block after:w-[50px] after:h-[3px] after:bg-accent after:left-0 after:right-0 after:bottom-0 after:m-auto"> Feature </h1>
            <p className="text-md text-primary/80 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit recusandae officia facere numquam placeat distinctio?</p>
            <div className="mb-28"></div>
            <Tabs className="" defaultValue="modisit">
                <TabsList className="flex flex-row gap-[30px] ">
                    <TabsTrigger value="modisit">Modisit</TabsTrigger>
                    <TabsTrigger value="praesenti">Praesenti</TabsTrigger>
                    <TabsTrigger value="explica">Explica</TabsTrigger>
                </TabsList>

                <TabsContent value="modisit">
                    <Modisit />
                </TabsContent>
                <TabsContent value="praesenti"><Praesenti /></TabsContent>
                <TabsContent value="explica"><Explica /></TabsContent>
            </Tabs>
        </section>
    );
}

export default Feature;
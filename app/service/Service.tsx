
import { BsActivity, BsDiagram3, BsEasel, BsClipboard2Data } from "react-icons/bs";
import ServiceCard from "./components/ServiceCard";

const services = [
    { href: "/service/1", icon: <BsActivity size={28} />, title: "Nesciunt Mete", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nam facilis nemo magnam laborum? Commodi!" },
    { href: "/service/2", icon: <BsEasel size={28} />, title: "Eosle Commodi", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti magnam nihil mollitia. Tempora, sequi?" },
    { href: "/service/3", icon: <BsDiagram3 size={28} />, title: "Ledo Markt", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim incidunt atque ad totam cupiditate dolor pariatur in doloremque!" },
    { href: "/service/4", icon: <BsClipboard2Data size={28} />, title: "Asperiores Commodit", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, culpa." },
]

const Service = () => {
    return (
        <section id="service" className="container mx-auto p-[60px_0]">
            <div className="pb-[60px]">
                <h1 className="title-section">Service</h1>
                <p className="desc-section">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, at.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    );
}

export default Service;


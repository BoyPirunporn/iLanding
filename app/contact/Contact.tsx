import ContactGetInTouch from "./components/ContactGetInTouch";
import ContactInfo from "./components/ContactInfo";

const Contact = () => {
    return (
        <section id="contact" className="container mx-auto p-[60px_0]">
            <div className="pb-[60px]">
                <h1 className="title-section">Contact</h1>
                <p className="desc-section text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, vero?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <ContactInfo />
                <ContactGetInTouch/>
            </div>
        </section>
    );
}

export default Contact;
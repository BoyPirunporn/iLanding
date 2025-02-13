import React from 'react';
import { BsGeoAlt, BsTelephone, BsEnvelope } from "react-icons/bs";

const contacts = [
    {
        icon: <BsGeoAlt size={24} className='text-white' />,
        title: "Our Location",
        desc: [
            "A198 Adam Street",
            "New York, NY 535022"
        ]
    },
    {
        icon: <BsTelephone size={24} className='text-white' />,
        title: "Phone Number",
        desc: [
            "+1 6699 55488 55",
            "+1 6678 25445 41",
        ]
    },
    {
        icon: <BsEnvelope size={24} className='text-white' />,
        title: "Email Address",
        desc: [
            "info@example.com",
            "contact@example.com"
        ]
    },
]
const ContactInfo = () => {
    return (
        <div className='px-8 py-10 flex gap-5 flex-col bg-accent rounded-2xl'>
            <h1 className="text-3xl font-bold text-white">Contact Info</h1>
            <p className="text-lg text-white/70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum obcaecati ullam eligendi!</p>
            <ul className='flex flex-col gap-10'>
                {contacts.map((item, index) => (
                    <li key={index} className='flex flex-row text-white  items-start gap-6'>
                        <div className="p-4 rounded-full bg-white/20">
                            {item.icon}
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className='text-2xl font-bold'>{item.title}</h1>
                            {item.desc.map((v, i) => (
                                <span key={i} className='text-md'>{v}</span>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactInfo;

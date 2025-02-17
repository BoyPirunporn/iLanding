'use client';
import Link from 'next/link';
import React from 'react';
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const socials = [
    { icon: <FaXTwitter size={16} /> },
    { icon: <FaFacebook size={16} /> },
    { icon: <FaInstagram size={16} /> },
    { icon: <FaLinkedin size={16} /> },
]

const contacts = [
    {
        title: "Useful Links",
        items: [
            "Home",
            "About us",
            "Service",
            "Terms of service",
            "Privacy policy"
        ]
    },
    {
        title: "Our Services",
        items: [
            "Web Desing",
            "Web Development",
            "Product Management",
            "Marketing",
            "Graphic Design"
        ]
    },
    {
        title: "Hic solutasetp",
        items: [
            "Molestiae accusamus iure",
            "Excepturi dignissimos",
            "Suscipit distinctio",
            "Dilecta",
            "Sit quas consectetur"
        ]
    },
    {
        title: "Nobis illum",
        items: [
            "Lpsam",
            "Laudantium dolorum",
            "Dinera",
            "Trodelas",
            "Flexo"
        ]
    },
]
const Footer = () => {
    return (
        <div className='container'>

            <div className="pt-[50px]">
                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 relative gap-20 ">
                    <div className="lg:col-span-2 ">
                        <Link href={"#home"} className='text-primary text-2xl font-[600] mb-10'>iLanding</Link>
                        <div className='mt-10'>
                            <p className="text-sm mb-1">A108 Adam Street</p>
                            <p className="text-sm ">New York, NY 535022</p>
                            <p className="text-sm text-bold mt-3 mb-1">Phone: <span className='text-normal'>1 5589 55488 55</span></p>
                            <p className="text-sm text-bold">Email: <span className='text-normal'>info@example.com</span></p>
                        </div>
                        <ul className="flex flex-row gap-4 mt-6">
                            {socials.map((item, index) => (
                                <li key={index} className='p-3 transition-all duration-300 border hover:border-accent hover:text-accent border-primary/80 text-primary/80 rounded-full group cursor-pointer'>
                                    {item.icon}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {contacts.map((item,index) => (
                        <div key={index}>
                            <h3 className='text-[16px] font-bold text-primary'>{item.title}</h3>
                            <ul className="flex flex-col gap-4 mt-3">
                                {item.items.map((d,i) => (
                                    <li key={i} className='text-sm text-primary/80'>{d}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container p-[25px_0] border-t-[1px_solid_color-mix(in_srgb,_#212529,_transparent_90%)] text-center mt-10">
                <p className="text-sm">
                    © <span>Copyright</span>
                    <strong className="px-1 sitename">iLanding</strong>
                    <span>All Rights Reserved</span>
                </p>
                <p className="mt-[8px] text-xs ">
                    Build by Pirunporn boy
                    inspiration : BootstrapMade
                </p>
            </div>
        </div>
    );
}

export default Footer;

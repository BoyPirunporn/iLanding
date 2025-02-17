
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
const stats = [
    { stat: 232, type: "Clients" },
    { stat: 521, type: "Projects" },
    { stat: 1453, type: "Hours Of Support" },
    { stat: 32, type: "Workers" },
]
const Stats = () => {

    const [inView, setInView] = useState(false);
    const sectionRef = useRef(null);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            {
                threshold: .5// เมื่อ section อนู่ในviewport 50% จะทำงาน
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        }
    }, [])
    return (
        <section ref={sectionRef} id='stats' className='container mx-auto py-[60px]'>
            <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col gap-3 items-center">
                        {inView && (
                            <CountUp
                                end={stat.stat}
                                duration={2}
                                className="title-section after:w-[20px] font-bold"
                            />
                        )}
                        <p className='text-primary/80'>{stat.type}</p>
                    </div>

                ))}
            </div>
        </section >
    );
}

export default Stats;

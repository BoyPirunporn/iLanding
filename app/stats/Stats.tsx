import React from 'react';


const stats = [
    { stat: 232, type: "Clients" },
    { stat: 521, type: "Projects" },
    { stat: 1453, type: "Hours Of Support" },
    { stat: 32, type: "Workers" },
]
const Stats = () => {
    return (
        <section id='stats' className='container mx-auto p-[60px_0]'>
            <div className="flex flex-col md:flex-row gap-10 justify-between w-full">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col gap-3 items-center">
                        <h1  className="title-section after:w-[20px] font-bold">{stat.stat}</h1>
                        <p className='text-primary/80'>{stat.type}</p>
                    </div>

                ))}
            </div>
        </section>
    );
}

export default Stats;

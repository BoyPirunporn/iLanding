import PackageCard from "./components/PackageCard";

const packages = [
    {
        title: "Basic Plan",
        price: 9.9,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi id nobis reprehenderit!",
        features: [
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        active: false,

    },
    {
        title: "Standard Plan",
        price: 19.9,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi id nobis reprehenderit!",
        features: [
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        active: true,

    },
    {
        title: "Premium Plan",
        price: 49.9,
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi id nobis reprehenderit!",
        features: [
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit.",
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet."
        ],
        active: false,

    }
]


const Pricing = () => {
    return (
        <section id="pricing" className="container mx-auto p-[60px_0]">
            <div className="pb-[60px]">
                <h1 className="title-section">Pricing</h1>
                <p className="desc-section">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus exercitationem odio dolorem nesciunt explicabo!</p>
            </div>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
                {packages.map((p, index) => {
                    return <PackageCard {...p} key={index} />
                })}
            </div>
        </section>
    );
}

export default Pricing;
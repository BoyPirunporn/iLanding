import { BsBriefcase, BsTrophy, BsAward } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import StatItem from "./StatItem";


const stats = [
    { icon: <BsTrophy size={28} className="text-accent group-hover:text-white" />, title: "3x Won Awards", description: "Vesibulum ante ipsum" },
    { icon: <BsBriefcase size={28} className="text-accent group-hover:text-white"/>, title: "6.5k Faucibus", description: "Nullam quis ante" },
    { icon: <GoGraph size={28} className="text-accent group-hover:text-white"/>, title: "80k Mauris", description: "Etiam sit amet orci" },
    { icon: <BsAward size={28} className="text-accent group-hover:text-white"/>, title: "6x Phasellus", description: "Vestibulum ante ipsum" },
];
const Stat = () => {
    return (
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-10">
            {stats.map((stat, index) => <StatItem key={index} {...stat} />)}
        </div>
    );
}

export default Stat;
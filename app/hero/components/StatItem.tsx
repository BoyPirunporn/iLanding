import { JSX } from "react";

const StatItem = ({
    icon: ICon,
    title,
    description
}: {
    icon: JSX.Element,
    title: string;
    description: string;
}) => {
    return (
        <div className="flex flex-row gap-10 group items-center">
            <div className="p-3 group-hover:bg-accent rounded-full group-hover:text-white transition-all duration-300">
                {ICon}
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="text-xl text-primary/80 font-[500]">{title}</h2>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
}

export default StatItem;
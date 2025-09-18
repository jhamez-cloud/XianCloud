import React from "react";

interface Props {
    image: string;
    children: React.ReactNode;
    type: string;
    cost: number;
    onSelect?: () => void;
}

const Card = (props: Props) => {
    return (
        <figure
            onClick={props.onSelect}
            className={`col-span-1 h-full rounded-xl flex flex-col justify-between px-3 sm:px-4 py-4 sm:py-6 cursor-pointer transition-shadow hover:shadow-lg`}
            style={{
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
            }}
        >
            <h1 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 text-center">
                {props.type}
            </h1>

            <img
                src={props.image}
                alt="card"
                className="w-full h-[100px] sm:h-[120px] object-contain mb-3 sm:mb-4"
            />

            <figcaption className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                {props.children}
            </figcaption>

            <button
                className="h-[40px] sm:h-[50px] p-2 px-3 sm:px-4 rounded-md bg-violet-500 hover:bg-violet-600 text-white text-base sm:text-lg cursor-pointer transition"
                onClick={(e) => e.stopPropagation()} // prevent card click
            >
                Spend {props.cost} xian points
            </button>
        </figure>
    );
};

export default Card;

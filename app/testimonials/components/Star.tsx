import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa6';
import { SlStar } from "react-icons/sl";

const Star = ({
    rating
}: {
    rating: number
}) => {
    const totalStars = 5;
    const clampedRating = Math.min(rating, totalStars);
    return (
        <div className="flex">
            {[...Array(totalStars)].map((_, index) =>
                index < clampedRating ? (
                    <FaStar key={index} className="text-yellow-500" />
                ) : (
                    <FaRegStar key={index} className="text-gray-300" />
                )
            )}
        </div>
    );
}

export default Star;

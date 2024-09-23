import React from "react";
import { RiStarSFill } from "react-icons/ri";

const ReviewCard = ({ image, name, bio, rating, review }) => {
  return (
    <div className="p-3 flex flex-col gap-y-6 bg-white rounded-lg max-w-[500px] w-full min-h-[240px]">
      <div className="flex gap-2">
        <img
          src={image}
          alt={name}
          className="rounded-full max-w-[70px] w-full object-cover aspect-square"
        />

        <div className="flex flex-col">
          <span className="text-xl font-medium">{name}</span>
          <span className="text-green-600">{bio}</span>
          <div className="flex">
            {Array(rating)
              .fill(0)
              .map((item) => (
                <span>
                  <RiStarSFill />
                </span>
              ))}
          </div>
        </div>
      </div>

      <p className="text-slate-500 text-sm">{review}</p>
    </div>
  );
};

export default ReviewCard;

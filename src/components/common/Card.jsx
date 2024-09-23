import React from "react";

const Card = ({ imgUrl, heading2, heading, para, paraClass }) => {
  return (
    <div className="flex flex-col gap-6 items-center min-[480px]:items-start max-w-[330px] w-full">
      <img
        src={imgUrl}
        alt={imgUrl}
        className={`${!heading2 ? "rounded-full" : ""} w-[120px] object-cover`}
        loading="lazy"
      />

      <h4 className="text-xl font-medium">
        {heading2 && (
          <span className="text-xl uppercase font-medium text-green-700">
            {heading2}
          </span>
        )}
        <br />
        {heading}
      </h4>
      <p
        className={`text-[#485256] text-sm text-center min-[480px]:text-start`}
      >
        {para}
      </p>
    </div>
  );
};

export default Card;

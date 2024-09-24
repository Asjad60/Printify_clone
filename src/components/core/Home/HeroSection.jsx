import React from "react";
import backHero from "../../../assets/svgs/background-hero.svg";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlinePlayCircle } from "react-icons/md";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import PrintDesign from "../../../assets/svgs/printing-design.svg";

const HeroSection = () => {
  return (
    <div className="lg:py-28 flex items-center">
      <div
        className="max-w-7xl w-full mx-auto  p-8 flex flex-col md:flex-row justify-between items-center mt-20 lg:mt-0"
        style={{ background: `url(${backHero}) right/60% no-repeat` }}
      >
        <div className="flex flex-col gap-y-8 w-11/12 md:w-[45%]  pr-6 mb-6">
          <h2 className="text-3xl lg:text-[3.5rem] leading-[1.2] font-semibold ">
            Create and sell custom products
          </h2>
          <div className="flex flex-col gap-y-2">
            <span className="flex gap-2">
              <IoCheckmark className="text-[#39B75D]" size={25} /> 100% Free to
              use
            </span>
            <span className="flex gap-2">
              <IoCheckmark className="text-[#39B75D]" size={25} /> High-Quality
              Products
            </span>
            <span className="flex gap-2">
              <IoCheckmark className="text-[#39B75D]" size={25} /> Largest
              global print network
            </span>
          </div>

          <div className="flex flex-col min-[400px]:flex-row gap-4">
            <Link to={"/register"}>
              <Button
                text={"Start for free"}
                customClass={"px-6 py-4 whitespace-nowrap"}
              />
            </Link>
            <Button
              outline={true}
              customClass={"whitespace-nowrap max-w-max max-[399px]:p-4"}
            >
              <MdOutlinePlayCircle size={20} />
              How it Works?
            </Button>
          </div>

          <p className="text-[#39B75D]">
            Trusted by over 8M sellers around world
          </p>
        </div>

        <div className="w-full flex justify-center flex-1 ">
          <img src={PrintDesign} alt="PrintDesignImg" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

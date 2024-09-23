import React, { useRef } from "react";
import Button from "../../common/Button";
import plantimg from "../../../assets/svgs/plant.svg";
import { motion, useInView } from "framer-motion";

const Financial = () => {
  const containerRef = useRef();
  const isInView = useInView(containerRef, { once: true });
  return (
    <div className="relative min-h-svh overflow-hidden " ref={containerRef}>
      <div
        className="bg-[#f7f7f7] absolute top-0 left-1/2 w-64 h-28 -translate-x-1/2"
        style={{ clipPath: "polygon(50% 58%, 0 0, 100% 0)" }}
      />

      <div className="relative px-20 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ x: 400 }}
          animate={isInView ? { x: 0 } : {}}
          transition={{ duration: 1.5 }}
          className="bg-[#203741] p-6 md:p-20 w-full rounded-3xl my-4 flex flex-col gap-6 justify-start mt-32 text-white"
        >
          <h3 className="text-4xl font-semibold">Make Money, Risk-Free</h3>
          <p>You pay for fulfillment only when you make a sale</p>

          <div className="p-8 flex flex-col rounded-xl px-4 bg-[#132127] lg:max-w-[380px]">
            <div className="p-4">
              <span>You sell a t-shirt</span>
              <span>$30</span>
            </div>

            <div className="p-4 border-b border-slate-400">
              <span>You pay for its production</span>
              <span>$12</span>
            </div>

            <div className="p-4 text-green-600 font-semibold text-xl">
              <span>Your profit</span>
              <span>$18</span>
            </div>
          </div>

          <Button text={"Start selling"} customClass={"max-w-max"} />

          <p className="text-slate-400">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </motion.div>

        <div className="absolute hidden lg:block -bottom-20 -right-24 min-[1130px]:right-0 min-[1130px]:bottom-0  ">
          <img
            src={plantimg}
            alt="plantLogo"
            className="aspect-[9/16] max-[1130px]:w-9/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Financial;

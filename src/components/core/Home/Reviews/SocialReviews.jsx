import React, { useRef } from "react";
import Slider from "../../../common/Slider";
import { reviewData } from "../../../../data/card-data";
import { motion, useInView } from "framer-motion";

const SocialReviews = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  return (
    <div className="bg-[#f7f7f7] p-6 lg:p-24 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-10 flex-col lg:flex-row items-center ">
          <h2 className="text-4xl lg:w-1/2 font-semibold text-center lg:text-start">
            Trusted by over 8M sellers around the world
          </h2>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3 text-center lg:text-start"
          >
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </motion.p>
        </div>

        <div
          ref={containerRef}
          className="relative lg:max-w-7xl mx-auto lg:w-11/12 flex justify-center mb-20"
        >
          <Slider contanerRef={containerRef} isRview={true} data={reviewData} />
        </div>
      </div>
    </div>
  );
};

export default SocialReviews;

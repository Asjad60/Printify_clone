import React, { useRef } from "react";
import clothes from "../../../../assets/images/clothes.webp";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import clothesBottom from "../../../../assets/svgs/clothes-bottom.svg";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "../../../common/Slider";
import { howItWorks } from "../../../../data/card-data";

const HowItWorks = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="bg-[#f7f7f7] relative min-h-screen pb-20">
      <div
        className="bg-white absolute top-0 left-1/2 w-64 h-28 -translate-x-1/2"
        style={{ clipPath: "polygon(50% 58%, 0 0, 100% 0)" }}
      />
      <div className="max-w-6xl w-full py-2 mx-auto pt-32 px-4 relative h-full ">
        <div className="relative min-h-[650px] overflow-hidden flex flex-col max-[1023px]:mx-auto lg:flex-row max-[1023px]:max-w-max">
          <div className="lg:absolute z-[2] bg-white rounded-full lg:bg-none flex justify-center ">
            <div className="max-w-[462px] relative h-full">
              <img
                src={clothes}
                alt="clothes"
                className="w-full bg-green-600 rounded-3xl"
              />

              <div>
                <Link
                  to={"/poduct/accessories/mugs"}
                  className="img_btn top-36 left-8"
                  title="Mugs"
                >
                  +
                </Link>
                <Link
                  to={"/poduct/accessories/phone-cases"}
                  className="img_btn top-44 right-44"
                  title="Phone cases"
                >
                  +
                </Link>
                <Link
                  to={"/poduct/accessories/hats"}
                  className="img_btn top-20 right-2"
                  title="Hats"
                >
                  +
                </Link>
                <Link
                  to={"/poduct/accessories/hats"}
                  className="img_btn bottom-[19rem] left-[7.5rem]"
                  title="Hats"
                >
                  +
                </Link>
                <Link
                  to={"/poduct/accessories/hoodies"}
                  className="img_btn bottom-10 left-10"
                  title="Hoodies"
                >
                  +
                </Link>
                <Link
                  to={"/poduct/accessories/socks"}
                  className="img_btn bottom-10 right-48"
                  title="Socks"
                >
                  +
                </Link>
              </div>
              <div
                className="absolute bottom-0 -right-2 w-2/3 h-[100px]"
                style={{
                  background: `url(${clothesBottom}) right/100% no-repeat`,
                }}
              />
            </div>
          </div>

          <motion.div
            ref={ref}
            initial={{ width: "0%" }}
            animate={isInView ? { width: "100%" } : {}}
            transition={{ duration: 1 }}
            className="bg-white lg:px-24 transform rounded-b-3xl lg:rounded-3xl h-[275px] lg:h-[calc(40rem-158px)] z-[1] lg:absolute bottom-0 flex justify-center lg:justify-end"
          >
            <motion.div
              className="lg:max-w-[400px] absolute"
              initial={{ bottom: "-100%", opacity: 0 }}
              animate={
                isInView ? { bottom: "50%", translateY: "50%", opacity: 1 } : {}
              }
              transition={{ duration: 1, delay: 1.2 }}
            >
              <div className="px-6 flex flex-col gap-6">
                <h2 className="text-3xl font-semibold">
                  Easily add your design to a wide range of products
                </h2>
                <p>
                  With our free design tools, you can easily add your custom
                  designs to t-shirts, mugs, phone cases, and hundreds of other
                  products.
                </p>
                <Link
                  to={"/products"}
                  className="text-green-600 flex gap-2 items-center"
                >
                  All Products <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* swiper  */}
        <div
          className="relative max-w-sm lg:max-w-7xl mx-auto w-11/12 flex justify-center"
          ref={containerRef}
        >
          <Slider
            contanerRef={containerRef}
            isRview={false}
            data={howItWorks}
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

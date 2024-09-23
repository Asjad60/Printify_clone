import React, { useEffect, useRef, useState } from "react";
import storesImg from "../../../assets/svgs/stores-background.svg";
import printify from "../../../assets/svgs/printify.svg";
import talkToSales from "../../../assets/svgs/talk-to-sales.svg";
import { motion, useInView } from "framer-motion";
import { connectImages } from "../../../data/card-data";
import Button from "../../common/Button";

const ConnectStore = () => {
  const connectStoreRef = useRef(null);
  const isInView = useInView(connectStoreRef, { once: true });

  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-svh w-full relative">
      <div
        className="bg-[#f7f7f7] absolute top-0 left-1/2 w-64 h-28 -translate-x-1/2"
        style={{ clipPath: "polygon(50% 58%, 0 0, 100% 0)" }}
      />

      <div className="max-w-7xl mx-auto w-full px-4 pt-28 lg:p-24">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-semibold mb-3">Connect your store</h2>
          <p className="text-slate-400">
            Printify easily integrates with major e-commerce platforms and
            marketplaces
          </p>
        </div>

        <motion.div
          ref={connectStoreRef}
          className="w-full bg-cover bg-center bg-no-repeat h-[450px] relative mt-10 flex justify-center items-center overflow-hidden"
          style={{
            background: isLargeScreen
              ? `url(${storesImg}) center/90% no-repeat`
              : "",
          }}
          initial={{ backgroundSize: "0%" }}
          animate={isInView ? { backgroundSize: "90%" } : {}}
          transition={{ duration: 1 }}
        >
          <div
            className="z-10 translate-x-6 -translate-y-3 w-[100px] sm:w-[120px] h-[100px] sm:h-[120px] lg:w-[150px] lg:h-[150px] rounded-3xl shadow-md"
            style={{
              background: `url(${printify}) center/50% no-repeat, #18c75a`,
            }}
          />
          {connectImages.map(({ src, alt, position, className }) => (
            <motion.img
              key={alt}
              src={src}
              alt={alt}
              initial={{ scale: 0 }}
              animate={isInView ? { ...position, scale: 1 } : {}}
              transition={{ duration: 1 }}
              className={`connect-store-img ${className}`}
            />
          ))}
          <motion.div
            className="connect-store-img w-[80px] sm:w-[120px] lg:w-[150px] flex items-center justify-center text-4xl font-semibold text-slate-500"
            initial={{ scale: 0 }}
            animate={isInView ? { left: "2%", top: "65%", scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            API
          </motion.div>
        </motion.div>

        <div
          className="w-full mt-20 flex flex-col md:flex-row gap-6 justify-between items-center p-14 rounded-3xl mb-20"
          style={{
            background: `url(${talkToSales}) right/50% no-repeat,#e2f7e3`,
          }}
        >
          <h4 className="text-2xl font-semibold">
            Are you a large business looking for custom solutions?
          </h4>

          <Button
            text={"Talk to Sales"}
            outline={true}
            customClass={"whitespace-nowrap"}
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectStore;

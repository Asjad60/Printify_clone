import React from "react";
import HeroSection from "../components/core/Home/HeroSection";
import { features } from "../data/card-data";
import Card from "../components/common/Card";
import HowItWorks from "../components/core/Home/HowItWorks/HowItWorks";
import ConnectStore from "../components/core/Home/ConnectStore";
import SocialReviews from "../components/core/Home/Reviews/SocialReviews";
import Financial from "../components/core/Home/Financial";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />

      {/* features */}
      <div className="mb-28 p-4 mt-20 lg:mt-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 min-[480px]:grid-cols-3 gap-x-12 gap-y-8 max-[480px]:place-items-center">
          {features.map((item) => (
            <Card
              imgUrl={item.imgUrl}
              heading={item.heading}
              para={item.para}
              key={item.id}
            />
          ))}
        </div>
      </div>

      <HowItWorks />

      <ConnectStore />

      {/* social reviews */}
      <SocialReviews />

      <Financial />
    </div>
  );
};

export default Home;

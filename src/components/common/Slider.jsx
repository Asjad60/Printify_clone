import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import ReviewCard from "./ReviewCard";
import { motion, useInView } from "framer-motion";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { useRef } from "react";

const Slider = ({ contanerRef, isRview, data }) => {
  const isInView = useInView(contanerRef, { once: true });
  const paginationRef = useRef(null);

  return (
    <div className="w-full mt-32">
      <Swiper
        slidesPerView={1}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        spaceBetween={100}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          1024: {
            pagination: false,
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper max-[1023px]:px-10"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: !isRview ? -100 : 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.3,
              }}
            >
              {!isRview ? (
                <Card
                  imgUrl={item.imgUrl}
                  heading={item.head2}
                  heading2={item.head1}
                  para={item.desc}
                />
              ) : (
                <ReviewCard
                  image={item.image}
                  name={item.name}
                  bio={item.bio}
                  rating={item.rating}
                  review={item.desc}
                />
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="lg:hidden flex justify-between items-center mt-5">
        <span className="text-slate-500 prev cursor-pointer active:opacity-40">
          <GrFormPrevious size={25} />
        </span>

        <div ref={paginationRef} className="custom-pagination"></div>

        <span className="text-slate-500 next cursor-pointer active:opacity-40">
          <GrFormNext size={25} />
        </span>
      </div>
    </div>
  );
};

export default Slider;

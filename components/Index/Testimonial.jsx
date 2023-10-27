import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialCard from "../Utility/TestimonialCard";

const Testimonial = ({ img }) => {
  return (
    <div className="flex flex-col gap-20 pt-20">
      <div className="container flex flex-col gap-9">
        <div className="w-[84px] h-[84px] rounded-full bg-[#E9F7FE] flex items-center justify-center">
          <Image
            width={38}
            height={33}
            src={"/assets/img/testimonial/heart.svg"}
          />
        </div>
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-heading text-[58px] font-bold leading-[64px]">
            1,000+ customers are <br /> loving Instappoint.
          </h2>
          <div className="flex items-center gap-10">
            <Image
              width={12}
              height={24}
              src={"/assets/img/testimonial/left-arrow.svg"}
            />
            <Image
              width={12}
              height={24}
              src={"/assets/img/testimonial/right-arrow.svg"}
            />
          </div>
        </div>
      </div>
      <div className="w-[1380px] ml-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            el: ".my-custom-pagination-div",
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '">' + "</span>";
            },
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
          <SwiperSlide>
            <TestimonialCard />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container flex items-center gap-4 my-custom-pagination-div" />
    </div>
  );
};

export default Testimonial;

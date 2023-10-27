import React from "react";
import PrimaryBtn from "../Utility/Button/PrimaryBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-between max-lg:flex-col max-lg:gap-10 common-gap">
      {/* hero left side */}
      <div className="text-heading inline-flex flex-col gap-[33px]">
        <div className="flex flex-col gap-[26px]">
          <h1 className="max-lg:text-4xl lg:text-[70px] font-bold leading-[70px]">
            Get valuable <br className="max-lg:hidden" /> leads inside
            <br className="max-lg:hidden" /> WordPress.
          </h1>
          <p className="max-lg:text-lg lg:text-[21px] font-book leading-[34px]">
            We’ve helped over 2,500 job seekers to get{" "}
            <br className="max-lg:hidden" />
            into the most popular tech teams.
          </p>
        </div>
        <div className="inline-flex flex-col gap-[30px]">
          <PrimaryBtn title={"Get Started for Free"} />
          <div className="text-base font-book leading-7">
            Still confused?{" "}
            <span className="text-primary">Check our 1 min video</span>
          </div>
        </div>
      </div>
      {/* hero right side */}
      <Image
        width={609}
        height={471}
        src={"/assets/img/hero-right.png"}
        alt="finity-hero"
        className="lg:w-[509px] xl:w-[609px]"
      />
    </div>
  );
};

export default Hero;

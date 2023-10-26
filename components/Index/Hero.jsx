import React from "react";
import PrimaryBtn from "../Utility/Button/PrimaryBtn";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex items-center justify-between common-gap">
      {/* hero left side */}
      <div className="text-heading inline-flex flex-col gap-[33px]">
        <div className="flex flex-col gap-[26px]">
          <h1 className=" text-[70px] font-bold leading-[70px]">
            Get valuable <br /> leads inside <br /> WordPress.
          </h1>
          <p className="text-[21px] font-book leading-[34px]">
            We’ve helped over 2,500 job seekers to get <br />
            into the most popular tech teams.
          </p>
        </div>
        <div className="inline-flex flex-col gap-[30px]">
          <PrimaryBtn title={"Get Started for Free"} />
          <div className="text-base font-book leading-7">
            Still confused?
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
        className=""
      />
    </div>
  );
};

export default Hero;

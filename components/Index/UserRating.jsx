import React from "react";
import RatingCard from "../Utility/RatingCard";
import Image from "next/image";

const UserRating = () => {
  return (
    <div
      className="common-gap flex items-start justify-between
    "
    >
      <RatingCard
        heading={"10k"}
        icon={"/assets/img/user-rating/heart.svg"}
        active={"Active Downloads"}
        link={"/#"}
        linkText={"On Websites"}
      />
      <RatingCard
        heading={"4.7"}
        icon={"/assets/img/user-rating/star.svg"}
        active={"1,938 Rating"}
        link={"/#"}
        linkText={"WordPress Community"}
      />
      <div className="flex flex-col gap-[44px]">
        <h3 className="text-heading text-[34px] font-bold leading-[45px]">
          Trusted by 25,000+ happy <br />
          Marketers and WordPress <br /> users since 2018.
        </h3>
        <div className="flex flex-col gap-[38px]">
          <h4 className="text-light-gray text-lg font-normal leading-loose">
            Also featured in
          </h4>
          <div className="flex items-center gap-5">
            <Image
              width={100}
              height={30}
              src={"/assets/img/user-rating/featured-1.png"}
              alt="featured-1"
            />
            <Image
              width={100}
              height={30}
              src={"/assets/img/user-rating/featured-2.png"}
              alt="featured-2"
            />
            <Image
              width={100}
              height={30}
              src={"/assets/img/user-rating/featured-3.png"}
              alt="featured-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRating;

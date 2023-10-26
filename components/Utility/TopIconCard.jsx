import Image from "next/image";
import React from "react";

const TopIconCard = ({ img, title, desc, style, rotate, hidden }) => {
  return (
    <div className={`flex flex-col gap-9 ${style} relative`}>
      <div className="w-[97px] h-[97px]  bg-primary rounded-[10px] top-icon-shadow flex items-center justify-center">
        <Image width={36} height={36} src={img} alt="working-with" />
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="text-heading text-2xl font-bold leading-[34px]">
          {title}
        </h3>
        <p className="text-light-gray text-base font-book leading-7">{desc}</p>
      </div>
      <Image
        className={`absolute -right-10 ${
          rotate ? "" : "top-11"
        } ${rotate} ${hidden}`}
        width={222}
        height={87}
        src={"assets/img/working-with/arrow.svg"}
        alt=""
      />
    </div>
  );
};

export default TopIconCard;

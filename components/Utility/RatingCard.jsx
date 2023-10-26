import Image from "next/image";
import Link from "next/link";
import React from "react";

const RatingCard = ({ heading, active, icon, link, linkText }) => {
  return (
    <div className="text-heading">
      <h3 className=" text-[70px] font-bold leading-[70px] mb-5">{heading}</h3>
      <div className="flex items-center gap-[5px] mb-3">
        {Array(5)
          .fill()
          .map((_, index) => (
            <Image key={index} width={16} height={16} src={icon} />
          ))}
      </div>
      <p className="text-base font-book leading-7">{active}</p>
      <Link href={link} className="text-blue-500 text-base font-book leading-7">
        {linkText}
      </Link>
    </div>
  );
};

export default RatingCard;

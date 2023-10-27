import Image from "next/image";
import React from "react";

const ContentIconCard = ({ img, title, desc }) => {
  return (
    <div className="flex items-center gap-[30px]">
      <div className="min-w-[83px] h-[83px] flex items-center justify-center bg-white rounded-[10px] border border-zinc-200">
        <Image width={36} height={36} src={img} alt={title} />
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="text-heading text-[21px] font-bold leading-[34px]">
          {title}
        </h4>
        <p className="text-light-gray text-base font-book leading-7">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ContentIconCard;

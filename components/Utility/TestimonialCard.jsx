import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="w-full flex flex-col gap-6 p-7 bg-white rounded-[10px] border border-zinc-200">
      <div className="w-12 h-12 rounded-full">
        <Image
          height={48}
          width={48}
          src={"/assets/img/testimonial/testimonial1.png"}
        />
      </div>
      <div className="flex flex-col gap-3">
        <p className="text-heading text-base font-book leading-7">
          I owe these guys my life. Already used their landing page templates
          for my latest two projects.
        </p>
        <span className="text-heading text-lg font-medium leading-loose">
          - @thepatwalls
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;

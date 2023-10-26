import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div className="flex flex-col items-center gap-16">
      <h3 className="text-center text-heading text-[58px] font-bold leading-[64px]">
        Control everything <br />
        in a single place.
      </h3>
      <Image
        width={939}
        height={499}
        src={"/assets/img/working-with/feature.png"}
      />
    </div>
  );
};

export default Feature;

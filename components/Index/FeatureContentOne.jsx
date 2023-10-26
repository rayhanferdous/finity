import ContentCard from "./ContentCard";
import ContentIconCard from "../Utility/ContentIconCard";
import Image from "next/image";

const FeatureContentOne = () => {
  return (
    <div className="common-gap">
      <ContentCard>
        <div className="flex flex-col gap-14">
          <h3 className="text-heading text-[58px] font-bold leading-[64px]">
            Grow your <br /> business fast.
          </h3>
          <div className="flex flex-col gap-10">
            <ContentIconCard
              img={"/assets/img/content/target.svg"}
              title={"Find better leads"}
              desc={"We receive over 50 new job submission at our website."}
            />
            <ContentIconCard
              img={"/assets/img/content/meeting.svg"}
              title={"Set instant meeting"}
              desc={"We receive over 50 new job submission at our website."}
            />
            <ContentIconCard
              img={"/assets/img/content/card.svg"}
              title={"Get paid seemlessly"}
              desc={"We receive over 50 new job submission at our website."}
            />
          </div>
        </div>
        <Image
          width={546}
          height={632}
          src={"/assets/img/content/feature.png"}
        />
      </ContentCard>
    </div>
  );
};

export default FeatureContentOne;

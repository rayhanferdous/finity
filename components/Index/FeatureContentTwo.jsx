import ContentCard from "./ContentCard";
import Image from "next/image";
import PrimaryBtn from "../Utility/Button/PrimaryBtn";

const FeatureContentTwo = () => {
  return (
    <div className="flex flex-col gap-16">
      <h3 className="text-heading text-[58px] font-bold leading-[64px]">
        Meet with clients <br /> anytime, anywhere.
      </h3>
      <ContentCard>
        <Image
          width={546}
          height={632}
          src={"/assets/img/content/feature-2.png"}
        />
        <div className="flex flex-col gap-11">
          <div className="flex flex-col gap-9">
            <p className="text-heading text-lg font-book leading-loose">
              Computer users and programmers have become so accustomed to using
              Windows, even for the changing capabilities and the appearances of
              the graphical interface of the versions, therefore it has remained
              Microsoft’s product.
              <br />
              <br />
              These companies release their own versions of the operating
              systems with minor changes, and yet always with the same bottom
              line.
            </p>
            <PrimaryBtn title={"Get Started for Free"} />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-light-gray text-[13px] font-book leading-tight">
              “The following article covers a topic that has recently moved to
              center stage–at least it seems that way. If you’ve been thinking
              you need to know more about unconditional love, here’s your
              opportunity.”
            </p>
            <span className="text-heading text-[13px] font-medium">
              John Doe, Founder of Matrix
            </span>
          </div>
        </div>
      </ContentCard>
    </div>
  );
};

export default FeatureContentTwo;

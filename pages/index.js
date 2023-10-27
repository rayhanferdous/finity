import ContentCard from "@/components/Index/ContentCard";
import Feature from "@/components/Index/Feature";
import FeatureContentOne from "@/components/Index/FeatureContentOne";
import FeatureContentTwo from "@/components/Index/FeatureContentTwo";
import Hero from "@/components/Index/Hero";
import Testimonial from "@/components/Index/Testimonial";
import UserRating from "@/components/Index/UserRating";
import WorkingWith from "@/components/Index/WorkingWith";
export default function Home() {
  return (
    <>
      <div className="container">
        <Hero />
        <UserRating />
      </div>
      <WorkingWith />
      <div className="container">
        <Feature />
        <FeatureContentOne />
        <FeatureContentTwo />
      </div>
      {/* <Testimonial /> */}
    </>
  );
}

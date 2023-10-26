import TopIconCard from "../Utility/TopIconCard";

const WorkingWith = () => {
  return (
    <div className="common-gap border-t border-solid">
      <div className="container flex flex-col gap-14">
        <h3 className="text-center text-heading text-[58px] font-bold leading-[64px]">
          Working with <br />
          Instappoint is simple.
        </h3>

        <div className="flex items-center justify-between gap-24 rote">
          <TopIconCard
            rotate={"-rotate-12 top-11"}
            title={"Find Leads"}
            desc={
              "We’ve helped over 2,500 job seekers to get into the most popular tech teams."
            }
            img={"/assets/img/working-with/search.svg"}
          />
          <TopIconCard
            style={"mt-[75px]"}
            rotate={"rotate-[35deg] scale-y-[-1]"}
            title={"Book Appointments"}
            desc={
              "We’ve helped over 2,500 job seekers to get into the most popular tech teams."
            }
            img={"/assets/img/working-with/calender.svg"}
          />
          <TopIconCard
            hidden={"hidden"}
            style={"mt-[144px]"}
            title={"Get Paid"}
            desc={
              "We’ve helped over 2,500 job seekers to get into the most popular tech teams."
            }
            img={"/assets/img/working-with/tick.svg"}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkingWith;

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const navMenuItems = [
    {
      title: "Demos",
      path: "/#",
    },
    {
      title: "Pages",
      path: "/#",
    },
    {
      title: "Support",
      path: "/#",
    },
  ];
  return (
    <div className="w-[1550px] h-[55px]">
      <Image
        width={412}
        height={112}
        className="w-[103px]"
        src={"/assets/finity-logo.png"}
        alt="finity"
      />
      {navMenuItems.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className="text-center text-slate-800 text-base font-normal font-['Circular Std']"
        >
          {item.title}
        </Link>
      ))}
      <div className="text-center text-slate-800 text-base font-normal font-['Circular Std']"></div>
      <div className="w-[191px] h-[55px] left-[1359px] top-0 absolute">
        <div className="w-[191px] h-[55px] left-0 top-0 absolute bg-blue-500 rounded-[5px]" />
        <div className="w-40 left-[15px] top-[18px] absolute text-center text-white text-base font-medium font-['Circular Std']">
          Get Started for Free
        </div>
      </div>
    </div>
  );
};

export default Header;

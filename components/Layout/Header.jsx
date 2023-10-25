import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../Utility/Button/PrimaryBtn";

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
    <header className="header-container">
      <Image
        width={412}
        height={112}
        className="w-[103px]"
        src={"/assets/finity-logo.png"}
        alt="finity"
      />
      <nav className="flex items-center gap-10">
        {navMenuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="text-center text-heading text-base font-book"
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <PrimaryBtn title="Get Started for Free" />
    </header>
  );
};

export default Header;

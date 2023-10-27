import Link from "next/link";
import React from "react";
import PrimaryBtn from "../Utility/Button/PrimaryBtn";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    Community: [
      { title: "For Talents", link: "/#" },
      { title: "For Companies", link: "/#" },
      { title: "Facebook Group", link: "/#" },
      { title: "FAQ", link: "/#" },
    ],
    "About us": [
      { title: "Meet the Team", link: "/#" },
      { title: "Our Story", link: "/#" },
      { title: "Career", link: "/#" },
    ],
    Useful: [
      { title: "Free Resume Builder", link: "/#" },
      { title: "Free Graphics", link: "/#" },
      { title: "Career Blog", link: "/#" },
    ],
    "Subscribe to Our Newsletter": [
      {
        title:
          "Time is the most precious thing you have when bootstrapping. You can't take time.",
        link: "",
      },
    ],
  };
  return (
    <div className="container common-gap">
      <div className=" flex items-start gap-10 max-xl:flex-wrap justify-between">
        {Object.keys(footerLinks).map((key, index) => {
          return (
            <div className="flex flex-col gap-2">
              <h4 className="text-heading text-lg font-medium leading-loose">
                {key}
              </h4>
              {footerLinks[key].map((link, index) => {
                return link.link == "" ? (
                  <div
                    className={`text-light-gray text-base font-book leading-7 flex flex-col gap-5 w-full sm:w-[394px]
                  `}
                  >
                    <p>{link.title}</p>

                    <div className="flex items-center rounded">
                      <Image
                        width={20}
                        height={15}
                        src={"/assets/img/email.svg"}
                      />

                      <input
                        className="w-full h-full rounded-md focus:outline-none  px-5"
                        type="text"
                        placeholder="Enter your email"
                      />
                      <PrimaryBtn title={"Subscribe"} />
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.link}
                    key={index}
                    className={`text-light-gray text-base font-book leading-7 flex flex-col gap-5`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { BiSolidContact } from "react-icons/bi";
const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Github <BsGithub className="m-2" size={30} />
        </>
      ),
      href: "https://github.com/VSNSRUJANA123",
    },
    {
      id: 2,
      child: (
        <>
          Linkedin <BsLinkedin className="m-2" size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/dvsn-srujana-97ba05257/",
    },
  ];
  return (
    <div>
      <ul className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        {links.map((items) => {
          const { id, child, href } = items;
          return (
            <li className="" key={id}>
              <a
                href={href}
                className="bg-gray-500 ml-[-70px] hover:ml-[0px] duration-300 text-white flex justify-between flex-row items-center "
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Social;

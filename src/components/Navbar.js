import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-scroll";
import "./navbar.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold font-signature">Srujana</h1>
      <ul className="flex hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              className="menu-list p-2 cursorPointer hover:scale-110 duration-500"
              key={id}
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        className="cursorPointer md:hidden mr-3"
        onClick={() => setNav(!nav)}
      >
        {nav ? <AiFillCloseCircle size={30} /> : <CiMenuFries size={30} />}
      </div>
      {nav && (
        <ul className="bg-black flex flex-col justify-center items-center h-screen w-full absolute top-16 right-0 md:hidden">
          {links.map(({ id, link }) => {
            return (
              <li className="menu-list p-2 cursorPointer" key={id}>
                <Link
                  to={link}
                  smooth
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

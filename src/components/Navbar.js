import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { AiFillCloseCircle } from "react-icons/ai";
import "./navbar.css";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menu = [
    {
      id: 1,
      items: "Home",
    },
    {
      id: 2,
      items: "About",
    },
    {
      id: 3,
      items: "Projects",
    },
    {
      id: 4,
      items: "Experience",
    },
    {
      id: 5,
      items: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center bg-black text-white p-4">
      <h1 className="text-4xl font-bold font-signature">Srujana</h1>
      <ul className="flex hidden md:flex">
        {menu.map(({ id, items }) => {
          return (
            <li className="menu-list p-2 cursorPointer" key={id}>
              {items}
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
          {menu.map(({ id, items }) => {
            return (
              <li
                className="menu-list p-2 cursorPointer"
                onClick={() => setNav(!nav)}
                key={id}
              >
                {items}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import "./home.css";
import profile from "./profile-1.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="Home" className="flex-col flex md:flex-row  w-full p-8 bg-color">
      <div className="p-10">
        <h1 className="py-2 font-bold text-5xl text-white">
          I'm a Full Stack Developer
        </h1>
        <p className="py-5 text-xl text-gray-500">
          I have hands-on experience connecting databases using Node.js and
          MongoDB with react frameworks and I excel in debugging complex issues.
          I have successfully completed clone projects, showcasing my ability to
          recreate and innovate.
        </p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1eRGWMYmDlm4WMCEKg5BJWjCPPhVfs58X/view?usp=sharing"
        >
          <button className="text-white flex flex-row justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-900 p-4 my-3 rounded">
            Portfolio
            <span className="hover:rotate-90 duration-300">
              <MdKeyboardArrowRight size={20} />
            </span>
          </button>
        </a>
      </div>
      <div className="w-full">
        <img src={profile} className="mx-8 rounded-2xl w-1/2" alt="my photo" />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./home.css";
import profile from "./profile-1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div className="flex-col flex md:flex-row justify-center items-center w-full p-8 bg-color">
      <div className="p-10">
        <h1 className="py-2 font-bold text-5xl text-white">
          I'm a Full Stack Developer
        </h1>
        <p className="py-5 text-xl text-gray-500">
          I have 1 year Experience building and designing real-time projects
        </p>
        <button className="text-white flex flex-row justify-center items-center bg-gradient-to-r from-blue-600 to-indigo-900 p-4 my-3 rounded">
          Portfolio
          <span className="hover:rotate-90 duration-300">
            <MdKeyboardArrowRight size={20} />
          </span>
        </button>
      </div>
      <div className="">
        <img src={profile} className="rounded-2xl w-1/2" alt="my photo" />
      </div>
    </div>
  );
};

export default Home;

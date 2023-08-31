import React from "react";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import react from "./react.png";
import tailwand from "./tailwind css.png";
import node from "./nodeJs.png";
import mongobd from "./mongodb.png";
import python from "./python.png";
import github from "./github.png";
const Skills = () => {
  const skills = [
    { id: 1, img: html, name: "Html", style: "shadow-orange-500" },
    { id: 2, img: css, name: "Css", style: "shadow-blue-500" },
    { id: 3, img: js, name: "Javascript", style: "shadow-yellow-500" },
    { id: 4, img: react, name: "React", style: "shadow-blue-600" },
    { id: 5, img: tailwand, name: "Tailwind css", style: "shadow-sky-400" },
    { id: 6, img: node, name: "Node JS", style: "shadow-green-500" },
    { id: 7, img: mongobd, name: "mongodb", style: "shadow-green-800" },
    { id: 8, img: python, name: "python", style: "shadow-yellow-900" },
    { id: 9, img: github, name: "github", style: "shadow-white" },
  ];
  return (
    <div className="bg-color">
      <div>
        <h1 className="text-white text-5xl px-16 p-3">Skills</h1>
        <p className="text-gray-500 px-16 p-3 text-xl">
          These are technologies which I've learned
        </p>
      </div>
      <section className="md:px-16 w-full justify-center align-middle grid gap-8 px-8 py-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
        {skills.map((items) => {
          const { id, img, name, style } = items;
          return (
            <div
              key={id}
              className={`skills-card  p-3 shadow-md hover:scale-105 duration-500 rounded ${style}`}
            >
              <img src={img} alt={name} className="skillsImg object-cover" />
              <p className="text-white p-2">{name}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Skills;

import React from "react";
import firstPage from "./songspage.png";
import post_get from "./post.png";
import notes from "./notes.png";
import menu from "./menu.png";
import para from "./generatepara.png";
import tour from "./tour.png";
const Projects = () => {
  const project = [
    {
      id: 1,
      img: post_get,
      title: "created by using html,css,js,JSON access the apis",
      demo: "https://apiputandpost.ccbp.tech",
      code: "https://github.com/VSNSRUJANA123/GoRestConsole",
    },
    {
      id: 2,
      img: notes,
      title:
        "Notes Website use to create a small notes and save it by using html,css,js languages",
      demo: "https://notesappp.ccbp.tech",
      code: "https://github.com/VSNSRUJANA123/Notes_create.git",
    },
    {
      id: 3,
      img: firstPage,
      title:
        "This is a mini-spotify project by use html,css and cloudinary languages",
      demo: "https://tollymusic.ccbp.tech/",
      code: "https://github.com/VSNSRUJANA123/Mini-Spotify.git",
    },
    {
      id: 4,
      img: menu,
      title:
        "Our menu features a variety of breakfast, lunch, snack, and dinner options to satisfy your cravings.",
      demo: "https://myreactmenu.netlify.app/",
      code: "",
    },
    {
      id: 5,
      img: para,
      title:
        "A React project that generates a paragraph of text based on the number of lines entered by the user.",
      demo: "https://reactparagenerator.netlify.app/",
      code: "https://github.com/VSNSRUJANA123/generateparagraph.git",
    },
    {
      id: 6,
      img: tour,
      title: "It is simple tour project and read more option ",
      demo: "https://myreacttour.netlify.app/",
      code: "https://github.com/VSNSRUJANA123/reacttour.git",
    },
  ];
  return (
    <div className=" bg-color">
      <h1 className="py-5 px-16 text-5xl text-white">Projects</h1>
      <p className="text-gray-500 py-5 px-16">Check out my projects</p>
      <div className="px-3 flex-col flex md:flex-row flex-wrap justify-center align-middle items-center">
        {project.map((items) => {
          const { id, img, title, demo, code } = items;
          return (
            <div
              key={id}
              className="text-center my-5 mr-5 rounded p-5 cards-height text-white bg-black"
            >
              <div>
                <img src={img} alt={title} className="projectImage" />
                <p className="p-2 projectPara">{title}</p>
              </div>
              <div className="py-5 ">
                <a href={demo} target="_blank">
                  <button className="mr-5 mb-5 p-3 rounded bg-gradient-to-r from-blue-600 to-indigo-900">
                    Demo
                  </button>
                </a>
                <a href={code} target="_blank">
                  <button className="p-3 mb-5 rounded bg-gradient-to-r from-blue-600 to-indigo-900">
                    Code
                  </button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

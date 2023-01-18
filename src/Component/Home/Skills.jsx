import React, { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoSass,
  IoLogoNpm,
} from "react-icons/io";
import {
  FaReact,
  FaSketch,
  FaGithub,
  FaGitAlt,
  FaBootstrap,
  FaYarn,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import logoTest from "./test.svg";

const Skills = () => {
  const [obj] = useState([
    {
      name: "HTML5",
      img: IoLogoHtml5,
      color: "#E94E32",
    },
    {
      name: "CSS3",
      img: IoLogoCss3,
      color: "#1572B6",
    },
    {
      name: "Javascript",
      img: IoLogoJavascript,
      color: "#F7DF1E",
    },
    {
      name: "React.JS",
      img: FaReact,
      color: "#00D8FF",
    },
    {
      name: "Node.JS",
      img: IoLogoNodejs,
      color: "#539E43",
    },
    {
      name: "SASS",
      img: IoLogoSass,
      color: "#B7598A",
    },
    {
      name: "TailwindCSS",
      img: SiTailwindcss,
      color: "#38BDF8",
    },
    {
      name: "Bootstrap",
      img: FaBootstrap,
      color: "#563D7C",
    },
    {
      name: "Git",
      img: FaGitAlt,
      color: "#F03C2E",
    },
    {
      name: "Github",
      img: FaGithub,
      color: "#5C6BC0",
    },
    {
      name: "Figma",
      resim:
        "https://raw.githubusercontent.com/rahulbanerjee26/githubAboutMeGenerator/main/icons/figma.svg",
      color: "#ddd",
    },
    {
      name: "Sketch",
      img: FaSketch,
      color: "#EA6C00",
    },
    {
      name: "NPM",
      img: IoLogoNpm,
      color: "#CB3837",
    },
    {
      name: "Yarn",
      img: FaYarn,
      color: "#2C8EBB",
    },
  ]);

  /*

          <p>HTML5</p>
          <p>CSS</p>
          <p>SASS</p>
          <p>JS</p>
          <p>REACT JS</p>
          <p>TAILWIND CSS</p>
          <p>BOOTSTRAP</p>
          <p>FIGMA</p>
          <p>GIT</p>
          <p>GITHUB</p>
          <p>NPM</p>
          <p>YARN</p>

  */
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center text-5xl mb-0 font-bold">My Skills</h2>
      <div className="flex flex-col lg:flex-row gap-2">
        <section className="flex-1 w-full">
          <img
            src={logoTest}
            className="w-full h-auto select-none"
            draggable="false"
            alt=""
          />
        </section>
        <section className="flex-1 lg:mt-10 w-full h-full">
          <h2 className="text-5xl font-bold mb-6">Front end Developer</h2>
          <div className="flex gap-4 flex-wrap mb-4 justify-center lg:justify-start">
            {obj.map((data, index) => (
              <>
                {data.resim ? (
                  <div className="group relative">
                    <img
                      src={data.resim}
                      className="hover:drop-shadow-2xl cursor-pointer transition hover:scale-110 text-gray-500 h-[50px] w-auto"
                      alt={data.name}
                    />
                    <span className="invisible select-none font-bold z-10 px-2 bg-white text-gray-800 rounded-lg shadow-lg absolute top-[-50%] left-1/2 -translate-x-1/2 group-hover:visible">
                      {data.name}
                    </span>
                  </div>
                ) : (
                  <div className="group relative">
                    <data.img
                      className=" inline-block hover:drop-shadow-2xl cursor-pointer transition hover:scale-110 "
                      size={50}
                      style={{ color: data.color }}
                      key={index}
                    />
                    <span className="invisible select-none font-bold z-10 px-2 bg-white text-gray-800 rounded-lg shadow-lg absolute top-[-50%] left-1/2 -translate-x-1/2 group-hover:visible">
                      {data.name}
                    </span>
                  </div>
                )}
              </>
            ))}
          </div>

          <ul>
            <li className="flex mb-2">
              <AiOutlineDoubleRight size={20} className="text-lime-500 mr-2" />
              Building responsive website front end using React.JS - Tailwind
              CSS
            </li>
            <li className="flex mb-2">
              <AiOutlineDoubleRight size={20} className="text-lime-500 mr-2" />
              Creating application backend in Node, Express & Next ( I learn )
            </li>
            <li className="flex mb-2">
              <AiOutlineDoubleRight size={20} className="text-lime-500 mr-2" />
              Integration of third party services such as Firebase / AWS ( I
              learn )
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Skills;

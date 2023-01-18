import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

const Content = () => {
  const [obj] = useState([
    {
      title: "Spotify Clone",
      description: "React + Tailwind CSS ",
      githubLink: "https://github.com/hdogukanozkan/Spotify-Clone",
      webUrlLink: "https://celadon-malasada-cb13ec.netlify.app/",
      imgUrl: "/images/projects/spotifyclone.png",
    },
    {
      title: "Hulu Clone",
      description:
        "React JS / Next JS + Tailwind CSS + TMDB (The Movie Database) API + ReactFlip Move + Deploy Vercel ",
      githubLink: "https://github.com/hdogukanozkan/Hulu-Clone",
      webUrlLink: "https://hulu-clone-mauve-six.vercel.app/",
      imgUrl: "/images/projects/huluclone.png",
    },
    {
      title: "Blog Site",
      description: "React JS + React Router + JSON Server + Axios + Sass",
      githubLink: "https://github.com/hdogukanozkan/Blog-Site",
      webUrlLink: "https://hdo-react-blogs.netlify.app/",
      imgUrl: "/images/projects/blogSite.png",
    },
    {
      title: "Movie DB App",
      description: "React JS + JSON Server + Axios + Sass",
      githubLink: "https://github.com/hdogukanozkan/Movie-save-to-JSON",
      webUrlLink: "https://hdo-react-movies-json.netlify.app/",
      imgUrl: "/images/projects/movieDb.png",
    },
    {
      title: "Sticky Notes App",
      description: "React JS + Nanoid + localStorage",
      githubLink: "https://github.com/hdogukanozkan/React-NotesApp",
      webUrlLink: "https://hdo-react-sticky-notes.netlify.app/",
      imgUrl: "/images/projects/stickyNotes.png",
    },
    {
      title: "Food Design",
      description: "HTML / CSS",
      githubLink: "https://github.com/hdogukanozkan/food-design-work",
      webUrlLink: "https://hdogukanozkan.github.io/food-design-work/",
      imgUrl: "/images/projects/foodDesign.png",
    },
    {
      title: "BMI Calculator",
      description: "React JS",
      githubLink: "https://github.com/hdogukanozkan/BMI-Calculator",
      webUrlLink: "https://stirring-crumble-20d00d.netlify.app/",
      imgUrl: "/images/projects/bmiCalc.png",
    },
    {
      title: "Hotel Site",
      description: "HTML / CSS",
      githubLink: "https://github.com/hdogukanozkan/hotel-site",
      webUrlLink: "https://hdogukanozkan.github.io/hotel-site/",
      imgUrl: "/images/projects/hotelSite.png",
    },
  ]);

  /*
  
  */

  return (
    <section className="w-full px-2 md:px-5 lg:px-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {obj.map((data, index) => (
        <div className="flex flex-col" key={index}>
          <img
            src={data.imgUrl}
            alt={data.title}
            draggable="false"
            className="md:hover:scale-105 hover:z-10 transition-all duration-300 select-none"
          />
          <div className="flex-1 flex flex-col">
            <h1 className="text-2xl font-bold my-3 select-none">
              {data.title}
            </h1>
            <p className="flex-1 mb-2 select-none">{data.description}</p>
            <div className="flex gap-4 items-center justify-end">
              <button
                onClick={() => {
                  window.open(data.githubLink, "_blank");
                }}
                className="flex h-10 transition select-none gap-2 items-center py-1 w-32 justify-center rounded-lg hover:bg-white bg-gray-300 text-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 font-bold"
              >
                <AiFillGithub className="text-3xl" />
                Github
              </button>
              <button
                onClick={() => {
                  window.open(data.webUrlLink, "_blank");
                }}
                className="flex h-10 transition gap-2 select-none items-center py-1 w-32 justify-center rounded-lg hover:bg-white bg-gray-300 text-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 font-bold"
              >
                <FaLink className="text-2xl" />
                Site click
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Content;

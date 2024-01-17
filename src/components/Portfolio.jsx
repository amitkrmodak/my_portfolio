import React from "react";
import portfolio from "../assets/portfolio/portfolio_website.jpg";
import comingsoon from "../assets/portfolio/comingsoon.png";
import restuarant from "../assets/portfolio/Restuarant-website.jpg";
// import chatroom from "../assets/portfolio/chatroom.jpg";
// import student from "../assets/portfolio/studentapp.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: portfolio,
      github: "https://github.com/amitkrmodak/Portfolio",
    },
    {
      id: 2,
      src: restuarant,
      github: "https://github.com/amitkrmodak/Restaurant-Website",
    },
    {
      id: 3,
      src: comingsoon,
      github: "",
    },
    {
      id: 4,
      src: comingsoon,
      github: "",
    },
    {
      id: 5,
      src: comingsoon,
      github: "",
    },
    {
      id: 6,
      src: comingsoon,
      github: "",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 pb-20 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <a href={github} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
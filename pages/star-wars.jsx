import React from "react";
import Image from "next/image";
import starWarsImg from "../public/assets/projects/starWarsAPI.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const starWars = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          clasName="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={starWarsImg}
          alt="/"
        />
        <div className="absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white">
          <h2 className="py-2">Star Wars Galaxy of Heroes API</h2>
          <h3>React / Node.js / Express</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="mt-4">
            This was a one day project. The goal of this project was to create
            web app that will have both back-end and front-end. I used Node.js /
            Express for back-end, I&#39;m using Star Wars Galaxy of Heroes API
            that fetches data directly from game in real time. I&#39;m doing two
            fetches, first fetching token that is needed to login into my
            account that enables me to get data from game and than second fetch
            that gets data for any player in the world depending on which ally
            code is inserted. I&#39;m than serving that data to front-end that
            displays it for end user. User is able to enter ally code and see
            data for any player in the world
          </p>
          <a href="https://github.com/PetarJovanovic/StarWarsGalaxyOfHeroesAPI.git">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                JavaScript
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default starWars;

import React from "react";
import propertyImg from "../public/assets/projects/activityKnot.jpg";
import cryptoImg from "../public/assets/projects/starWarsAPI.jpg";
import netflixImg from "../public/assets/projects/portfolioPage.jpg";
import twitchImg from "../public/assets/projects/todo.jpg";
import ProjectItem from "./ProjectItem";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-[100px] px-3">
      <div className="max-w-[1240px] mx-auto">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Activity Knot"
            description="Full CRUD JavaScript"
            backgroundImg={propertyImg}
            projectUrl="/activity-knot"
          />
          <ProjectItem
            title="Star Wars API"
            description="Full CRUD JavaScript"
            backgroundImg={cryptoImg}
            projectUrl="/star-wars"
          />
          <ProjectItem
            title="Portfolio Page"
            description="Next.js with Tailwind CSS"
            backgroundImg={netflixImg}
            projectUrl="/portfolio"
          />
          <ProjectItem
            title="To-Do List"
            description="React"
            backgroundImg={twitchImg}
            projectUrl="/todo"
          />
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;

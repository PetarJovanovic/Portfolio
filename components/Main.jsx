import React from "react";
import Image from "next/image";
import Link from "next/link";
import avatarImg from "../public/assets/AvatarCircle.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full pt-[7rem] text-center">
      <div className="m-width-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <Image
            className="py-4"
            src={avatarImg}
            alt="/"
            width="200"
            height="200"
          />
          <h2 className="py-4 text-gray-700">
            Hi I&#39;m <span className="text-[#5651e5]">Petar</span>
          </h2>
          <h2 className="py-2 text-gray-700">
            A Full-Stack JavaScript Developer
          </h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Skilled, responsible, accurate, innovative Web Developer with an eye
            for detail, with over 3 years of front-end experience and passion
            for responsive website design. Committed to helping users reach and
            exceed their business goals. Motivated, sociable and open-minded,
            easily adapts to different environments.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-[#5651e5]">
            <Link href="https://www.linkedin.com/in/petarj">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/PetarJovanovic">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            {/* <Link href={``}> */}
            <div
              onClick={() =>
                console.log((window.open = "mailto:petarj.no@gmail.com"))
              }
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <AiOutlineMail />
            </div>
            {/* </Link> */}
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

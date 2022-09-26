import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen px-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p2 className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p2>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>HTML</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/html.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>CSS</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/css.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>JavaScript</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/javascript.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>React</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>Next.js</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>Tailwind</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>Node.js</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>Express.js</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/express.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>MongoDB</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mongo.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>PostgreSQL</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/postgresql.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>TypeScript</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/typescript.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="flex flex-col justify-center items-center">
              <div className="pb-4">
                <h3>Github</h3>
              </div>
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github.png"
                  alt="/"
                  height="64"
                  width="64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

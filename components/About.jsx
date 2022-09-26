import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full lg:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Biography</h2>
          <p className="py-2 text-gray-600">
            Skilled, responsible, accurate, innovative Web Developer with an eye
            for detail, with over 3 years of front-end experience and passion
            for responsive website design. Committed to helping users reach and
            exceed their business goals. Motivated, sociable and open-minded,
            easily adapts to different environments.
          </p>
          <p className="py-2 text-gray-600">
            Skilled, responsible, accurate, innovative Web Developer with an eye
            for detail, with over 3 years of front-end experience and passion
            for responsive website design. Committed to helping users reach and
            exceed their business goals. Motivated, sociable and open-minded,
            easily adapts to different environments.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

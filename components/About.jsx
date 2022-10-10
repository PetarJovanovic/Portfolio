import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full pt-[100px] px-3 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Biography</h2>
          <p className="py-2 text-gray-600">
            Hi, my name is Petar. Since young age I was interested in computers
            and technology. I got my first PC when I was 7 years old, and that
            is when I felt in love with computers. In primary school I already
            knew what I wanted to learn and study in high school and faculty
            afterwards. I went to Electrotechnical High School Zajecar, Serbia.
            There I was introduced to C and C++ for the first time. I learned
            basics of programming and algorithms. As well as basics of
            electrotechnics.
          </p>
          <p className="py-2 text-gray-600">
            After High School I went to the University of Belgrade where I
            studied Informatics. I countinue learning C/C++ in much greater
            details as well as Data Structures and Algorithms. I got familiar
            with Computer Organization and Architecture. Then I got introduced
            to OOP and Web Development. At that point I realized what I want to
            do when I finish faculty. I learned and got experience with
            programming languages such as JavaScript, Java, PHP, C#. I continued
            exploring more about Web Development and learned as much as I could.
          </p>
          <p className="py-2 text-gray-600">
            I got chance to work with WordPress and create some smaller Web
            Projects for few startup companies in Belgrade. I learned very
            valuable lessons of how real world projects work and what it means
            to work on projects outside of faculty. This lead to job as Front
            End Developer for Switzerland company in Belgrade. Here I got
            experience working with React and really dive deeper into Front End.
            In December of 2018 I moved to Kirkenes, Norway and in May of 2021
            to Hønefoss, Norway. I continue practicing my skills as freelancer,
            until i got opportunity to work at Salt and broader my skillset even
            more.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
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

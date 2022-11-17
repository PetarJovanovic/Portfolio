import React from 'react';
import Image from 'next/image';
import portfolioImg from '../public/assets/projects/portfolioPage.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const portfolio = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image clasName='absolute z-1' layout='fill' objectFit='cover' src={portfolioImg} alt='/' />
        <div className='absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white'>
          <h2 className='py-2'>Portfolio Page</h2>
          <h3>Next.js / Tailwind CSS</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-4'>
            For portfolio project I decided to use Next.js and Tailwind CSS. Next.js makes routing
            within React very simple and Tailwind makes CSS very readable and easy to track and
            edit. Goal was to create readable and easy to maintain front-end project. It is deployed
            on Heroku and have CI/CD with GitHub.
          </p>
          <a href='https://github.com/PetarJovanovic/Portfolio.git'>
            <button className='px-8 py-2 mt-4 mr-8 hover:bg-black'>Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Heroku
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default portfolio;

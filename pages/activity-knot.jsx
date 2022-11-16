import React from 'react';
import Image from 'next/image';
import activityKnotImg from '../public/assets/projects/activityKnot.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const activityKnot = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image
          clasName='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={activityKnotImg}
          alt='/'
        />
        <div className='absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white'>
          <h2 className='py-2'>Activity Knot</h2>
          <h3>React / Node.js / Express / PostgreSQL</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-4'>
            This was a 2 week project that I worked on within group of 3 more people and it was part
            of mob programming and final project of bootcamp. Goal of this project was to creat full
            CRUD operations project and we used PERN stack. This was very challenging and fun
            project where we struggled but learned how to creat application from zero to full
            functional project. Main goal of our application is to connect people with similar
            interests to meet up and enjoy their hobbies together.
          </p>
          <a href='https://github.com/matildisnil/saltFinalProjectBackend.git'>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a href='https://activity-knot.herokuapp.com/'>
            <button className='px-8 py-2 mt-4 '>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Prime React CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Node.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                Express
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' />
                PostgreSQL
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

export default activityKnot;

import React from 'react';
import Image from 'next/image';
import todoImg from '../public/assets/projects/todo.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const todo = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[40vh] lg:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[40vh] lg:h-[50vh] bg-black/80 z-10' />
        <Image clasName='absolute z-1' layout='fill' objectFit='cover' src={todoImg} alt='/' />
        <div className='absolute z-10 p-2 top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white'>
          <h2 className='py-2'>To-Do List</h2>
          <h3>React</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p className='mt-4'>
            This project shows standard To-Do application with data stored in local storage. Goal of
            this project was to practice creating reusable components, which makes entire
            application easier to maintain and update over time.
          </p>
          <a href='https://github.com/PetarJovanovic/ToDoList.git'>
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
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
                JavaScript
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

export default todo;

import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../public/assets/petarj.png';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => (window.scrollY >= 90 ? setShadow(true) : setShadow(false));
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? 'fixed w-full h-24 shadow-xl z-[100] bg-[#ecf0f3] text-[#1f2937]'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 py-12 2xl:px-16'>
        <Link href='/'>
          <Image src={logoImg} alt='/' width='70' height='70' className='cursor-pointer' />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:font-bold hover:scale-125 ease-linear duration-200'>
                Home
              </li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:font-bold hover:scale-125 ease-linear duration-200'>
                About
              </li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:font-bold hover:scale-125 ease-linear duration-200'>
                Skills
              </li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:font-bold hover:scale-125 ease-linear duration-200'>
                Projects
              </li>
            </Link>
            {/* <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:font-bold hover:scale-125 ease-linear duration-200">
                Contact
              </li>
            </Link> */}
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-7 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-7 ease-in duration-500'
          }
        >
          <div className='flex w-full items-start justify-between'>
            <Link href='/'>
              <Image
                src={logoImg}
                alt='/'
                width='80'
                height='80'
                className='cursor-pointer'
                onClick={() => setNav(false)}
              />
            </Link>
            <div
              onClick={handleNav}
              className='rounded-full shadow-lg shadow-gary-400 p-3 cursor-pointer'
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='text-sm py-4'>Full-Stack JavaScript Developer</p>
          </div>

          <div className='flex flex-col'>
            <ul className='uppercase mb-8'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              {/* <Link href="/contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link> */}
            </ul>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              <a href='https://www.linkedin.com/in/petarj' target='_blank' rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>

              <a href='https://github.com/PetarJovanovic' target='_blank' rel='noreferrer'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>

              <a href='mailto:pecazajecar@gmail.com'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
              </a>

              {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

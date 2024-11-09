"use client";

import React, { useState } from 'react';
import Link from 'next/link';


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-custom-gradient flex justify-between md:items-center p-[20px] md:p-0 fixed w-full top-0 shadow-2xl z-10">
      <div className="ml-4 text-[#faf9f6]" id="logo">
        <Link href="/">
        <h1 className="font-serif text-[1.7rem] font-bold">Wasif Soomro</h1>
        </Link>
      </div>

      <div
        className="flex flex-col justify-between cursor-pointer w-[30px] h-[24px] mr-4 md:hidden"
        onClick={toggleMenu}
      >
        <span className="h-[3px] w-full bg-white transition-all"></span>
        <span className="h-[3px] w-full bg-white transition-all"></span>
        <span className="h-[3px] w-full bg-white transition-all"></span>
      </div>

      
      <nav
        className={`fixed top-0 right-0 h-full bg-[#418364]  w-[250px] p-8 transition-transform ${
          menuOpen ? 'translate-x-0 flex-row' : 'translate-x-full'
        } flex ${menuOpen ? 'flex-col gap-4 items-center' : 'flex-row'} md:static md:flex md:flex-row md:gap-[180px] md:h-auto md:w-auto md:bg-transparent md:translate-x-0`}
      >
        <div
          className="text-white cursor-pointer mr-44 mb-6 md:hidden hover:text-red-600"
          onClick={toggleMenu}
        >
          &#10005;
        </div>

        <Link
          href="/"
          className="text-white text-[1rem] mb-4 md:mb-0  md:mx-0 font-serif font-extrabold border-b-2 border-solid border-transparent transition-colors hover:scale-125"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="text-white text-[1rem] mb-4 md:mb-0  md:mx-0 font-serif font-extrabold border-b-2 border-solid border-transparent transition-colors hover:scale-125"
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="text-white text-[1rem] mb-4 md:mb-0  md:mx-0 font-serif font-extrabold border-b-2 border-solid border-transparent transition-colors hover:t hover:scale-125"
          onClick={toggleMenu}
        >
          About Me
        </Link>
        <Link
          href="/contact"
          className="text-white text-[1rem] mb-4 md:mb-0 md:mx-0 font-serif font-extrabold border-b-2 border-solid border-transparent transition-colors hover:scale-125"
          onClick={toggleMenu}
        >
          Contact Me
        </Link>
      </nav>
    </header>
  );
}
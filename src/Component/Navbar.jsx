// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full  mx-auto bg-white border-b 2xl:max-w-full">
      <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <Link to="/" className="text-lg tracking-tight text-white bg-lime-500 px-4 py-2 rounded-lg font-bold uppercase focus:outline-none focus:ring lg:text-2xl">
            <span className="lg:text-lg uppercase focus:ring-0">
              RentSwift
            </span>
          </Link>
          <button onClick={() => setOpen(!open)} className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden">
            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path className={open ? 'hidden' : 'inline-flex'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path className={open ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className={`flex-col items-center flex-grow ${open ? 'flex' : 'hidden'} md:pb-0 md:flex md:justify-end md:flex-row`}>
          <Link to="/about" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-green-600">
            About
          </Link>
          <Link to="/contact" className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-green-600">
            Contact
          </Link>
          <div className="hidden mx-10 md:block lg:ml-auto">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
  </span>
  <input
    type="text"
    className="w-full py-2 pl-4 pr-4 text-black bg-white border border-gray-200 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500 sm:text-sm rounded-xl placeholder:text-gray-400 focus:border-blue-500"
    placeholder="Search"
  />

          </div>
          <div className="inline-flex items-center gap-2 list-none">
          <Link to="/Login" className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
              Log in
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

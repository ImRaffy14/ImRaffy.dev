import { useState } from 'react';
import React from 'react';
import { Link } from 'react-scroll';


function Header({toggleLightMode, isLight}) {
  const [isOpen, setIsOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div className="fixed top-5 left-0 right-0 z-10">
      <div className={`mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-64 border-solid border-2 ${isLight ? 'border-zinc-700 bg-zinc-900 bg-opacity-80 text-white rounded-3xl' : 'border-zinc-700 bg-zinc-700 bg-opacity-90 text-white rounded-3xl'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-[60px;]">
            <div className="flex-shrink-0">
            <label className="ui-switch">
              <input type="checkbox" onChange={toggleLightMode}/>
              <div className="slider">
                <div className="circle"></div>
              </div>
            </label> 
            </div>
            <div className="flex-shrink-0">
            <Link
              to="section1"
              smooth={true}
              duration={500}
              spy={true}
            >
              <span className="text-xl btn btn-ghost font-russoOne">
              <span className="-ml-2 text-cyan-700">ImRaffy</span>
              <span className="-ml-2 text-red-600">.dev</span>
              </span>
              </Link>
            </div>

            <button className="text-white focus:outline-none btn btn-ghost btn-circle" onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
          </div>
        </div>
        {isOpen && (
          <div className="block bg-zinc-800 bg-opacity-95  rounded-2xl text-center">
            <ul>
            <Link
              to="section2"
              smooth={true}
              duration={500}
              spy={true}
            >
             <li className="block px-4 py-2 btn btn-ghost text-white" onClick={toggleMenu}>Skills </li>
            </Link>
              <a href="#" className="block px-4 py-2 btn btn-ghost text-white" onClick={toggleMenu}>Projects</a>
              <a href="#" className="block px-4 py-2 btn btn-ghost text-white" onClick={toggleMenu}>Certificates</a>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

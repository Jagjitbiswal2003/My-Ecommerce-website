import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Darkmode from "./Darkmode";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="w-screen h-[100px] shadow-md flex justify-between items-center px-4 md:px-8 lg:px-16">
        <div className="navi flex-1 flex justify-start md:justify-center">
          <ul className="hidden md:flex space-x-9">
            <li>
              <Link to="/" className="no-underline text-black text-lg">Home</Link>
            </li>
            <li>
              <Link to="/Products" className="no-underline text-black text-lg">Products</Link>
            </li>
            <li>
              <Link to="/About" className="no-underline text-black text-lg">About</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex space-x-5">
          <Link to="/Contact">
            <FontAwesomeIcon icon={faPhone} className="text-lg border-2 border-gray-500 rounded-full p-2 bg-gray-300 transition-transform hover:scale-125" />
          </Link>
          <Link to="/Signin">
            <FontAwesomeIcon icon={faUser} className="text-lg border-2 border-gray-500 rounded-full p-2 bg-gray-300 transition-transform hover:scale-125" />
          </Link>
        </div>
        <div className="md:hidden" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} className="text-2xl cursor-pointer px-2" />
        </div>
      </div>

      <div className={`fixed inset-0 z-10 flex justify-end md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="w-1/2 h-full bg-white shadow-lg p-6 flex flex-col items-center">
        <div className="absolute top-4 right-4 cursor-pointer" onClick={toggleNavbar}>
       <FontAwesomeIcon icon={faXmark} className="text-2xl text-black" />
       </div>
          <div className="flex flex-col items-center space-y-10 mt-20">
            <Link to="/" className="text-center text-lg text-black hover:scale-125 transition-transform">Home</Link>
            <Link to="/Products" className="text-center text-lg text-black hover:scale-125 transition-transform">Products</Link>
            <Link to="/About" className="text-center text-lg text-black hover:scale-125 transition-transform">About</Link>
            <div className="flex space-x-5 mt-5">
              <Link to="/Contact" className="text-lg text-black hover:scale-125 transition-transform">
                <FontAwesomeIcon icon={faPhone} />
              </Link>
              <Link to="/Signin" className="text-lg text-black hover:scale-125 transition-transform">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Darkmode/>
    </>
  );
}

export default Navbar;

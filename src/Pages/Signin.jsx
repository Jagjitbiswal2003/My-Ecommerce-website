import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import img1 from "../assets/Facebook1.png";
import img2 from "../assets/Googleimage.png";

import Navbar from '../Components/Navbar';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="signin-container flex justify-center items-center h-screen mt-20 md:mt-32 lg:mt-0">
        <div className="signin-box p-8 border border-gray-300 rounded-2xl shadow-md w-full max-w-md lg:mt-20 md:mt-32">
          <h2 className="mb-2 text-2xl text-gray-800 text-center">Create an account</h2>
          <form className="flex flex-col">
            <div className="mb-4">
              <input type="text" id="username" placeholder="Enter Your Username" required className="w-full p-3 border border-gray-300 rounded-md text-base" />
            </div>
            <div className="mb-4">
              <input type="email" id="email" placeholder="Enter Your Email" required className="w-full p-3 border border-gray-300 rounded-md text-base" />
            </div>
            <div className="mb-4">
              <input type="tel" id="phone" placeholder="Enter Your Phone Number" required className="w-full p-3 border border-gray-300 rounded-md text-base" />
            </div>
            <div className="input-group mb-4">
              <div className="password-wrapper relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter Your Password"
                  required
                  className="flex-1 p-3 border border-gray-300 rounded-md text-base"
                />
                <span className="toggle-password absolute right-3 cursor-pointer" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <button type="submit" className="p-3 bg-blue-600 text-white border-none rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-blue-800">Sign Up</button>
          </form>
          <div className="mt-4 text-center relative">
            <hr className="border-gray-300" />
            <span className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 bg-white px-2 text-sm text-gray-600">Or With</span>
          </div>
          <button className="my-icon mt-2 p-3 w-full bg-white border border-gray-300 rounded-md text-base cursor-pointer flex items-center justify-center">
            <img src={img1} alt="Facebook" className="mr-2 w-6 h-6" /> Signup with Facebook
          </button>
          <button className="my-icon mt-2 p-3 w-full bg-white border border-gray-300 rounded-md text-base cursor-pointer flex items-center justify-center">
            <img src={img2} alt="Google" className="mr-2 w-6 h-6" /> Signup with Google
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account?
              <Link to="/Login" className="text-blue-600 hover:underline"> Login</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

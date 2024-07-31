import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar/>
      <div className="signin-container flex justify-center items-center h-screen mt-20 md:mt-32 lg:mt-0">
        <div className="signin-box p-8 border border-gray-300 rounded-2xl shadow-md w-full max-w-md lg:mt-20 md:mt-32">
          <h2 className="mb-4 text-2xl text-gray-800 text-center">Log In</h2>
          <form className="flex flex-col">
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-base text-gray-800">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required className="w-full p-3 border border-gray-300 rounded-md text-base" />
            </div>
            <div className="input-group mb-4">
              <label htmlFor="password" className=" block mb-2 text-base text-gray-800">Password</label>
              <div className="password-wrapper relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  required
                  className="flex-1 p-3 border border-gray-300 rounded-md text-base"
                />
                <span className="toggle-password absolute right-3 cursor-pointer" onClick={togglePasswordVisibility}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </span>
              </div>
            </div>
            <button type="submit" className="p-3 bg-blue-600 text-white border-none rounded-md text-base cursor-pointer transition duration-300 ease-in-out hover:bg-blue-800">Log In</button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Don't have an account? <Link to="/Signin" className="text-blue-600 hover:underline">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;

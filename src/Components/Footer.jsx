import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="total flex flex-wrap w-full mt-[300px] bg-[#202647] p-5">

        <div className="contact flex-1 min-w-[200px] m-2">
          <h2 className="font-nunito tracking-[1px] text-white">Conect with Us</h2>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Linkedin</p>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Facebook</p>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Twitter</p>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Instagram</p>
        </div>

        <div className="knowus flex-1 min-w-[200px] m-2">
          <h2 className="font-nunito tracking-[1px] text-white">Get to Know Us</h2>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">About Us</p>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Blog</p>
        </div>

        <div className="feature flex-1 min-w-[200px] m-2">
          <h2 className="font-nunito tracking-[1px] text-white">Features</h2>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Ecommerce</p>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">POS</p>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Delivery</p>
        </div>

        <div className="help flex-1 min-w-[200px] m-2">
          <h2 className="font-nunito tracking-[1px] text-white">Help</h2>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Product Details</p>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">Signin</p>
          <p className="text-[1.1rem] text-[rgba(245,245,245,0.84)] py-1.5">ContactUs</p>
        </div>

        <div className="copyright w-full text-center text-white mt-5">
          <p><span>Created By Jagjit Biswal</span>&copy; 2024, All rights reserved!</p>
        </div>

        <div className="icon1 flex justify-center w-full mt-2.5">
          <FontAwesomeIcon icon={faLinkedinIn} className="mx-2.5 text-[1.3rem] text-white" />
          <FontAwesomeIcon icon={faTwitter} className="mx-2.5 text-[1.3rem] text-white" />
          <FontAwesomeIcon icon={faGithub} className="mx-2.5 text-[1.3rem] text-white" />
        </div>
      </div>
    </>
  );
};

export default Footer;

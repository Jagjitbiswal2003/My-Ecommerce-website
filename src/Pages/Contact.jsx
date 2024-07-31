import React from 'react';
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div>
      <Navbar />

      <div id="contact" className="px-5 py-5 max-w-5xl mx-auto text-gray-800 dark:text-white">
        <div className="my-6"></div>
        <p className="text-center font-serif text-lg font-medium text-black mb-10 px-5">
          Please feel free to reach out to me via the contact information provided below. Whether you have questions, inquiries, or simply want to connect, I'm always available to engage in meaningful discussions. Your feedback and input are highly valued and appreciated. Looking forward to hearing from you soon....
        </p>
        <div className="flex flex-wrap justify-between gap-5">
          <div className="flex-1 min-w-[300px] m-2">
            <div className="flex items-center mb-5">
              <div className="flex justify-center items-center text-lg mr-3 text-teal-500 w-9 h-9 border-2 border-teal-500 rounded-full">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="info">
                <h5 className="text-xl font-bold">Email:</h5>
                <p>
                  <a href="mailto:jagjitbiswal123@gmail.com" className="text-black font-medium no-underline hover:underline">
                    jagjitbiswal123@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center mb-5">
              <div className="flex justify-center items-center text-lg mr-3 text-teal-500 w-9 h-9 border-2 border-teal-500 rounded-full">
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
              <div className="info">
                <h5 className="text-xl font-bold">LinkedIn:</h5>
                <p>
                  <a href="https://linkedin.com/in/jagjitbiswal" className="text-black font-medium no-underline hover:underline">
                    My LinkedIn Profile..
                  </a>
                </p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="flex justify-center items-center text-lg mr-3 text-teal-500 w-9 h-9 border-2 border-teal-500 rounded-full">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div className="info">
                <h5 className="text-xl font-bold">Location:</h5>
                <p>Bhubaneswar, India</p>
              </div>
            </div>
            <div className="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239486.6672798155!2d85.65563581983349!3d20.301129051650506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1708286597033!5m2!1sen!2sin"
                width="100%" height="550" className="border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
          <div className="flex-1 min-w-[300px] m-2">
            <form action="" className="flex flex-col">
              <input type="text" name="name" id="name" placeholder="Your Name" className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base" />
              <input type="email" name="email" id="email" placeholder="Your Email" className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base" />
              <input type="text" name="subject" id="subject" placeholder="Subject" className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base" />
              <textarea name="msg" id="msg" rows="21" placeholder="Your Message" className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base mt-7"></textarea>
              <input type="submit" value="Send Message" className="w-full p-2 mb-4 border border-gray-300 rounded-md text-base bg-teal-500 text-white cursor-pointer hover:bg-teal-600 transition-colors duration-300" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

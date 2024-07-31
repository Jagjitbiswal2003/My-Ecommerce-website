import React from 'react';
import img1 from '../assets/bimg11.jpg';
import img2 from '../assets/bimg21.jpg';
import img4 from '../assets/bimg4.jpg';
import img5 from '../assets/bimg51.jpg';
import banner1 from '../assets/img1.jpg';
import banner2 from '../assets/img5.jpg';

const Animatedbanner = () => {
    return (
        <div className="w-full h-screen bg-gray-100 mt-10 border-4 border-whitesmoke rounded-lg sm:h-[80vh]">
            <div className="relative overflow-hidden h-1/2 border-b border-gray-300">
                <div className="absolute w-full h-full">
                    <img src={banner2} alt="Banner 2" className="absolute w-full h-full object-cover sm:hidden" />
                    <img src={banner1} alt="Banner 1" className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-2000 ease-in-out animate-fadeInOut1 hidden sm:block" />
                    <img src={banner2} alt="Banner 2" className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-2000 ease-in-out animate-fadeInOut2 hidden sm:block" />
                </div>
            </div>
            <div className="flex h-1/2">
                <div className="flex-1 relative overflow-hidden p-5 sm:p-2">
                    <div className="absolute w-full h-full">
                        <img src={img1} alt="Image 1" className="absolute w-full h-full object-cover sm:hidden" />
                        <img src={img1} alt="Image 1" className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-2000 ease-in-out animate-fadeInOut1 hidden sm:block" />
                        <img src={img2} alt="Image 2" className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-2000 ease-in-out animate-fadeInOut2 hidden sm:block" />
                    </div>
                </div>
                <div className="flex-1 relative overflow-hidden p-5 sm:p-2">
                    <div className="absolute w-full h-full">
                        <img src={img4} alt="Image 4" className="absolute w-full h-full object-cover sm:hidden" />
                        <img src={img4} alt="Image 4" className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-2000 ease-in-out animate-fadeInOut1 hidden sm:block" />
                        <img src={img5} alt="Image 5" className="absolute w-full h-full object-cover opacity-0 transition-opacity duration-2000 ease-in-out animate-fadeInOut2 hidden sm:block" />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Animatedbanner;

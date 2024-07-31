import React from 'react';
import Navbar from '../Components/Navbar';
import Emoji from '../assets/emoji2.jpeg';
import img1 from '../assets/pic-1.jpeg';
import img2 from '../assets/pic-3.jpg';
import img3 from '../assets/pic-5.jpg';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import AnimatedBanner from '../Components/AnimatedBanner';

const About = () => {
  return (
    <>
      <Navbar />
      <AnimatedBanner />

      {/* Emoji Section */}
      <div className="relative w-screen h-48 mt-44">
        <div className="flex justify-center items-center h-full">
          <img src={Emoji} alt="Emoji" className="w-36 h-36 rounded-full" />
        </div>
        <div className="relative mt-1 text-xl opacity-0 text-center transition-opacity duration-1200 animate-pop-out">
          Welcome to Our Website!
        </div>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 p-5 mt-10 mx-10">
        <div className="bg-yellow-500 p-5 rounded-lg text-center col-span-full xl:col-span-4">
          <h2 className="text-xl font-semibold">Welcome</h2>
          <p>Welcome to MyShop, where we believe in providing the best products and services to our valued customers. Our goal is to ensure that you receive the highest quality and exceptional service.</p>
        </div>
        <div className="bg-pink-500 p-5 rounded-lg text-center">
          <h2 className="text-lg font-semibold">About Website</h2>
          <p>Our website is dedicated to bringing you the latest and greatest in ecommerce solutions. We pride ourselves on offering a user-friendly interface and a seamless shopping experience.</p>
        </div>
        <div className="bg-cyan-500 p-5 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Features of Website</h2>
          <ul className="list-none p-0 m-0">
            <li>High-quality products</li>
            <li>Easy to navigate</li>
            <li>Secure payment methods</li>
            <li>Fast delivery</li>
            <li>24/7 customer support</li>
          </ul>
        </div>
        <div className="bg-teal-500 p-5 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Customer Service</h2>
          <ul className="list-none p-0 m-0">
            <li>24/7 support</li>
            <li>Live chat</li>
            <li>Email assistance</li>
            <li>Phone support</li>
            <li>Customer satisfaction guarantee</li>
          </ul>
        </div>
        <div className="bg-orange-500 p-5 rounded-lg text-center">
          <h2 className="text-lg font-semibold">About Product</h2>
          <p>Our products are sourced from the best suppliers and go through rigorous quality checks to ensure you get nothing but the best. We offer a wide range of products to cater to all your needs.</p>
        </div>
        <div className="bg-purple-500 p-5 rounded-lg text-center col-span-full xl:col-span-4">
          <h2 className="text-lg font-semibold">Stay Connected with Us</h2>
          <p>Stay connected with us through our social media channels and be the first to know about our latest offers and products.</p>
        </div>
      </div>

      <Card heading='Most Loved and Sell Products' />

      {/* Customer Reviews */}
<div className="customer-reviews p-10 rounded-lg mt-20 mx-5 shadow-lg bg-gray-100">
  <h2 className="text-center text-2xl mb-8">Customer Reviews</h2>
  <div className="flex flex-wrap gap-20 justify-center">
    <div className="w-72 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-white">
      <div className="w-full h-64 overflow-hidden rounded-t-lg flex justify-center items-center">
        <img src={img1} alt="Customer 1" className="w-4/5 h-auto rounded-full object-cover" />
      </div>
      <div className="p-5 text-center">
        <p className="cus-name text-lg font-semibold">William Harris</p>
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((star, index) => (
            <span key={index} className="text-yellow-500 text-lg">&#9733;</span>
          ))}
        </div>
        <p className="text-gray-700 italic">"Great products and excellent customer service! Will definitely shop again."</p>
      </div>
    </div>
    <div className="w-72 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-white">
      <div className="w-full h-64 overflow-hidden rounded-t-lg flex justify-center items-center">
        <img src={img2} alt="Customer 2" className="w-4/5 h-auto rounded-full object-cover" />
      </div>
      <div className="p-5 text-center">
        <p className="cus-name text-lg font-semibold">Olivia Martinez</p>
        <div className="flex justify-center mb-2">
          {[...Array(4)].map((star, index) => (
            <span key={index} className="text-yellow-500 text-lg">&#9733;</span>
          ))}
        </div>
        <p className="text-gray-700 italic">"Fast delivery and quality products. Highly recommended!"</p>
      </div>
    </div>
    <div className="w-72 rounded-lg shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl bg-white">
      <div className="w-full h-64 overflow-hidden rounded-t-lg flex justify-center items-center">
        <img src={img3} alt="Customer 3" className="w-4/5 h-auto rounded-full object-cover" />
      </div>
      <div className="p-5 text-center">
        <p className="cus-name text-lg font-semibold">Benjamin Foster</p>
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((star, index) => (
            <span key={index} className="text-yellow-500 text-lg">&#9733;</span>
          ))}
        </div>
        <p className="text-gray-700 italic">"Very satisfied with my purchase. The product exceeded my expectations."</p>
      </div>
    </div>
  </div>
</div>

      
      <Footer />
    </>
  );
};

export default About;

import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import img1 from '../assets/paypal.jpg';
import img2 from '../assets/mastercard.png';
import img3 from '../assets/visa1.png';
import img4 from '../assets/discover.png';

const Payment = () => {
  const location = useLocation();
  const { price, image, description } = location.state || {};

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-5 mt-8">
        <div className="text-center mb-20 p-2 w-[400px] h-[400px]">
          {image && <img src={image} alt="Product" className="w-[300px] h-[300px] mx-auto" />}
          <p>{description}</p>
          <p>Price: ${price}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-full max-w-[800px]">
          <div className="w-full md:w-[48%]">
            <h2 className="font-bold text-xl">Billing Address</h2>
            <form className="flex flex-col">
              <label className="font-bold mt-2">Full Name:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="" />

              <label className="font-bold mt-2">Email:</label>
              <input type="email" className="p-2 mt-1 border border-gray-300 rounded" placeholder="" />

              <label className="font-bold mt-2">Address:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="" />

              <label className="font-bold mt-2">City:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="" />

              <label className="font-bold mt-2">State:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="" />

              <label className="font-bold mt-2">Pin Code:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="" />
            </form>
          </div>
          <div className="w-full md:w-[48%] mt-5 md:mt-0">
            <h2 className="font-bold text-xl">Payment</h2>
            <form className="flex flex-col">
              <label className="font-bold mt-2">Cards Accepted:</label>
              <div className="flex justify-between mt-1">
                <img src={img1} alt="PayPal" className="max-h-[40px] mr-1" />
                <img src={img2} alt="MasterCard" className="max-h-[40px] mr-1" />
                <img src={img3} alt="Visa" className="max-h-[40px] mr-1" />
                <img src={img4} alt="Discover" className="max-h-[40px]" />
              </div>

              <label className="font-bold mt-2">Name On Card:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="Mr. Codehal" />

              <label className="font-bold mt-2">Credit Card Number:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="314212525" />

              <label className="font-bold mt-2">Expire Month:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="March" />

              <label className="font-bold mt-2">Expire Year:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="2027" />

              <label className="font-bold mt-2">CVV:</label>
              <input type="text" className="p-2 mt-1 border border-gray-300 rounded" placeholder="123" />
            </form>
          </div>
        </div>
        <button className="w-[40%] py-2 px-8 mt-5 bg-green-600 text-white border-none rounded cursor-pointer hover:bg-green-700">
          Payment
        </button>
      </div>
    </>
  );
};

export default Payment;

import React from 'react';
import img1 from '../assets/airdopes1.jpg';
import img2 from '../assets/airdopes2.jpg';
import img3 from '../assets/airdopes3.jpg';
import img4 from '../assets/watch1.jpg';
import img5 from '../assets/watch2.jpg';
import img6 from '../assets/watch3.jpg';
import img7 from '../assets/jeans1.jpg';
import img8 from '../assets/jeans2.jpg';
import img9 from '../assets/jeans3.jpg';
import img10 from '../assets/tshirt-1.jpg';
import img11 from '../assets/tshirt-2.jpg';
import img12 from '../assets/tshirt-3.jpg';
import img13 from '../assets/earphone1.jpg';
import img14 from '../assets/earphone2.jpg';
import img15 from '../assets/earphone3.jpg';

const products = [
  { src: img1, alt: 'Airdopes 1', name: 'Airdopes 111', category: 'Airdopes', price: '₹850.00', originalPrice: '₹1,200.00' },
  { src: img2, alt: 'Airdopes 2', name: 'Airdopes 115', category: 'Airdopes', price: '₹599.00', originalPrice: '₹1,500.00' },
  { src: img3, alt: 'Airdopes 3', name: 'boAt Airdopes', category: 'Airdopes', price: '₹499.00', originalPrice: '₹800.00' },
  { src: img4, alt: 'Watch 1', name: 'Cosmos pro', category: 'Watches', price: '₹999.00', originalPrice: '₹5,999.00' },
  { src: img5, alt: 'Watch 2', name: 'Storm pro', category: 'Watches', price: '₹1,999.00', originalPrice: '₹4,954.00' },
  { src: img6, alt: 'Watch 3', name: 'boAt Storm', category: 'Watches', price: '₹599.00', originalPrice: '₹1,000.00' },
  { src: img7, alt: 'Jeans 1', name: 'Stylish Jeans', category: 'Jeans', price: '₹1,299.00', originalPrice: '₹2,000.00' },
  { src: img8, alt: 'Jeans 2', name: 'Classic Jeans', category: 'Jeans', price: '₹1,499.00', originalPrice: '₹2,500.00' },
  { src: img9, alt: 'Jeans 3', name: 'Fade Jeans', category: 'Jeans', price: '₹1,999.00', originalPrice: '₹3,000.00' },
  { src: img10, alt: 'T-Shirt 1', name: 'Casual T-Shirt', category: 'T-Shirts', price: '₹599.00', originalPrice: '₹999.00' },
  { src: img11, alt: 'T-Shirt 2', name: 'Sporty T-Shirt', category: 'T-Shirts', price: '₹799.00', originalPrice: '₹1,200.00' },
  { src: img12, alt: 'T-Shirt 3', name: 'Formal T-Shirt', category: 'T-Shirts', price: '₹999.00', originalPrice: '₹1,500.00' },
  { src: img13, alt: 'Earphone 1', name: 'Wireless Earphone', category: 'Earphones', price: '₹1,299.00', originalPrice: '₹2,000.00' },
  { src: img14, alt: 'In-Ear Earphone', name: 'In-Ear Earphone', category: 'Earphones', price: '₹999.00', originalPrice: '₹1,500.00' },
  { src: img15, alt: 'Bluetooth Earphone', name: 'Bluetooth Earphone', category: 'Earphones', price: '₹1,799.00', originalPrice: '₹2,500.00' },
];

const Topproducts = () => {
  return (
    <div className="w-[100%] mx-auto py-5">
      {['Airdopes', 'Watches', 'Jeans', 'T-Shirts', 'Earphones'].map((category, index) => (
        <div key={index}>
          <div className="text-left mt-38 mb-2">
            <h2 className="text-2xl font-semibold py-5 ml-7">{category} Collection</h2>
          </div>
          <div className="flex flex-wrap gap-7 justify-center">
            {products.filter(product => product.category === category).map((product, index) => (
              <div key={index} className="bg-white border border-gray-300 rounded-lg p-5 text-center transition-shadow duration-300 ease-in-out hover:shadow-lg w-[48%] sm:w-[30%] lg:w-[23%]">
                <img src={product.src} alt={product.alt} className="w-full h-auto rounded-lg mb-3" />
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-red-600 font-bold mb-2">
                  {product.price} <span className="line-through text-gray-600">{product.originalPrice}</span>
                </p>
                <button className="px-4 py-2 bg-red-600 text-white rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-red-800">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Topproducts;

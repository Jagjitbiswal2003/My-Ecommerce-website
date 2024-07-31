import React from 'react';
import img1 from '../assets/airdopes1.jpg';
import img2 from '../assets/tshirt-2.jpg';
import img3 from '../assets/tshirt-1.jpg';
import img4 from '../assets/watch1.jpg';
import img5 from '../assets/earphone2.jpg';
import img6 from '../assets/jeans3.jpg';

const images = [
  { src: img1, alt: 'Airdopes', title: 'Airdopes', description: 'Experience immersive sound quality with our latest airdopes, offering noise cancellation and long battery life.' },
  { src: img2, alt: 'Full Sleeve T-shirt', title: 'Full Sleeve T-shirt', description: 'Stay stylish and comfortable with our premium full sleeve t-shirt, crafted from soft, breathable fabric.' },
  { src: img3, alt: 'T-shirt', title: 'T-shirt', description: 'Comfortable and stylish t-shirts available in a variety of colors and sizes. Perfect for any occasion.it offers contemporary design.' },
  { src: img4, alt: 'Watch', title: 'Watch', description: 'Stay punctual and fashionable with our sleek and modern watches, designed for every wrist and looking great.' },
  { src: img5, alt: 'Earphones', title: 'Earphones', description: 'High-quality earphones with superior sound and comfort, ideal for music lovers on the go.Perfect for music lovers.' },
  { src: img6, alt: 'Jeans', title: 'Jeans', description: 'Experience ultimate comfort and style with our latest jeans, designed with durable fabric and a modern fit.' },
];

const Card = ({ heading }) => {
  return (
    <div className="flex flex-col items-center p-[90px]">
      <h2 className="flex mt-[70px] text-2xl font-nunito font-normal">
        {heading}
      </h2>
      <div className="flex justify-center flex-wrap mb-[20px] gap-[40px]">
        {images.slice(0, 3).map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md m-[10px] text-center max-w-[250px]">
            <img src={image.src} alt={image.alt} className="w-full rounded-t-lg" />
            <h3 className="my-[15px] text-[1.2rem] text-black-800">{image.title}</h3>
            <p className="px-[15px] text-gray-600 text-[0.9rem]">{image.description}</p>
            <button className="bg-blue-500 text-white rounded-md py-[8px] px-[16px] my-[15px] transition duration-300 ease-in-out hover:bg-blue-700">View More</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap mb-[20px] gap-[40px]">
        {images.slice(3, 6).map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md m-[10px] text-center max-w-[250px]">
            <img src={image.src} alt={image.alt} className="w-full rounded-t-lg" />
            <h3 className="my-[15px] text-[1.2rem] text-black-800">{image.title}</h3>
            <p className="px-[15px] text-gray-600 text-[0.9rem]">{image.description}</p>
            <button className="bg-blue-500 text-white rounded-md py-[8px] px-[16px] my-[15px] transition duration-300 ease-in-out hover:bg-blue-700">View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;

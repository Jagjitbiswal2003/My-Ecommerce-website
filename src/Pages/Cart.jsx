import React, { useEffect, useState } from 'react';

const Cart = ({ count }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedItems);
  }, []);

  const removeFromCart = (index) => {
    let storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    storedItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(storedItems));
    setCartItems(storedItems);
  };

  return (
    <div>
      <div className=" cart-page p-8 bg-gray-50 rounded-lg mx-auto my-8 max-w-3xl shadow-lg">
        <h2 className="text-center mb-4 text-xl">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-600">Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b border-gray-300 py-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1 ml-4">
                <h3 className="text-base">{item.title}</h3>
                <p className="my-2 text-gray-600">${item.price}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Cart;

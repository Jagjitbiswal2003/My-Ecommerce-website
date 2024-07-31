import React, { useState, useEffect, useReducer } from 'react';
import Navbar from '../Components/Navbar';
import "./Products.css"
import { getProducts, getProductsByCategory } from '../Service/Services';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const initialState = {
  products: [],
  filteredProducts: [],
  searchQuery: '',
  selectedCategory: 'All',
  sortOrder: 'none',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload, filteredProducts: action.payload };
    case 'SET_SEARCH_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.payload };
    case 'FILTER_PRODUCTS':
      return { ...state, filteredProducts: action.payload };
    case 'SET_SORT_ORDER':
      return { ...state, sortOrder: action.payload };
    default:
      return state;
  }
};

const Products = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartCount(cartItems.length);
  };

  const addToCart = (product) => {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = state.selectedCategory === 'All'
          ? await getProducts()
          : await getProductsByCategory(state.selectedCategory);
        dispatch({ type: 'SET_PRODUCTS', payload: products });
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchProducts();
    updateCartCount();
  }, [state.selectedCategory]);

  useEffect(() => {
    let filtered = state.products;

    if (state.searchQuery) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    }

    if (state.sortOrder === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortOrder === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    dispatch({ type: 'FILTER_PRODUCTS', payload: filtered });
  }, [state.searchQuery, state.products, state.sortOrder]);

  return (
    <>
      <Navbar />

        <div className='image-icon'>
     <Link to="/Cart" className="cart-icon carty absolute right-[9em] top-[1.4rem] md:right-[4rem] md:top-[8.5rem] xs:left-[2rem] xs:top-[4rem]">
      <FontAwesomeIcon icon={faCartShopping} className="text-teal-800 text-[30px] xs:text-[35px]" />
     </Link>
  <span className=" cart-count absolute right-[17.5em] top-[1.8rem] min-w-[19px] text-center bg-red-600 text-white font-bold rounded-full md:right-[3.5rem] md:top-[8rem]">
    {cartCount}
  </span>
   </div>

      <div className="search-bar flex justify-center items-center relative mt-6 mb-5 w-full md:w-[60%]">
        <input
          type="text"
          placeholder="Search..."
          value={state.searchQuery}
          onChange={e => dispatch({ type: 'SET_SEARCH_QUERY', payload: e.target.value })}
          className="w-full pl-5 py-2.5 border border-gray-300 rounded-full text-lg"
        />
        <button className="search-icon absolute right-3 bg-none border-none cursor-pointer text-gray-600 text-xl">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>

      

      <div className="flex px-5 mt-10 flex-col md:flex-row">
        <div className="w-full  md:w-1/4  p-5 border border-gray-300 bg-white shadow-md rounded-lg h-full md:sticky md:top-[8%]">
          <div className="category-selection1 text-center pb-5">
            <h2 className="text-lg font-semibold">Categories</h2>
          </div>
          <div className=" cat flex flex-col items-start md:items-center md:w-full md:mb-5">
            {['All', "men's clothing", 'jewelery', 'electronics', "women's clothing"].map(category => (
              <label key={category} className="mb-5 text-base text-gray-800 font-nunito">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={state.selectedCategory === category}
                  onChange={e => dispatch({ type: 'SET_SELECTED_CATEGORY', payload: e.target.value })}
                  className=""
                />
                
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
              
            ))}
          </div>
          <div className="cat w-full flex flex-col items-center mt-5">
            <label className="w-full">
              <select
                value={state.sortOrder}
                onChange={e => dispatch({ type: 'SET_SORT_ORDER', payload: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-lg"
              >
                <option value="none">Sort By</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </label>
          </div>
        </div>

        <div className="w-full md:w-3/4 p-5 grid grid-cols-1 gap-5 mt-5 md:mt-0 md:grid-cols-2">
          {state.filteredProducts.map(product => (
            <div key={product.id} className="bg-white border border-gray-300 rounded-lg p-5 flex flex-col items-center transition-transform duration-300 transform hover:-translate-y-2 shadow-md">
              <img src={product.image} alt={product.title} className="w-full h-52 object-contain rounded-lg mb-5" />
              <h2 className="text-lg text-gray-800 text-center min-h-[50px] mb-3">{product.title}</h2>
              <p className="text-lg text-gray-600 mb-5">${product.price}</p>
              <div className="flex gap-2">
                <button onClick={() => addToCart(product)} className="bg-red-600 text-white px-5 py-2 rounded-full transition-colors duration-300 hover:bg-red-500">
                  Add to Cart
                </button>
                <Link to='/Payment' state={{ price: product.price, image: product.image, description: product.title }}>
                  <button className="bg-red-600 text-white px-5 py-2 rounded-full transition-colors duration-300 hover:bg-red-500">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Function to fetch all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

// Function to fetch categories from the products list
export const getCategories = async () => {
  try {
    const products = await getProducts();
    const categories = [...new Set(products.map(product => product.category))];
    return categories;
  } catch (error) {
    console.error('Error fetching categories', error);
    throw error;
  }
};

// Function to fetch products by category
export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    const products = response.data;
    if (category === 'All') {
      return products;
    } else {
      return products.filter(product => product.category === category);
    }
  } catch (error) {
    console.error('Error fetching products by category', error);
    throw error;
  }
};

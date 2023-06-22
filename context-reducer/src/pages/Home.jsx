import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Cartcontext } from '../store/Context';

const URL = 'https://fakestoreapi.com/products/';
const Home = () => {
  const [product, setProduct] = useState([]);
  const fetchProduct = async () => {
    const response = await axios.get(URL);
    setProduct(response.data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const GlobalState = useContext(Cartcontext);

  const dispatch = GlobalState.dispatch;

  return (
    <div className="container mx-auto mt-5">
      <div className="flex gap-5 flex-wrap">
        {product.map((item, index) => {
          item.quantity = 1;
          return (
            <div key={index} className="w-[200px]">
              <img src={item.image} alt={item.title} className="w-[100px]" />
              <p>{item.title}</p>
              <p className="text-purple-500">${item.price}</p>
              <p>{item.category}</p>
              <button
                className="bg-purple-600 py-1 px-2 text-white mt-3 rounded-md"
                onClick={() => dispatch({ type: 'ADD', payload: item })}
              >
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from 'react';
import "./men.scss"
import axios from 'axios';
import { LiaTelegramPlane } from 'react-icons/lia';
import { FaRegHeart } from 'react-icons/fa';

export default function Women() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); 
  

  useEffect(() => {
    axios
      .get('https://6499741f79fbe9bcf83f4854.mockapi.io/clothes') // Replace with your API URL
      .then((response) => {
        // Filter products by gender: "female"
        const femaleProducts = response.data.filter((product) => product.gender === "male");
        setProducts(femaleProducts);
      })
      .catch((error) => {
        console.error('Error loading data:', error);
      });
  }, []);

  const handleAddToFavorite = (productId) => {
    // Implement your logic for adding to favorites here
  };

  const handleAddToCart = (productId) => {
    // Implement your logic for adding to the cart here
  };
  const sortProducts = () => {
    const sortedProducts = [...products];
    if (sortOrder === 'asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  // Handle sorting order change
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    sortProducts();
  };

  return (
    <div className="container2">
      <h1 className="onn">
        <span className="best">Best Selling Products for Men</span>
      </h1>
      <div className="cat">
        <div className="ll">
        <p>Number of men's products: {products.length}</p>
        <select value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Сортировать по цене (по возрастанию)</option>
            <option value="desc">Сортировать по цене (по убыванию)</option>
          </select>
          </div>
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="product-image">
                <img src={product.img} alt={product.name} />
                {product.sale && <span className="sale-label">Sale</span>}
              </div>
              <h2>{product.name}</h2>
              <p>Color: {product.color}</p>
          
              <p>{product.description}</p>
              <p>Price: {product.price} руб.</p>
              <div className="product-buttons">
                <button
                  onClick={() => handleAddToFavorite(product.id)}
                  className="favorite-button"
                >
                  <FaRegHeart className="heart" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="subscribee">
        <div className="texter">
          <h1 className="su">Sign up now & get 10% off</h1>
          <p className="loremth">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
          <input className="inpput" type="text" placeholder="Enter your email address" />
          <button>
            <LiaTelegramPlane className="lia" />
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </div>
  );
}


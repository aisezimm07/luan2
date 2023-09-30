// ProductDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProductDetail({ match }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productId = match.params.productId;
    axios.get(`https://6499741f79fbe9bcf83f4854.mockapi.io/clothes/${productId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error loading product details:', error);
      });
  }, [match.params.productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail-container">
      <h1>{product.name}</h1>
      <div className="product-detail">
        <img src={product.img} alt={product.name} />
        <div className="product-info">
          <p>Color: {product.color}</p>
          <p>{product.description}</p>
          <p>Price: {product.price} руб.</p>
          {/* Добавьте другие детали товара */}
        </div>
      </div>
    </div>
  );
}

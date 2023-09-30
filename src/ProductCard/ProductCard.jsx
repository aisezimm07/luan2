import React from 'react';
import { Link } from 'react-router-dom'; // Импортируйте Link
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <Link to={`/product/${product.id}`}>
        {/* Ссылка на страницу с подробной информацией о товаре */}
        <img className='product-image' src={product.imageUrl} alt={product.name} />
        <h3 className='product-name'>{product.name}</h3>
        <p className='product-description'>{product.description}</p>
        <p className='product-price'>${product.price}</p>
      </Link>
    </div>
  );
}
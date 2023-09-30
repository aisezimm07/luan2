import React from 'react';
import { useSelector } from 'react-redux'; 
import "./style.css";

export default function Favorites() { 
    const favorites = useSelector((state) => state.favorites); 
  
    return (
      <div>
        <h1>Избранные товары</h1>
        <ul>
          {favorites.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
      </div>
    );
  }
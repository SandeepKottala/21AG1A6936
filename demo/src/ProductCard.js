import React from 'react';
import './ProductCard.css'; // Import the CSS file

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Render product details here */}
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;

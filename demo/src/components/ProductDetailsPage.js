import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.uniqueId === id);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}</p>
      <p>Availability: {product.availability}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default ProductDetailsPage;

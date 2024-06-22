import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';
import Filter from '../Filter';
import './AllProductsPage.css';// Import the CSS file

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(response => {
        const productsWithId = response.data.map((product, index) => ({
          ...product,
          uniqueId: `${product.company}-${product.id}`
        }));
        setProducts(productsWithId);
        setFilteredProducts(productsWithId);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleFilter = (filterCriteria) => {
    // Implement filtering logic based on criteria
  };

  return (
    <div className="all-products-page">
      <Filter onFilter={handleFilter} className="filter" />
      <div className="product-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.uniqueId} product={product} className="product-card" />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;

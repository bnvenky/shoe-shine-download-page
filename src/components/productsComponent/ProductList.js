/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import './productList.css';
import ProductFilter from './ProductFilter';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://mrv1.indianwelfarefoundation.org.in/products')
      .then(response => {
        const data = response.data;
        if (Array.isArray(data)) {
          setProducts(data);
          setFilteredProducts(data);
          const uniqueCategories = [...new Set(data.map(product => product.productCategory))];
          setCategories(uniqueCategories);
        } else {
          console.error('Unexpected response structure:', data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const savedSortOrder = localStorage.getItem('sortOrder');
    if (savedSortOrder) {
      setSortOrder(savedSortOrder);
      handleSort({ target: { value: savedSortOrder } });
    }
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      let filteredProducts = products;
      if (!isNaN(value)) {
        filteredProducts = products.filter(product => product.id === parseInt(value));
      } else {
        filteredProducts = products.filter(product => product.productName.toLowerCase().includes(value.toLowerCase()));
      }

      if (filteredProducts.length === 0) {
        setFilteredProducts([{ id: 0, productName: "Product not available", productPrice: "", productDescription: "" }]);
      } else {
        setFilteredProducts(filteredProducts);
      }
    } else {
      setFilteredProducts(products);
    }
  };

  const handleCategorySelect = (productCategory) => {
    setSelectedCategory(productCategory);
    filterProducts(searchTerm, productCategory);
  };

  const filterProducts = (searchTerm, productCategory) => {
    let filteredProducts = products;
    if (searchTerm) {
      if (!isNaN(searchTerm)) {
        filteredProducts = products.filter(product => product.id === parseInt(searchTerm));
      } else {
        filteredProducts = filteredProducts.filter(product => product.productName.toLowerCase().includes(searchTerm.toLowerCase()));
      }
    }
    if (productCategory) {
      filteredProducts = filteredProducts.filter(product => product.productCategory === productCategory);
    }
    if (filteredProducts.length === 0) {
      setFilteredProducts([{ id: 0, productName: "Product not available", productPrice: "", productDescription: "" }]);
    } else {
      setFilteredProducts(filteredProducts);
    }
  };

  const handleSort = (event) => {
    const value = event.target.value;
    setSortOrder(value);
    localStorage.setItem('sortOrder', value);

    let sortedProducts = [...filteredProducts];
    if (value === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.productPrice - b.productPrice);
    } else if (value === 'highToLow') {
      sortedProducts.sort((a, b) => b.productPrice - a.productPrice);
    }

    setFilteredProducts(sortedProducts);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSortOrder('');
    setSelectedCategory('');
    setFilteredProducts(products);
  };

  return (
    <div className='fluid-container products-container p-5'>
      <div className='filters-container'>
        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={handleFilter}
          className="search-input"
        />
        <select onChange={handleSort} value={sortOrder} className="sort-dropdown">
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
        <button onClick={clearFilters} className="clear-filters-button">Clear Filters</button>
      </div>
      <div className="categories-container">
        {categories.map(category => (
          <button key={category} onClick={() => handleCategorySelect(category)} className={`category-button ${category === selectedCategory ? 'selected' : ''}`}>
            {category}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#007BFF" loading={loading} size={50} />
        </div>
      ) : (
        <ProductFilter filteredProducts={filteredProducts}  />
      )}
    </div>
  );
};

export default ProductList;

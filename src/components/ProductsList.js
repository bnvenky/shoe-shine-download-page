import React from 'react';
import Slide from 'react-reveal/Slide';
import './ProductsList.css';

const products = [
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
];

const ProductsList = () => {
  return (
    <div className="fluid-container product-container pb-4">
      <Slide bottom>
        <div className='p-5'>
        <h4 className="section-title">Our Products</h4>
        </div>
        
      </Slide>
      <div className="carousel-container-product">
        <div className="carousel-product">
          {products.map((product, index) => (
            <Slide bottom delay={index * 200} key={index}>
              <img src={product.image} className="product-image" alt={product.name} />
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

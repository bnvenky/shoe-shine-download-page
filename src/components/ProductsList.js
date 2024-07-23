import React from 'react';
import Slide from 'react-reveal/Slide';
import '../styles/downloadPage.css';

const products = [
  { name: 'Shoe Brush', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Shoe Brush', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Shoe Brush', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Shoe Brush', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Shoe Brush', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
  { name: 'Shoe Brush', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg' },
];

const ProductsList = () => {
  return (
    <div className="container">
      <Slide bottom>
        <h4 className="section-title">Our Products</h4>
      </Slide>
      <div className="carousel-container">
        <div className="carousel">
          {products.map((product, index) => (
            <Slide bottom delay={index * 200} key={index}>
              <div className="card product-card">
                <img src={product.image} className="card-img-top" alt={product.name} />
              </div>
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

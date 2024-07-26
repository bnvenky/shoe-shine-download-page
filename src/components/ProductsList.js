import React from 'react';
import Slide from 'react-reveal/Slide';
import './ProductsList.css';

const products = [
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885375/close-up-futuristic-sneakers_23-2151005740_zykb7c.avif' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885374/close-up-futuristic-sneakers_23-2151005666_umjlh3.avif' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885374/close-up-futuristic-sneakers-presentation_23-2151005714_qva4cy.avif' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885375/close-up-futuristic-sneakers_23-2151005732_okqdqr.avif' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885374/close-up-futuristic-sneakers-showcase_23-2151005686_s8nbtl.avif' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885374/men-shoes_1203-8440_z9ppfw.avif' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885374/view-soccer-shoes_23-2150887400_kyuvzp.avif' },
  { name: 'Product name', image: 'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885375/gym-composition-with-sport-elements_23-2147915643_y9hpzr.avif' },
];

const ProductsList = () => {
  return (
    <div className="fluid-container product-container pb-4">
      <Slide bottom>
        <div className="p-5">
          <h4 className="section-title">Our Products</h4>
        </div>
      </Slide>
      <div className="carousel-container-products">
        <div className="carousel-products">
          {products.concat(products).map((product, index) => (
            <Slide bottom delay={index * 200} key={index}>
              <img src={product.image} className="products-image" alt={product.name} />
            </Slide>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;

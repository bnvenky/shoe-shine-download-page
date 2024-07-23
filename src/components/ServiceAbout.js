import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/downloadPage.css';

const images = [
  'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg',
  'https://res.cloudinary.com/dhik9tnvf/image/upload/v1715775194/beautiful-gift-voucher-with-decoration_23-2149243913_dv3w0l.jpg',
  'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg',
  'https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg'
];

const ServiceAbout = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container service-about">
      <div className="row">
        <div className="col-md-6 text-content">
          <Fade bottom>
            <div className="text-block">
              <h4>Our Service</h4>
              <p>
                At Shoe Shine, we provide top-notch shoe care services to keep your footwear looking new and polished. From cleaning and polishing to repairs and customizations, we handle it all with the utmost care and professionalism.
              </p>
            </div>
          </Fade>
          <Fade bottom>
            <div className="text-block">
              <h4>About Us</h4>
              <p>
                Shoe Shine was established with a mission to provide exceptional shoe care services. Our team of experts is dedicated to delivering quality and satisfaction to our customers. We believe in the importance of maintaining the appearance and longevity of your footwear.
              </p>
            </div>
          </Fade>
        </div>
        <div className="col-md-6 image-content">
          <Fade bottom>
            <div className="image-slider">
              <img src={images[currentImage]} alt="Sliding" className="img-fluid" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ServiceAbout;

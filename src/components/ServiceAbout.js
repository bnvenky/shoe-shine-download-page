import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import './ServiceAbout.css';



const images = [
  'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721887539/male-shoes-wooden-background_1016228-25503_tr1pbz.jpg',
  'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721887543/mature-shoemaker-workshop-making-shoes_171337-12261_nw8j2i.avif',
  'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721887540/concentrated-shoemaker-workshop-making-shoes_171337-12293_mnpfy7.avif',
  'https://res.cloudinary.com/dhik9tnvf/image/upload/v1721887544/mature-shoemaker-workshop-making-shoes_171337-12240_dun3dv.avif'
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
    
    
    <div className="fluid-container service-about p-5 bg-light">
      <div className="row">
      <div className="col-md-6 image-content">
          <Fade bottom>
            <div className="image-slider">
              <img src={images[currentImage]} alt="Sliding" className="img-fluid" />
            </div>
          </Fade>
        </div>
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
        
      </div>
    </div>
  
  );
};

export default ServiceAbout;

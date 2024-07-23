import React from 'react';
import Fade from 'react-reveal/Fade';
import '../styles/downloadPage.css';

const ServiceAbout = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mb-4">
          <Fade bottom>
            <div className="card custom-card">
              <div className="card-body">
                <h4 className="card-title">Our Service</h4>
                <p className="card-text">
                  At Shoe Shine, we provide top-notch shoe care services to keep your footwear looking new and polished. From cleaning and polishing to repairs and customizations, we handle it all with the utmost care and professionalism.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="col-12 mb-4">
          <Fade bottom>
            <div className="card custom-card">
              <div className="card-body">
                <h4 className="card-title">About Us</h4>
                <p className="card-text">
                  Shoe Shine was established with a mission to provide exceptional shoe care services. Our team of experts is dedicated to delivering quality and satisfaction to our customers. We believe in the importance of maintaining the appearance and longevity of your footwear.
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ServiceAbout;

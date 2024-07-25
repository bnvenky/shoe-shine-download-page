import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './IntroComponent.css';
import DownloadButton from './DownloadButton';

const IntroComponent = () => {
  return (
    <Container fluid className="chart-intro-container p-5">
      <Row className="align-items-center">
        <Col md={6} className="text-content">
          <h6>
            Let's Go
          </h6>
          <h1>
            Shoe Shine
          </h1>
          <p>
          At Shoe Shine, we provide top-notch shoe care services to keep your footwear looking new and polished. From cleaning and polishing to repairs and customizations, we handle it all with the utmost care and professionalism.
          </p>
          <div className="button-container">
            <DownloadButton />
          </div>
        </Col>
        <Col md={6} className="image-content">
          <Carousel>
            <Carousel.Item>
              <img
                src="https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885374/men-shoes_1203-8440_z9ppfw.avif"
                alt="Shoes"
                className="d-block w-100"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885375/view-soccer-shoes_23-2150887398_h7au8t.avif"
                alt="Shoes"
                className="d-block w-100"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="https://res.cloudinary.com/dhik9tnvf/image/upload/v1721885375/leather-shoes-wooden-background_1203-7618_f074dc.avif"
                alt="Shoes"
                className="d-block w-100"
              />
            </Carousel.Item>
            {/* Add more Carousel.Items here if needed */}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default IntroComponent;

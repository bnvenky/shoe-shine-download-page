import React from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import './IntroComponent.css';
import DownloadButton from './DownloadButton';

const IntroComponent = () => {
  return (
    
    <Container fluid className="chart-intro-container p-5">
      <Row className="align-items-center">
        <Col md={6} className="text-content">
          <h6>APEXCHARTS.JS</h6>
          <h1>Shoe Shine</h1>
          <p>
            Charts is an open-source modern charting library that helps developers to create beautiful and interactive visualizations for web pages.
          </p>
          <div className="button-container">
            <DownloadButton />
          </div>
        </Col>
        <Col md={6} className="image-content">
          <img src="https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg" alt="Charts" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  
  );
};

export default IntroComponent;

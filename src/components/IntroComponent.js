import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './IntroComponent.css';
import DownloadButton from './DownloadButton';

const IntroComponent = () => {
  return (
    <Container fluid className="chart-intro-container p-5">
      <Row className="align-items-center">
        <Col md={6} className="text-content">
          <motion.h6
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            APEXCHARTS.JS
          </motion.h6>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Shoe Shine
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Charts is an open-source modern charting library that helps developers to create beautiful and interactive visualizations for web pages.
          </motion.p>
          <div className="button-container">
            <DownloadButton />
          </div>
        </Col>
        <Col md={6} className="image-content">
          <motion.img
            src="https://res.cloudinary.com/dhik9tnvf/image/upload/v1720083323/240_F_701399184_3Y4KG1r01CjNuJ7tI5IU2Friq7u0EqKs_oqojb8.jpg"
            alt="Charts"
            className="img-fluid"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default IntroComponent;

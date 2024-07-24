import React from 'react';

import ProductsList from '../components/ProductsList';
import ServiceAbout from '../components/ServiceAbout';
import IntroComponent from '../components/IntroComponent';
import '../styles/downloadPage.css';

const DownloadPage = () => {
  return (
    <>
    
      <div>
        <IntroComponent />
        <ServiceAbout />
        <ProductsList />
      </div>
    
    </>
  );
};

export default DownloadPage;

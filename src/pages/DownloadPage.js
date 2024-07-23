import React from 'react';

import DownloadButton from '../components/DownloadButton';
import ProductsList from '../components/ProductsList';
import ServiceAbout from '../components/ServiceAbout';
import '../styles/downloadPage.css';

const DownloadPage = () => {
  return (
    <div className="page-container">
      
      <div className="my-4">
        <ServiceAbout />
      </div>
      <div className="my-4">
        <DownloadButton />
      </div>
      <div className="my-4">
        <ProductsList />
      </div>
    </div>
  );
};

export default DownloadPage;

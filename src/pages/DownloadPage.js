import React from 'react';

import ProductsList from '../components/ProductsList';
import ServiceAbout from '../components/ServiceAbout';
import IntroComponent from '../components/IntroComponent';
import '../styles/downloadPage.css';
import ContactUs from '../components/ContactUs';


const DownloadPage = () => {
  return (
    <>
    
      <div>
        <IntroComponent />
        <ServiceAbout />
        <ProductsList />
        <ContactUs />
       
      </div>
    
    </>
  );
};

export default DownloadPage;

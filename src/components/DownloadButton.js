import React from 'react';
import Zoom from 'react-reveal/Zoom';
import './DownloadButton.css';
import { IoLogoGooglePlaystore } from "react-icons/io5";

const DownloadButton = () => {
  const handleDownload = () => {
    console.log('Download button clicked');
  };

  return (
    <Zoom>
      <div className="text-center">
        <button className="download-button" onClick={handleDownload}>
          <IoLogoGooglePlaystore className="download-icon"/> Download App
        </button>
      </div>
    </Zoom>
  );
};

export default DownloadButton;

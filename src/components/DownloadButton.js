import React from 'react';
import Zoom from 'react-reveal/Zoom';
import { FaDownload } from 'react-icons/fa';
import '../styles/downloadPage.css';

const DownloadButton = () => {
  const handleDownload = () => {
    console.log('Download button clicked');
  };

  return (
    <Zoom>
      <div className="text-center">
        <button className="btn btn-primary download-button" onClick={handleDownload}>
          <FaDownload className="download-icon" /> Download on the App Store
        </button>
      </div>
    </Zoom>
  );
};

export default DownloadButton;

import React from 'react';
import Zoom from 'react-reveal/Zoom';
import '../styles/downloadPage.css';

const DownloadButton = () => {
  const handleDownload = () => {
    console.log('Download button clicked');
  };

  return (
    <Zoom>
      <div className="text-center">
        <button
          className="btn btn-primary download-button"
          onClick={handleDownload}
        >
          Download Now
        </button>
      </div>
    </Zoom>
  );
};

export default DownloadButton;

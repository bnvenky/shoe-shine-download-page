import React from 'react';
import Footer from './components/Footer';
import DownloadPage from './pages/DownloadPage';
import CustomNavbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <CustomNavbar />
      <DownloadPage />
      <Footer />
    </div>
  );
};

export default App;

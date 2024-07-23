import React from 'react';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import DownloadPage from './pages/DownloadPage';

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

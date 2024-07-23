import React from 'react';
import '../styles/downloadPage.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span>&copy; {new Date().getFullYear()} Shoe Shine. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

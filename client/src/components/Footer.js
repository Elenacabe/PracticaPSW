import React from 'react';
import logo_empresa from '../assets/logo_empresa.jpeg';
import '../styles/footer.css';

const Footer = () => {
  return (
      <div className="footer-container">
        <p>Created by:</p>
        <img className='logof' src={logo_empresa} alt='logo'></img>
      </div>
  );
};

export default Footer;

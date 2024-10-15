import React from 'react';
import logo_empresa from './assets/logo_empresa.jpeg';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>Created by:</p><br/>
        <img className='logof' src={logo_empresa} alt='logo'></img>
      </div>
    </footer>
  );
};

export default Footer;

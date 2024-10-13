import React, { memo } from 'react';
import logo_empresa from './assets/logo_empresa.jpeg'
import './footer.css'


const Footer = memo(() => {
  return (
    <footer>
     <div className="footer-container">
                <p>Created by:</p><br/>
                <img className='logo' src={logo_empresa} alt='logo'></img>
            </div>
    </footer>
  );
});




export default Footer;

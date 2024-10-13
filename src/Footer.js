import React from 'react';
import logo_empresa from './assets/logo_empresa.jpeg'
import './footer.css'

function Footer(){

    return(
        <footer>
            <div className='footer-container'>
                <p>Created by:</p><br/>
                <img src={logo_empresa} alt='logo'></img>
            </div>
        </footer>
    )
    
    
}

export default Footer;

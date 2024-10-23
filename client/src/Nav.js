import React from 'react';

import './footer.css';
import logo_ini from './assets/logoincio.webp'
import './nav.css'


function Nav(){

    return (

        <nav>
            <div className='nav-container'>
                <img src={logo_ini} alt="Logo juego"></img>
                <p>PIEDRA, PAPEL O TIJERA</p>
            </div>
        </nav>
    )


}


export default Nav;
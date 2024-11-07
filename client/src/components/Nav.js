import React from 'react';

import '../styles/footer.css';
import logo_ini from '../assets/logoincio.webp'
import '../styles/nav.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Nav(){
    
    return (

        <nav>
            <div className='nav-container'>
                <img src={logo_ini} alt="Logo juego"></img>
                <p>PIEDRA, PAPEL O TIJERA</p>
                <a href="/" class="house-icon"><i class="fas fa-home"></i></a>
                <a href='/estadistics' className='stats-link'>Estadísticas</a>
                <a href='/ranking' className='ranking-link'>Ranking</a>
                
            </div>
        </nav>
    )


}


export default Nav;
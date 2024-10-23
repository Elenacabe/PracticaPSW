import React /*, { useState }*/ from 'react'; //si no se usa useState, no es necesario importarlo
import './marcador.css'

function Marcador ({userScoreBoard, computerScoreBoard, user}) {
//texto en espaniolll! poner ordenador!

    return(

        <div className='div-scoreboard'> 
            <div className="score-container user-scoreboard">
                <h2 className="player-name">{user}</h2>
                <div className="score">{userScoreBoard}</div>
            </div>
            

            <div className="score-container machine-scoreboard">
                <h2 className="player-name">Ordenador</h2>
                <div className="score">{computerScoreBoard}</div>
            </div>
        </div>

    )

}





export default Marcador;
                                
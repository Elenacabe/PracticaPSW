import React, { useState } from 'react';
import './marcador.css'

function Marcador ({userScoreBoard, computerScoreBoard, user}) {


    return(

        <div className='div-scoreboard'> 
            <div className="score-container user-scoreboard">
                <h2 className="player-name">{user}</h2>
                <div className="score">{userScoreBoard}</div>
            </div>

            <div className="score-container machine-scoreboard">
                <h2 className="player-name">Computer</h2>
                <div className="score">{computerScoreBoard}</div>
            </div>
        </div>

    )

}





export default Marcador;
                                
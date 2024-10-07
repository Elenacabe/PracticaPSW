
/*imporación de imagenes*/

import React, { useState } from 'react';
import rockImg from './assets/rock.png';
import paperImg from './assets/paper.png';
import scissorsImg from './assets/scissors.png';
import winImg from './assets/win.png';
import loseImg from './assets/lose.png';
import drawImg from './assets/draw.png';
import Marcador from './Marcador';

const options = ['Piedra', 'Papel', 'Tijeras'];
const imageMap = {
  Piedra: rockImg,
  Papel: paperImg,
  Tijeras: scissorsImg,
};


/*juego*/
function Game({ onPlay }) {
  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [gameResult, setGameResult] = useState('');

  const getComputerChoice = () => {
    return options[Math.floor(Math.random() * options.length)];
  };

  const determineWinner = (user, computer) => {
    if (user === computer) return 'EMPATE';
    if (
      (user === 'Piedra' && computer === 'Tijeras') ||
      (user === 'Papel' && computer === 'Piedra') ||
      (user === 'Tijeras' && computer === 'Papel')
    ) {
      return 'GANAS';
    } else {
      return 'PIERDES';
    }
  };
  /*tu choice, comparar computer choice a la vez*/

  const handleClick = (choice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(choice, computerChoice);
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setGameResult(result);
    setResult(`TÚ: ${choice}, ORDENADOR: ${computerChoice} - ${result}`);
    onPlay(`TÚ: ${choice}, ORDENADOR: ${computerChoice} - ${result}`);
  };

  return (
    <div className="game-container">
      <h2>Juega Piedra, Papel o Tijeras</h2>
      <div className="options">
        {options.map((option) => (
          <button key={option} onClick={() => handleClick(option)}>
            {option}
          </button>
        ))}
      </div>
      <Marcador />
    
      
      <div className="choices-display">
        {userChoice && (
          <div className="text-box choice">
            <h3>TÚ:</h3>
            <img src={imageMap[userChoice]} alt={userChoice} />
          </div>
        )}
        {computerChoice && (
          <div className="text-box choice">
            <h3>ORDENADOR:</h3>
            <img src={imageMap[computerChoice]} alt={computerChoice} />
          </div>
        )}
      </div>
    
      {result && (
        <p
          className="text-box"
          style={{
            color: gameResult === 'GANAS' ? 'green' : gameResult === 'PIERDES' ? 'red' : 'gray',
          }}
        >
          {result}
        </p>
      )}

      <div className="result-image">
        {gameResult === 'GANAS' && <img src={winImg} alt="Ganaste" />}
        {gameResult === 'PIERDES' && <img src={loseImg} alt="Perdiste" />}
        {gameResult === 'EMPATE' && <img src={drawImg} alt="Empate" />}
      </div>
  
    </div>
  );
}

export default Game;

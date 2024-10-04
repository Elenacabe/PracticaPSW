import React, { useState } from 'react';
import rockImg from './rock.png';
import paperImg from './paper.png';
import scissorsImg from './scissors.png';
import winImg from './win.png';
import loseImg from './lose.png';
import drawImg from './draw.png';

const options = ['Piedra', 'Papel', 'Tijeras'];
const imageMap = {
  Piedra: rockImg,
  Papel: paperImg,
  Tijeras: scissorsImg,
};

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

  const handleClick = (choice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(choice, computerChoice);
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setGameResult(result);
    setResult(`Tú: ${choice}, Computadora: ${computerChoice} - ${result}`);
    onPlay(`Tú: ${choice}, Computadora: ${computerChoice} - ${result}`);
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
      
      <div className="choices-display">
        {userChoice && (
          <div className="text-box choice">
            <h3>Tu elección:</h3>
            <img src={imageMap[userChoice]} alt={userChoice} />
          </div>
        )}
        {computerChoice && (
          <div className="text-box choice">
            <h3>Elección del ordenador:</h3>
            <img src={imageMap[computerChoice]} alt={computerChoice} />
          </div>
        )}
      </div>
      <div className="result-image">
        {gameResult === 'GANAS' && <img src={winImg} alt="Ganaste" />}
        {gameResult === 'PIERDES' && <img src={loseImg} alt="Perdiste" />}
        {gameResult === 'EMPATE' && <img src={drawImg} alt="Empate" />}
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

  
    </div>
  );
}

export default Game;

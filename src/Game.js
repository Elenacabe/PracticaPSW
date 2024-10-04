import React, { useState } from 'react';
import rockImg from './rock.png';      // Importa las imágenes de las opciones
import paperImg from './paper.png';
import scissorsImg from './scissors.png';
import winImg from './win.png';        // Importa las imágenes de win/lose
import loseImg from './lose.png';
import drawImg from'./draw.png'

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
      return 'HAS GANADO';
    } else {
      return 'HAS PERDIDO';
    }
  };

  const handleClick = (choice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(choice, computerChoice);
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setGameResult(result);  //
    setResult(`TÚ: ${choice}, ORDENADOR: ${computerChoice} - ${result}`);
    onPlay(`TÚ: ${choice}, ORDENADOR: ${computerChoice} - ${result}`);
  };

  return (
    <div className="game-container">
      <h2>Juega</h2>
      <div className="options">
        {options.map((option) => (
          <button key={option} onClick={() => handleClick(option)}>
            {option}
          </button>
        ))}
      </div>
      
      <div className="choices-display">
        {userChoice && (
          <div className="choice">
            <h3>TÚ</h3>
            <img src={imageMap[userChoice]} alt={userChoice} />
          </div>
        )}
        {computerChoice && (
          <div className="choice">
            <h3>ORDENADOR</h3>
            <img src={imageMap[computerChoice]} alt={computerChoice} />
          </div>
        )}
      </div>
      
      {result && (
        <p
          style={{
            color: gameResult === 'HAS GANADO' ? 'green' : gameResult === 'HAS PERDIDO' ? 'red' : 'black',
          }}
        >
          {result}
        </p>
      )}

      <div className="result-image">
        {gameResult === 'HAS GANADO' && <img src={winImg} alt="Ganas" />}
        {gameResult === 'HAS PERDIDO' && <img src={loseImg} alt="Pierdes" />}
        {gameResult === 'EMPATE' && <img src={drawImg} alt='Empate'/>}
      </div>
    </div>
  );
}

export default Game;

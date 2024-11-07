import React, { useState,useEffect } from 'react';
import axios from 'axios'; // Asegúrate de importar axios
import rockImg from '../assets/rock.png';
import paperImg from '../assets/paper.png';
import scissorsImg from '../assets/scissors.png';
import winImg from '../assets/win.png';
import loseImg from '../assets/lose.png';
import drawImg from '../assets/draw.png';
import Marcador from '../components/Marcador';
import '../styles/App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const options = ['Piedra', 'Papel', 'Tijeras'];
const imageMap = {
  Piedra: rockImg,
  Papel: paperImg,
  Tijeras: scissorsImg,
};

function Game({user}) {
  const [result, setResult] = useState('');
  const [userChoice, setUserChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [gameResult, setGameResult] = useState('');
  const [gameType, setGameType] = useState('');
  const [userScoreBoard, setUserScoreBoard] = useState(0);
  const [computerScoreBoard, setComputerScoreBoard] = useState(0);
  const [history, setHistory] = useState([]);;
  const [resultBack, setResultBack] = useState('');
  const [final, setFinal] = useState(false); 
  const [roundResult, setRoundResult] = useState('')
 

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

  const resetGame = () => {
    setUserChoice('');
    setComputerChoice('');
    setGameResult('');
    setResult('');
    setResultBack('');
    setGameType('');
    setUserScoreBoard(0);
    setComputerScoreBoard(0)
    setRoundResult('')
  };

  const handleGameType = (type) => {
    setGameType(type);
  };




//Logica del juego
const handleClick = (choice) => {
    const computerChoice = getComputerChoice(); // ejecuta el random del computer
    const result = determineWinner(choice, computerChoice); // con la opcion q elije el user miramos quien gana

    setUserChoice(choice);
    setComputerChoice(computerChoice);
    setGameResult(result);
    // setHistory([...history, result]);

    // MARCADOR
    if (result === 'GANAS') {
      setUserScoreBoard(userScoreBoard + 1);
      checkForGameOver('user', userScoreBoard + 1);
      setRoundResult('Ganas la ronda')
    } else if (result === 'PIERDES') {
      setComputerScoreBoard(computerScoreBoard + 1);
      checkForGameOver('computer', computerScoreBoard + 1);
      setRoundResult('Pierdes la ronda')
    } else {
      setRoundResult('Empatas la ronda');
    }

    

    
  };



  // Verifica si hay un ganador
  const checkForGameOver = (player, score) => {
  // Valor por defecto para el tipo de juego
  let winningScore;
    switch (gameType) {
      case 'five':
        winningScore = 5;
        break;
      case 'seven':
        winningScore = 7;
        break;
        default:
          winningScore = 3;
    }

  
    if (score === winningScore) {
      if (player === 'user') {
        setResult('GANASTE LA PARTIDA');
        setResultBack('win');
      } else {
        setResult('PERDISTE LA PARTIDA');
        setResultBack('loss');
      }
      
      setFinal(true)
      
      
    }
  };


  

  // BACKKKKKKK MANAGEMENTTT
  // const handleGame = async () => {
    
  //   if (!gameType||!resultBack||!history||!user) {
  //     console.error('Faltan datos para enviar al servidor game'+gameType+'result-----   '+resultBack+'     hist'+history+'user'+user);
  //     return;
  //   } else
  //     try {
  //       const response = await axios.post('http://localhost:5000/game', { // Datos enviados al backend
  //         userId: user,
  //         result: resultBack,
  //         gameType: gameType,
  //         history: history,
  //       });
        
  //       if (response.status === 200) {
  //         console.log('Datos enviados correctamente:', response.data);
  //       } else {
  //         console.error('Error en la respuesta del servidor:', response.status, response.data);
  //       }
  //     } catch (error) {
  //       console.error('Error al enviar los datos del juego:', error.message);
  //     }
  //     resetGame();
  //   };
  
  

  return (
    
    <div className="game-container">
      <Nav/>

      <h2>Juega Piedra, Papel o Tijeras</h2>
      
      
      {/* en caso de no haber elegido la tipo de partida se muestra */}
      {!gameType&&
        <div className="game-type">
          <p>Elige un modo de juego</p>
          <button onClick={() => handleGameType('three')}>Mejor de 3</button>
          <button onClick={() => handleGameType('five')}>Mejor de 5</button>
          <button onClick={() => handleGameType('seven')}>Mejor de 7</button>
        </div>
      }

      {/* solo se mostrará en caso de que se haya elegido un tipo de juego */}
      {gameType && !final &&
        <>
          <div className="options">
           {options.map((option) => (
              <button key={option} onClick={() => {handleClick(option)}}> 
                  {option}
              </button>
              ))
            }
          </div>
          
        </>
         
      }

      {gameType &&
        <Marcador userScoreBoard={userScoreBoard} computerScoreBoard={computerScoreBoard} user={user} />  
        
      }

      <div className="choices-display">
        {userChoice && (
          <div className="text-box choice">
            <h3>{user}:</h3>
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
      <>
      
      
      <p
        className="text-box"
        style={{
          color: gameResult === 'GANAS' ? 'green' : gameResult === 'PIERDES' ? 'red' : 'gray',
        }}
      >
        {result}
      </p>
      <br/>
      <button onClick={resetGame}>Volver a menu de opciones</button>
      
      </>
      )}



      <div className="result-image">
        {roundResult &&
        <>
            <p
            className="text-box"
            style={{
              color: gameResult === 'GANAS' ? 'green' : gameResult === 'PIERDES' ? 'red' : 'gray',
            }}
          >
            {roundResult}
          </p><br/>
        
        </>
        }
        
        {gameResult === 'GANAS' && <img src={winImg} alt="Ganaste" />}
        {gameResult === 'PIERDES' && <img src={loseImg} alt="Perdiste" />}
        {gameResult === 'EMPATE' && <img src={drawImg} alt="Empate" />}
      </div>

      <Footer />
    </div>
  );
}

export default Game;


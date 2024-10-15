import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Game from './Game';
import History from './History';
import initlogo from './assets/logoincio.webp'
import Footer from './Footer';
import Nav from './Nav';

function App() {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
  };
  const toggleHistory = () => {
    setShowHistory(!showHistory);
  }
  const addToHistory = (result) => {
    setHistory([...history, result]);
  }


  const calculateStatistics = () => {
    const totalGames = history.length;
    const wins = history.filter((result) => result.includes('GANAS')).length;
    const winPercentage = totalGames > 0 ? (wins / totalGames) * 100 :0;
    return { totalGames, winPercentage: winPercentage.toFixed(2) };
  };

  const stats = calculateStatistics();

  return (
    <>
      <Nav/>  
    
      {!user ? (
        <>
          <div className='header-containter'>
            <h1>Bienvenido al mejor juego de Piedra, Papel o Tijeras!</h1>
            <p>Prepárate para una épica lucha contra el ordenador y elige sabiamente tu elección, solo así podrás lograr vencer al ordenador. A por ello!</p>
            <img src={initlogo} className='logo' alt='Logo'></img>
          </div>
          <Login onLogin={handleLogin} />  
        </>
        
      ) : (
        <>
          <h1>Hola {user}</h1>
          <div className="text-box stats-container">
            <h2>Estadísticas</h2>
            <p>Total de juegos: {stats.totalGames}</p>
            <p>Victorias: {stats.winPercentage}%</p>
          </div>
          <Game onPlay={addToHistory} user={user} />
          <br/>
          {!showHistory && <button onClick={toggleHistory}>Ver historial</button>}
          {showHistory && history.length > 0 && <History history={history} />}<br/>
          {showHistory && <button onClick={toggleHistory}>Ocultar historial</button>}      
        </>
      )}
      <Footer />
    </>
    
    
  );
}

export default App;
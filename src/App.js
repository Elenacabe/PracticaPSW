import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Game from './Game';
import History from './History';

function App() {
  const [user, setUser] = useState(null);
  const [history, setHistory] = useState([]);

  const handleLogin = (username) => {
    setUser(username);
  };

  const addToHistory = (result) => {
    setHistory([...history, result]);
  };

  const calculateStatistics = () => {
    const totalGames = history.length;
    const wins = history.filter((result) => result.includes('Ganaste')).length;
    const winPercentage = totalGames > 0 ? (wins / totalGames) * 100 :0;
    return { totalGames, winPercentage: winPercentage.toFixed(2) };
  };

  const stats = calculateStatistics();

  return (
    <div className="App">
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <h1>Hola {user}</h1>
          <Game onPlay={addToHistory} />
          <div className="stats-container">
            <h2>Estadísticas</h2>
            <p>Total de juegos: {stats.totalGames}</p>
            <p>Victorias: {stats.winPercentage}%</p>
          </div>
          <History history={history} />
        </>
      )}
    </div>
  );
}

export default App;

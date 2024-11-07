import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './views/Register'; // nos importamos el componente registro
import Login from './views/Login';
import Game from './views/Game'
import Stadistics from './views/Stadistics';
import Ranking from './views/Ranking';

function App() {

  const [currentUser, setCurrentUser] = useState(null); // donde guardaremos el nombre de usuario tras el login

  const handleLogin = (userName) =>{
    setCurrentUser(userName); // seteamos el nombre de usuario despues del inicio de sesión
  }


  return(
    <Router>
      <Routes>
        {/* pagina de inicio del registro */}
        <Route path='/' element={<Register />}/>
        <Route path='/login' element={<Login onLogin={handleLogin} />}/>
        <Route path='/game' element={<Game user={currentUser}/>}/>
        <Route path='/estadistics' element={<Stadistics user={currentUser}/>}/>
        <Route path='/ranking' element={<Ranking user={currentUser}/>}/>
      </Routes>
    </Router>


  );

}


export default App;




// import React, { useState } from 'react';
// import './App.css';
// import Game from './Game';
// import History from './History';
// import initlogo from './assets/logoincio.webp'
// import Footer from './Footer';
// import Nav from './Nav';
// import Register from './Register';
// import Login from './Login';


// function App() {
//   const [user, setUser] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [showHistory, setShowHistory] = useState(false);

//   const handleLogin = (username) => {
//     setUser(username);
//   };
//   const toggleHistory = () => {
//     setShowHistory(!showHistory);
//   }
//   const addToHistory = (result) => {
//     setHistory([...history, result]);
//   }


//   const calculateStatistics = () => {
//     const totalGames = history.length;
//     const wins = history.filter((result) => result.includes('GANAS')).length;
//     const winPercentage = totalGames > 0 ? (wins / totalGames) * 100 :0;
//     return { totalGames, winPercentage: winPercentage.toFixed(2) };
//   };

//   const stats = calculateStatistics();
 

//   /*
//   <p>Prepárate para una épica lucha contra el ordenador y elige sabiamente tu elección, solo así podrás lograr vencer al ordenador. A por ello!</p>
//             <img src={initlogo} className='logo' alt='Logo'></img>
//   */ 
//   return (
//     <>
//       <Nav/>  
    
//       {!user ? (
//         <>
//           <div className='header-containter'>
//             <h1>Bienvenido al mejor juego de Piedra, Papel o Tijeras!</h1>
            
//           </div>
//           <Register onLogin={handleLogin} />  
//           <Login onLogin={handleLogin} />
//         </>
        
//       ) : (
//         <>
//           <h1>Hola {user}</h1>
//           <div className="text-box stats-container">
//             <h2>Estadísticas</h2>
//             <p>Total de juegos: {stats.totalGames}</p>
//             <p>Victorias: {stats.winPercentage}%</p>
//           </div>
//           <Game onPlay={addToHistory} user={user} />
//           <br/>
//           {!showHistory && <button onClick={toggleHistory}>Ver historial</button>}
//           {showHistory && history.length > 0 && <History history={history} />}<br/>
//           {showHistory && <button onClick={toggleHistory}>Ocultar historial</button>}      
//         </>
//       )}
//       <Footer />
      
//     </>
    
    
//   );
// }

// export default App;
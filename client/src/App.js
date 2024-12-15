import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './views/Register'; // nos importamos el componente registro
import Login from './views/Login';
import Game from './views/Game'
import Stadistics from './views/Stadistics';
import Ranking from './views/Ranking';

function App() {

  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem('currentUser'); // Recupera el usuario de localStorage
});


  const handleLogin = (userName) =>{
    setCurrentUser(userName); // seteamos el nombre de usuario despues del inicio de sesión
    localStorage.setItem('currentUser', userName);
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
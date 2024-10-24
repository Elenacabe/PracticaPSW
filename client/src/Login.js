import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

function Login({onLogin}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
   
      try {
      const response = await axios.post('http://localhost:5000/login', { user, password });
      console.log(response.data); 
      setUser(user)
        onLogin(user);
      setSuccess('ok');
      setError('');  // Clear any previous error message
    
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);  // Error from server response
      } else {
        setError('nice.');  
      }
      setSuccess('');  
    }
  }

  return (
    <div className='bodylogs'>
      <div className="login-container">
        <h2>Indica tu nombre</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          /> <br/>
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
          <button type="submit">login</button>
        </form>
      </div>
        {error && <p className='not-succeed'>{error}</p>}  

    </div>
  );
}

export default Login;

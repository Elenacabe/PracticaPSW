import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { Navigate, useNavigate } from 'react-router-dom';


function Login({onLogin}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:5000/login', { user, password });
      console.log(response.data); 
      setUser(user)
        onLogin(user);
      setSuccess('ok');
      setError('');  // Clear any previous error message
      navigate('/game')
    
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);  // Error from server response
      } else {
        setError('nice.');  
        navigate('/game')
      }
      setSuccess('');  
    }
  }

  return (
    <div className='bodylogs'>
      <Nav />
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
          <button type="submit">Login</button>
        </form>
        <a href='/'>Volver al registro</a>
      </div>
        {error && <p className='not-succeed'>{error}</p>}  
    <Footer/>
    </div>
  );
}

export default Login;

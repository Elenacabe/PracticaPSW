import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';  // Asumo que aquí estás aplicando el estilo global para login y registro
import { Navigate, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

// Cambié el nombre del componente a Register para mayor claridad
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      console.log(response.data); 
      setSuccess('Usuario registrado correctamente.');
      navigate('/login')
      setError(''); 
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);  // Error desde server
      } else {
        setError('Algo fue mal.');
      }
      setSuccess('');  
    }
  }

  return (
    <div className='bodylogs'>
      <Nav/>
      <div className="login-container">
        <h2>Crear cuenta</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          /><br/>
          <button type="submit">Registrarse</button>
          <a href='/login'>Inicia sesión</a>
        </form>
      </div>
      {error && <p className='not-succeed'>{error}</p>}  
      <Footer/>
    </div>
  );
}

export default Register;

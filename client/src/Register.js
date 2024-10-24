import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';  // Asumo que aquí estás aplicando el estilo global para login y registro


// Cambié el nombre del componente a Register para mayor claridad
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password });
      console.log(response.data); 
      setSuccess('Usuario registrado correctamente.');
      setError('');  // Limpiar cualquier error previo
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message);  // Error desde la respuesta del servidor
      } else {
        setError('Algo fue mal.');
      }
      setSuccess('');  // Limpiar el mensaje de éxito en caso de error
    }
  }

  return (
    <div className='bodylogs'>
      <div className="login-container">
        <h2>Indica tu nombre</h2>
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
        </form>
      </div>
      {error && <p className='not-succeed'>{error}</p>}  
    </div>
  );
}

export default Register;

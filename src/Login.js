import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length > 13) {
      setError('No puedes iniciar sesión con más de 13 caracteres');
    } else if (username) {
      setError('');
      onLogin(username);
    }
  };

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
          /> <br/>
          <button type="submit">Jugar</button>
        </form>
      </div>
        {error && <p className='not-succeed'>{error}</p>}  
    </div>
  );
}

export default Login;

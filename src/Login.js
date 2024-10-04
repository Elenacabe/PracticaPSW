import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onLogin(username);
    }
  };

  return (
    <div className="login-container">
      <h2>Indica tu nombre</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Jugar</button>
      </form>
    </div>
  );
}

export default Login;

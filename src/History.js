import React from 'react';

function History({ history }) {
  return (
    <div className='text-box'>
      <h2>Historial de Partidas</h2>
      <ul className='history-container'>
        {history.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
}

export default History;

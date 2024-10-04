import React from 'react';

function History({ history }) {
  return (
    <div className="history-container">
      <h2>Historial</h2>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;

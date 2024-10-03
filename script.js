let playerScore = 0;
let computerScore = 0;
let totalGames = 0;
let empate = false;

function playGame(playerChoice) {
    const choices = ['piedra', 'papel', 'tijeras'];
    const randomNum = Math.floor(Math.random() * 3);
    const randomChoice = choices[randomNum];
    let resultText = '';

    // Lógica del juego
    switch (playerChoice) {
        case 'piedra':
            switch (randomChoice) {
                case 'piedra':
                    empate = true;
                    resultText = "Empate";
                    break;
                case 'papel':
                    computerScore++;
                    resultText = "Perdiste, el ordenador eligió papel";
                    break;
                case 'tijeras':
                    playerScore++;
                    resultText = "Ganaste, el ordenador eligió tijeras";
                    break;
            }
            break;
        case 'papel':
            switch (randomChoice) {
                case 'piedra':
                    playerScore++;
                    resultText = "Ganaste, el ordenador eligió piedra";
                    break;
                case 'papel':
                    empate = true;
                    resultText = "Empate";
                    break;
                case 'tijeras':
                    computerScore++;
                    resultText = "Perdiste, el ordenador eligió tijeras";
                    break;
            }
            break;
        case 'tijeras':
            switch (randomChoice) {
                case 'piedra':
                    computerScore++;
                    resultText = "Perdiste, el ordenador eligió piedra";
                    break;
                case 'papel':
                    playerScore++;
                    resultText = "Ganaste, el ordenador eligió papel";
                    break;
                case 'tijeras':
                    empate = true;
                    resultText = "Empate";
                    break;
            }
            break;
    }

    totalGames++;
    const playerWinPercentage = ((playerScore / totalGames) * 100).toFixed(2);

    // Mostrar resultados en la interfaz
    document.getElementById('result').innerHTML = `
        <p>${resultText}</p>
        <p>Elección del ordenador: ${randomChoice}</p>
        <p>Victorias del jugador: ${playerScore}</p>
        <p>Victorias del ordenador: ${computerScore}</p>
        <p>Porcentaje de victorias del jugador: ${playerWinPercentage}%</p>
    `;

    // Reiniciar si alguien llega a 2 puntos de ventaja
    if (computerScore - playerScore == 2) {
       resultText="HAS PERDIDO LA PARTIDA";
        resetGame();
    } else if (playerScore - computerScore == 2) {
        resultText="HAS GANADO LA PARTIDA";
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    totalGames = 0;
    document.getElementById('result').innerHTML = '';
}

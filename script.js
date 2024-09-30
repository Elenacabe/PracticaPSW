let playerScore = 0
let computerScore = 0
let empate=false

function playGame(playerChoice){
    const choices=['piedra', 'papel','tijeras']
    const randomNum= Math.floor(Math.random()*3)
    const randomChoice= choices[randomNum]

    switch (playerChoice){
        case 'piedra':{
            switch (randomChoice){
                case 'piedra':{
                empate=true
                break;
                }
                case 'papel':{
                    computerScore++
                    break;
                }
                case 'tijeras':{
                    playerScore++
                    break;
                }
            }
            break;
        }

        case 'papel':{
            switch (randomChoice){
                case 'piedra':{
                    playerScore++
                    break;
                }
                case 'papel':{
                    empate=true
                    break;
                }
                case 'tijeras':{
                    computerScore++
                }

            }
            break;
        }
        case 'tijeras':{
            switch (randomChoice){
                case 'piedra':{
                    computerScore
                    break;
                }
                case 'papel':{
                    playerScore++
                    break;
                }
                case 'tijeras':{
                    empate=true
                    break;
                }
            }
            break;

        }


        
    }

dedfault: 

console.log('ORDENA---->'+randomChoice+'vs'+playerChoice+'<------------HUMANO')
console.log('el ordena '+computerScore+ ' el humano '+playerScore )
    

}

function endGame(){

}
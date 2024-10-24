const express = require('express');
const cors = require('cors'); // Only import cors once
const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();


app.use(bodyParser.json());
app.use(cors()); 

// CREA UN DOTENV Y PIDEME UN USUARIO Y LINK DE MONGODB
mongoose.connect(process.env.MONGODB_URI);

// Modelos base de datos
const User = require('./models/User.js'); 
const Game = require('./models/Game')

// REGISTRO
app.post('/register', async (req, res) => {
  const { username, password } = req.body
  const hashedPassword = bcrypt.hashSync(password, 10)
  const newUser = new User({ username, password: hashedPassword })
  
  try {
    await newUser.save();
    res.status.apply(200).json({ message: 'Enhorabuena' });
  } catch (error) {
    res.status(500).json({ message: 'Algo fue mal' });
  }
});

// LOGIN
app.post('/login', async (req, res) => {
  const { user, password } = req.body;
  const username = await User.findOne({ username: user }); //ES ASI PQ EN EL MODELO ES USERNAME

  if (username && bcrypt.compareSync(password, username.password)) {
    res.status(200).json({ message: 'PA DENTRO', user });// 200-> OK MIRAR HTTP CATS PARA INFO
  } else {
    res.status(401).json({ message: 'ERROR' });
  }
});



// JUEGOS
app.post('/game', async (req, res) => {
  const { userId, result, gameType, history } = req.body;
  const game = new Game({ userId, result, gameType,history });

  try {
    await game.save();

    const user = await User.findById(userId); //UPDATEAMOS EL USUARIO
    user.total_games += 1;
    user.history.push(result);
    if (result === 'win') {
      user.wins += 1;
    }
    user.win_percentage = (user.wins / user.total_games) * 100;
    await user.save();

    res.status(200).json({ message: 'OK ', user });
  } catch (error) {
    res.status(500).json({ message: 'ERROR' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

const express = require('express');
const cors = require('cors'); // Only import cors once
const mongoose = require('mongoose'); 
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI);

// Models
const User = require('./models/User.js');  // User model
//const Game = require('./models/Game');  // Game model

// Register Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, password: hashedPassword });
  
  try {
    await newUser.save();
    res.json({ message: 'Enhorabuena' });
  } catch (error) {
    res.status(500).json({ message: 'Algo fue mal' });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  
  if (user && bcrypt.compareSync(password, user.password)) {
    res.json({ message: 'PA DENTRO', user });
  } else {
    res.status(401).json({ message: 'Cambia algo' });
  }
});

// Route to Register Game Result
app.post('/game', async (req, res) => {
  const { userId, result } = req.body;
  const game = new Game({ userId, result });

  try {
    await game.save();

    // Update user statistics
    const user = await User.findById(userId);
    user.total_games += 1;
    if (result === 'win') {
      user.wins += 1;
    }
    user.win_percentage = (user.wins / user.total_games) * 100;
    await user.save();

    res.json({ message: 'Partida registrada', user });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar partida' });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

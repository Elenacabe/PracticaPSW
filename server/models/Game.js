const mongoose = require('mongoose');
const gameSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  result: { type: String, enum: ['win', 'loss', 'draw'] },
  game_date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Game', gameSchema);

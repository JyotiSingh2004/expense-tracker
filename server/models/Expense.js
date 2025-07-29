const mongoose = require('mongoose');

module.exports = mongoose.model('Expense', new mongoose.Schema({
  userId: String,
  date: String,
  category: String,
  amount: Number,
  note: String
}));

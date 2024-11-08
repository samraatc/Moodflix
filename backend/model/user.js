// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  secretKey: {
    type: Number,
    required: true,  // Add this line if the secretKey is mandatory
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

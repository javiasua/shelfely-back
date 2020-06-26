const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String, 
      require : true
    },
    username: {
      type: String,
      require: true
    },
    passwordHash: {
        type: String,
        required: true
    }
  },
  {
    timestamps : true
  }
)
  userSchema.index({ 'email': 1}, {unique: true});
  userSchema.index({ 'username': 1}, {unique: true});
  module.exports = mongoose.model('User', userSchema)

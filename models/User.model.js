const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String, 
      required : true
    },
    username: {
      type: String,
      required: true
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

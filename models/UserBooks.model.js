const mongoose = require('mongoose');

const userBooksSchema = new mongoose.Schema(
    {
      title: {
        type: String, 
        required : true
      },
      author: {
        type: String,
        required: true
      },
      date : {
          type : Date,
          required : true
      },
      image : String,
      description: String,
      alreadyRead : Boolean,
      category : String,
      preview : String,
      user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User'
      }
    },
    {
      timestamps : true
    }
    
)
  module.exports = mongoose.model('UserBooks', userBooksSchema)

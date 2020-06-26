const mongoose = require('mongoose');

const userBooksSchema = new mongoose.Schema(
    {
      title: {
        type: String, 
        require : true
      },
      author: {
        type: String,
        require: true
      },
      date : {
          type : Date,
          require : true
      },
      image : String,
      description: String,
      alreadyRead : Boolean,
      category : String,
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
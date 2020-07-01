const express = require('express')
const router = express.Router()

let BookModel = require('../models/UserBooks.model')

router.get('/books', (req, res) => {
     BookModel.find()
          .then((books) => {
               res.status(200).json(books)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })         
})

router.post('/create', (req, res) => {  
    const {title, author, date,image,description ,alreadyRead,category,preview,id} = req.body;
    console.log(req.body)
    BookModel.create({title: title, author: author, date: date,image:image,description:description,alreadyRead:alreadyRead,category:category,preview:preview,user:id})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

router.get('/books/:id', (req, res) => {
    BookModel.findById(req.params.id)
     .then((response) => {
          res.status(200).json(response)
     })
     .catch((err) => {
          res.status(500).json({
               error: 'Something went wrong',
               message: err
          })
     }) 
})

router.delete('/books/:id', (req, res) => {
    BookModel.findByIdAndDelete(req.params.id)
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          })  
})

router.patch('/books/:id', (req, res) => {
    let id = req.params.id
    const {title, author, date,description,alreadyRead} = req.body;
    BookModel.findByIdAndUpdate(id, {$set: {title: title, author: author, date: date,description:description,alreadyRead:alreadyRead}})
          .then((response) => {
               res.status(200).json(response)
          })
          .catch((err) => {
               console.log(err)
               res.status(500).json({
                    error: 'Something went wrong',
                    message: err
               })
          }) 
})

module.exports = router;
const express = require('express');
const Book = require('../models/book.model')
const router = express.Router();


router.post("/books", function (req, res) {
    const book = new Book(req.body);
    book.save()
        .then(book => {
            res.send(book);
        }).catch(err => {
            res.status(400).send(err);
        });
})

router.patch('/books/:id', function (req, res){
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, book){
        if(err) {
            return res.status(500).send(err)
        };
        res.send(book);
    })
})

router.get('/', function(req, res){
    Book.find(function(err, books){
        if(err){
            return res.status(500).send(err);
        } 
        res.send(books);
    })

})


module.exports = router;



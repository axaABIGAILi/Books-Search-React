/* ROUTING */
const axios = require('axios');
const db = require('../models');
const path = require('path');

const Routes = app => {
    // get route for all books
    app.get('/api/books', (req, res) => {
        db.Books
        .find()
        .then((booksData) => {
            res.json(booksData);
        })
        .catch((err) => {
            res.json({error: err});
        });
    });

    // get route for axios/google books api search
    app.get('/search', (req, res) => {
        let searchterm = req.body.title.replace(/ /g, '+');
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchterm}`)
        .then((queryResult)=>{
            res.json(queryResult);
        })
        .catch((err)=>{
            res.json({error: err});
        });
    });

    // post route to googlebooks database on mongo to add saved books
    app.post('/api/books', (req, res)=>{
        db.Books.create(req.body)
        .then((bookData)=>{
            res.json(bookData);
        })
        .catch((err)=>{
            res.json({error: err});
        });
    });

    // delete route to remove saved books
    app.delete('/api/books/:id', (req, res)=>{
        db.Books.findByIdAndDelete(req.params.id)
        .then((bookData)=>{
            res.json({deleted: bookData});
        })
        .catch((err)=>{
            res.json({error: err});
        });
    });

    app.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname+'../client/public/'+'index.html'));
    });
}

module.exports = Routes;

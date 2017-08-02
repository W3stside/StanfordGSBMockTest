const express       = require('express');
const Router        = express.Router();
const Dimensions    = require('../models/dimensionModel');
const Users         = require('../models/userModel');
const TestAnswers   = require('../models/testModel');

Router.get('/', (req, res) => {
    res.json('You are successfully in the API section');
});

// Users
Router.post('/:content', (req, res, next) => {
    Users.create(req.body)
        .then( resp => {
            console.log(resp);
            res.json(resp);
        })
        .catch( err => {
            next(err);
        });
    // res.json('You are successfully in the API section');
});

// GET Test questions
Router.get('/testAnswers', (req, res, next) => {
    TestAnswers.find()
    .then( resp => {
        console.log(resp);
        res.json(resp);
    })
    .catch( err => {
        console.log(err);
        next(err);
    });
});

// GET Dimensions
Router.get('/dimensions/:name', (req, res, next) => {
    Dimensions.find({name: req.params.name})
        .then( resp => {
            console.log(resp);
            res.json(resp);
        })
        .catch( err => {
            console.log(err);
            next(err);
        });
});

module.exports = Router;

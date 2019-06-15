const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb://deep_mongo:deep_mongo2019@ds151596.mlab.com:51596/ngstorefront";

mongoose.connect(db, err => {
    if (err) {
        console.log('eror');
    } else {
        console.log("connected");
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send("unauthorize request")
    }
    let token = req.headers.authorization.split(" ")[1];
    if (token === 'null') {
        return res.status(401).send("unauthorize request")
    }
    let payload = jwt.verify(token, 'secretKey');
    if (!payload) {
        return res.status(401).send("unauthorize request")
    }
    req.userId = payload.subject
    next()
}

router.get('/', (req, res) => {
    res.send('from api route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error);
        } else {
            res.status(200).send(registeredUser)
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;

    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log(error);
        } else {
            if (!user) {
                res.status(401).send('invalid email');
            } else if (user.password != userData.password) {
                res.status(401).send("invalid password")
            } else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretkey')
                res.status(200).send({ token });
            }
        }
    })
})

router.get('/products', (req, res) => {
    let products = [
        { id: 1, name: 'Hydrogen vHydrogen Hydrogen', price: 1.0079, stock: 'H' },
        { id: 2, name: 'Helium', price: 4.0026, stock: 'He' },
        { id: 3, name: 'Lithium', price: 6.941, stock: 'Li' },
        { id: 4, name: 'Beryllium', price: 9.0122, stock: 'Be' },
        { id: 5, name: 'Boron', price: 10.811, stock: 'B' },
        { id: 6, name: 'Carbon', price: 12.0107, stock: 'C' },
        { id: 7, name: 'Nitrogen', price: 14.0067, stock: 'N' },
        { id: 8, name: 'Oxygen', price: 15.9994, stock: 'O' },
        { id: 9, name: 'Fluorine', price: 18.9984, stock: 'F' },
        { id: 10, name: 'Neon', price: 20.1797, stock: 'Ne' },
        { id: 11, name: 'Sodium', price: 22.9897, stock: 'Na' },
        { id: 12, name: 'Magnesium', price: 24.305, stock: 'Mg' },
        { id: 13, name: 'Aluminum', price: 26.9815, stock: 'Al' },
        { id: 14, name: 'Silicon', price: 28.0855, stock: 'Si' },
        { id: 15, name: 'Phosphorus', price: 30.9738, stock: 'P' },
        { id: 16, name: 'Sulfur', price: 32.065, stock: 'S' },
        { id: 17, name: 'Chlorine', price: 35.453, stock: 'Cl' },
        { id: 18, name: 'Argon', price: 39.948, stock: 'Ar' },
        { id: 19, name: 'Potassium', price: 39.0983, stock: 'K' },
        { id: 20, name: 'Calcium', price: 40.078, stock: 'Ca' },
    ]
    res.json(products);
})

router.get('/special', (req, res) => {
    let products = [
        {
            "_id": 1,
            "name": "product 1",
            "description": "lorem ipsum",
            "date": "2019-05-11"
        },
        {
            "_id": 2,
            "name": "product 2",
            "description": "lorem ipsum",
            "date": "2019-05-11"
        },
        {
            "_id": 3,
            "name": "product 3",
            "description": "lorem ipsum",
            "date": "2019-05-11"
        },
        {
            "_id": 4,
            "name": "product 4",
            "description": "lorem ipsum",
            "date": "2019-05-11"
        },
        {
            "_id": 5,
            "name": "product 5",
            "description": "lorem ipsum",
            "date": "2019-05-11"
        },
    ]
    res.json(products);
})

module.exports = router
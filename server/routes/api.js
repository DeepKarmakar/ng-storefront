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
        {
            id: 1,
            name: 'Hydrogen vHydrogen Hydrogen',
            description: 'lorem ipsum dolar',
            price: 40,
            stock: 100
        },
        {
            id: 2,
            name: 'Helium',
            description: 'lorem ipsum dolar',
            price: 10,
            stock: 10
        },
        {
            id: 3,
            name: 'Lithium',
            description: 'lorem ipsum dolar',
            price: 30,
            stock: 140
        },
        {
            id: 4,
            name: 'Beryllium',
            description: 'lorem ipsum dolar',
            price: 20,
            stock: 120
        },
        {
            id: 5,
            name: 'Boron',
            description: 'lorem ipsum dolar',
            price: 40,
            stock: 0
        },
        {
            id: 6,
            name: 'Carbon',
            description: 'lorem ipsum dolar',
            price: 400,
            stock: 20
        },
        {
            id: 7,
            name: 'Nitrogen',
            description: 'lorem ipsum dolar',
            price: 40,
            stock: 140
        },
        {
            id: 8,
            name: 'Oxygen',
            description: 'lorem ipsum dolar',
            price: 50,
            stock: 170
        },
        {
            id: 9,
            name: 'Fluorine',
            description: 'lorem ipsum dolar',
            price: 14,
            stock: 144
        },
        {
            id: 10,
            name: 'Neon',
            description: 'lorem ipsum dolar',
            price: 70,
            stock: 130
        },
        {
            id: 11,
            name: 'Sodium',
            description: 'lorem ipsum dolar',
            price: 40,
            stock: 140
        },
        {
            id: 12,
            name: 'Magnesium',
            description: 'lorem ipsum dolar',
            price: 40,
            stock: 140
        },
        {
            id: 13,
            name: 'Aluminum',
            description: 'lorem ipsum dolar',
            price: 110,
            stock: 110
        },
        {
            id: 14,
            name: 'Silicon',
            description: 'lorem ipsum dolar',
            price: 70,
            stock: 240
        },
        {
            id: 15,
            name: 'Phosphorus',
            description: 'lorem ipsum dolar',
            price: 75,
            stock: 140
        },
        {
            id: 16,
            name: 'Sulfur',
            description: 'lorem ipsum dolar',
            price: 40,
            stock: 140
        },
        {
            id: 17,
            name: 'Chlorine',
            description: 'lorem ipsum dolar',
            price: 40,
            stock: 140
        },
        {
            id: 18,
            name: 'Argon',
            description: 'lorem ipsum dolar',
            price: 33,
            stock: 110
        },
        {
            id: 19,
            name: 'Potassium',
            description: 'lorem ipsum dolar',
            price: 80,
            stock: 130
        },
        {
            id: 20,
            name: 'Calcium',
            description: 'lorem ipsum dolar',
            price: 400,
            stock: 140
        },
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
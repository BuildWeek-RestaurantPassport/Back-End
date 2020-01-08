const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/users-model.js');
const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');
const authorize = require('../auth/authenticate-middleware.js');


//implements the register whilst hashing the password
router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            const token = genToken(saved)
            res.status(201).json({created_user: saved, token:token})
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

//implements the login
router.post('/login', authorize, (req, res) => {

    let { username, password } = req.body;
    Users.findBy({username})
    .first()
    .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = genToken(user)
        res.status(200).json({
            message: `Welcome ${user.username}!`,
            token:token
        });
    }   else {
        res.status(401).json({message: 'Access Denied, Try Again'});
    }
    })
    .catch(error => {
    res.status(500).json(error);
    });
});

//Generates Token
function genToken(user) {
        const payload = {
        userid: user.id,
        username: user.username,
        };
        const options = { expiresIn: '1h' };
            const token = jwt.sign(payload, secrets.jwtSecret, options);
            return token;
        }
    
    
    
module.exports = router;
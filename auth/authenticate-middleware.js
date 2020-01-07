const Users = require('../users/users-model.js');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {

  //When running in postman make sure and run in header and not body
    const {username, password} = req.headers

    if(!(username && password)){
        res.status(401).json({ message: 'you shall not pass!' });
    } else {
        Users.findBy({ username })
        .first()
        .then(_user => {
            if(_user && bcrypt.compareSync(password, _user.password)) {
            next()
            } else {
            res.status(401).json({message: "Invalid Username or Password"})
            }
        })
        .catch((err) => {res.status(500).json({message: ERROR})})
    }
};
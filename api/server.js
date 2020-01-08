const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const jwt = require('jsonwebtoken');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authenticate, authRouter);
server.use('/api/users', authenticate, usersRouter);

server.get('/', (req, res) => {
    res.send("I actually work!!");
})
//This is the token crap for the server
server.get('/token', (req, res) => {

    const payload = {
        subject: 'thisuser',
        userid: 'brandy',
        username: 'pebbles'
    };

    const secret = 'wethotuwasatoad';
    const options = {
        expiresIn: '1h'
    };

    const token = jwt.sign(payload, secret, options);

    res.json(token);
})
//NEED TO CREATE A GET ALL FOR RESTAURANTS

//Gets User (BY ID)
server.get('/api/users/:id', (req, res) => {
	const { id } = req.params;
	usersRouter
		.get(id)
		.then(user => {
			res.json(user)
		})
		.catch(error => {
			res.status(404)
			res.json("User not found.")
		})
});
// ---> POST
server.post('/api/users', (req, res) => {
	const users = req.body;
	console.log('Users!');
	usersRouter
		.insert(users)
		.then(users => {
			console.log("inside the users!")
			res.json(users)
		})
		.catch(err => {
			res
				.status(500)
				.json("Unexpected condition: no user created")
		})
});


// ---> PUT
server.put('/api/users/:id', (req, res) => {
	const { id } =req.params;
	const user = req.body;
	usersRouter
		.update(id, user)
		.then(user => {
			res.json(user)
		})
		.catch(err => {
			res
				.status(500)
				.json("Unexpected condition: user not deleted")
		})
})


// ---> DELETE
server.delete('/api/users/:id', (req, res) => {
	const { id } = req.params;
	usersRouter
		.remove(id)
		.then(count => {
			if(count) {
				res
					.status(201)
					.json("Item successfully deleted")
			}
			else {
				res
					.status(404)
					.json("invalid id")
			}
		})
		.catch(err => {
			res
				.status(500)
				.json("Unexpection condition: item no deleted")
		})
});

module.exports = server;
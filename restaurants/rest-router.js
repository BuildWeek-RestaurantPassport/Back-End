const router = require("express").Router();

const newRest = require("./rest-model.js");

//GET METHODS
router.get('/', (req, res) => {
    newRest.find()
        .then(results => {
        res.status(200).json(results)
        })
    })
    router.get('/passport', (req, res) => {
    let { userId } = req.decodedJwt;
    newRest.getRestaurantsByUserId(Number(userId))
        .then(results => {
        res.json(results)
    })
})

router.get('/:id', (req, res) => {
    let { id } = req.params;
    newRest.findById(id)
        .then(results => {
        if (results.length > 0) {
            res.status(200).json(results)
        } else {
            res.status(400).json({
            message: `Restaurant with id ${id} does not exist.`
            })
        }
        })
        .catch(err => {
        res.status(500).json({ message: 'Error cannot find Id' })
        })
})

//POST METHODS
router.post('/', (req, res) => {
    let body = req.body;
    newRest.add(body)
        .then(results => {
        res.status(200).json(results)
        })
        .catch(err => {
        console.log(err)
        res.status(500).json(err)
        })
})


//PUT METHODS
router.put('/:id', (req, res) => {
    let { id } = req.params;
    let body = req.body;
    newRest.update(id, body)
        .then(results => {
        res.json(results)
        })
        .catch(err => {
        res.json({ message: 'Error cannot update restaurant.' })
        })
    })
    //DELETE METHODS
    router.delete('/:id', (req, res) => {
    let { id } = req.params;
    newRest.remove(id)
        .then(results => {
        console.log(results)
        if (results) {
            res.json({ message: 'Hope you didnt need that now it is gone forever!.' })
        } else {
            res.status(401).json({ message: 'ID lost.' })
        }
        })
        .catch(err => {
        res.status(500).json({ message: 'Oops, no can do.' })
        })
})

module.exports = router;
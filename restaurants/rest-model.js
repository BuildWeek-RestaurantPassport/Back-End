const db = require('../data/dbConfig.js');

    module.exports = {
    find,
    findById,
    add,
    }

    function find() {
    return db("restaurants")
    }

    function findById(id) {
    return db("restaurants").where({ id })
    }

    function add(info) {
    return db("restaurants")
    .insert(info, 'id')
    }
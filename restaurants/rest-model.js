const db = require('../data/dbconfig.js');

    module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getRestaurantsByUserId,
    addRestaurantById
    }

    function find() {
    return db("rests")
    }

    function findById(id) {
    return db("rests").where({ id })
    }

    function add(info) {
    return db("rests")
    .insert(info, 'id')
    }

    function update(id, changes) {
    return db("rests")
        .where({ id })
        .update(changes, 'id')
        .then(results => {
        return findById(id)
        })
    }

    function remove(id) {
    return db("rests").where({ id }).del()
    }

    function getRestaurantsByUserId(id) {
    return db("users_restaurants")
        .select('r.rest_name','r.img_url', 'r.url','r.restaurant_phone_number', 'r.restaurant_rating','r.address', 'r.restaurant_city','r.restaurant_zip', 'r.country', 'r.state', 'r.price')
        .from('users_restaurants as ur')
        .join('restaurants as r', 'r.id', 'ur.restaurant_id')
        .where('ur.passportHolder_id', '=', id)
    }

    function addRestaurantById(info){
    return ("users_restaurants").insert(info, 'id')
    }
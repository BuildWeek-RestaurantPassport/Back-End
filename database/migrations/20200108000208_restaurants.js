
exports.up = function(knex) {
    return knex.schema.createTable("rests", tbl => {
        tbl.increments();
        tbl.string("id", 128).notNullable().unique();
        tbl.string("rest_name", 128).notNullable().unique();
        tbl.string("img_url", 128).notNullable().unique();
        tbl.string("url", 128).notNullable().unique();
        tbl.string("phone_num", 128).notNullable().unique();
        tbl.integer("rating", 128).notNullable().unique();
        tbl.string("address", 128).notNullable().unique();
        tbl.string("city", 128).notNullable().unique();
        tbl.string("zip", 128).notNullable().unique();
        tbl.string("country", 128).notNullable().unique();
        tbl.string("state", 128).notNullable().unique();
        tbl.string("price", 128).notNullable().unique();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("rests")
};

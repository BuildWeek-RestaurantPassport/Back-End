    exports.up = function (knex) {
        return knex.schema.createTable("users_restaurants", tbl => {
        tbl.unique(["users_id", "rests_id"])
        tbl
            .integer("users_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    
        tbl
            .integer("rests_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("rests")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        })
    };
    
    exports.down = function (knex) {
        return knex.schema.dropTableIfExists("users_restaurants")
    };
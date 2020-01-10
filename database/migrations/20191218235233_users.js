
    exports.up = function(knex) {
        return knex.schema.createTable("users", tbl => {
            tbl.increments();
            tbl.string("username", 128).notNullable().unique();
            tbl.string("password").notNullable();
            tbl.string("first_name", 128).notNullable();
            tbl.string("last_name", 128).notNullable();
            tbl.string("city", 128).notNullable();
            tbl.string("email", 128).notNullable().unique();
        });
    };
    
    exports.down = function(knex, Promise) {
        return knex.schema.dropTableIfExists('users');
    };
    
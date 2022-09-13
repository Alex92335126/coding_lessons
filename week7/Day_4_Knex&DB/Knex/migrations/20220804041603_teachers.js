/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("teachers", (table) => {
    table.increments();
    table.string("name");
    //The unique is neccesary to guarantee it is a one-to-one relation
    table.integer("class_id").unsigned().unique();
    table.foreign("class_id").references("classes.id");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("teachers");
};

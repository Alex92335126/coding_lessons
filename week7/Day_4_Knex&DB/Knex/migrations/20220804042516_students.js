/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("students", (table) => {
    table.increments();
    table.string("name");
    table.integer("class_id").unsigned();
    table.foreign("class_id").references("classes.id");
    table.timestamp(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("students");
};

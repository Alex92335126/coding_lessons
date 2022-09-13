exports.up = function (knex, Promise) {
  return knex.schema.createTable(
    "noteapp_notes",
    (table) => {
      table.increments();
      table.string("content");
      table.integer("user_id").unsigned();
      table
        .foreign("user_id")
        .references("noteapp_users.id");
      table.timestamps(false, true);
    }
  );
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("noteapp_notes");
};

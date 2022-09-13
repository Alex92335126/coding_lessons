exports.up = function (knex) {
  return knex.schema.createTable(
    "noteapp_users",
    (table) => {
      table.increments();
      table.string("username");
      table.string("password");
      table.timestamps(false, true);
    }
  );
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("noteapp_users");
};

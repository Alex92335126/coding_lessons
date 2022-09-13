exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("noteapp_users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("noteapp_users").insert([
        { username: "alex", password: "password" },
        { username: "sam", password: "password" },
        { username: "lesley", password: "password" },
      ]);
    });
};

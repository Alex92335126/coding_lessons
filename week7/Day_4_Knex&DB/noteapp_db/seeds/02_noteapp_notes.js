exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("noteapp_notes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("noteapp_notes").insert([
        { content: "note1", user_id: 1 },
        { content: "note2", user_id: 2 },
        { content: "note3", user_id: 3 },
      ]);
    });
};

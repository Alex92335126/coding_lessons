/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("teacher").del();
  await knex("teacher").insert([
    {
      Name: "Mr.Harry",
      School: "Delia School Of Canada",
      District: "Tai Koo Shing",
    },
    {
      Name: "Mr.Smith",
      School: "Sir Ellis Kadoorie ",
      District: "Olympic",
    },
    {
      Name: "Mr.Salins",
      School: "YMCA Christian College",
      District: "Tung Chung",
    },
  ]);
};

const knexfile = require("./knexfile").development;
const knex = require("knex")(knexfile);
//Select Information
/*knex
  .select("*")
  .from("students")
  .where({ id: 18 })
  .then((data) => {
    console.log(data);
  });*/
/*knex
  .select("id", "age")
  .from("students")
  .then((data) => {
    console.log(data);
  });*/
/*let query = knex("students").column(["id", "age"]);
console.log(query.toSQL());
query.then((rows) => {
  console.log(rows);
});*/
//Delete Information
/*knex
  .del()
  .from("students")
  .where({ id: 1 })
  .then(() => {
    console.log("Deleted");
  });*/
//Insert Information
/*knex
  .insert({ fname: "Andy", lname: "Smith", age: 29 })
  .into("students")
  .then(() => {
    console.log("Inserted");
  });*/
//Update Information
/*knex("students")
  .update({ fname: "sara", lname: "hunt" })
  .where({ fname: "sarah " })
  .then(() => {
    console.log("Updated");
  });*/
//Batch Update
knex("students")
  .update({ fname: "daniel", lname: "radcliffe" })
  .where("fname", "harry")
  .orWhere("id", 18)
  .orWhere("id", 16)
  .then(() => {
    console.log("Updated");
  });

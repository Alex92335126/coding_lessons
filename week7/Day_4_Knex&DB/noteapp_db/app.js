require("dotenv").config();
const express = require("express");
const app = express();
const knexConfig = require("./knexfile")["development"];
const knex = require("knex")(knexConfig);
const bodyParser = require("body-parser");
const authorizer = require("./authorizer");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const basicAuth = require("express-basic-auth");
app.use(
  basicAuth({
    authorizeAsync: true,
    authorizer: authorizer(knex),
    challenge: true,
    realm: "Note Taking with knex",
  })
);
function readQuery(query) {
  return query
    .then((rows) => {
      console.log(rows);
    })
    .catch((error) => {
      console.log(error);
    });
}

/**********************************************
 * Get All Users
 * ==================================
 ***********************************************/
function makeUser(eachUserRow) {
  return eachUserRow.map((eachRow) => ({
    id: eachRow.id,
    username: eachRow.username,
    password: eachRow.password,
  }));
}
function getAllUsers(database = knex) {
  let allUsers = database("noteapp_users").select("id", "username", "password");
  return allUsers.then((eachRow) => {
    console.log(makeUser(eachRow));
    return makeUser(eachRow);
  });
}
app.get("/", (request, response) => {
  let string = "authorized! checkout /api/notes and /api/users";
  response.send(string);
});

app.get("/api/users", (request, response) => {
  let users = getAllUsers(knex);
  users.then((userObject) => {
    response.send(userObject);
  });
});
/**********************************************
 * Post User
 * ==================================
 ***********************************************/
// Database
function addUser(database = knex, user) {
  return database("noteapp_users")
    .insert(user)
    .then(() => {
      console.log("Inserted user!");
    });
}

// Route
app.post("/api/users", (request, response) => {
  // get the body of the request
  let body = request.body;
  // console.log it
  console.log("Post Route: ", body);
  // add the user via the function above
  addUser(knex, body);
  // response.send posted
  response.send("posted!");
});

/**********************************************
 * Get Users' Notes
 * ==================================
 ***********************************************/
function getUsersNotes(database = knex, user_id) {
  let getNoteQuery = database("noteapp_notes")
    .select("id", "content", "user_id")
    .where({ user_id: user_id });
  return getNoteQuery.then((eachRow) => {
    console.log("Each Row: ", eachRow);
    return eachRow;
  });
}

/**********************************************
 * Get Note Route
 * ==================================
 ***********************************************/
app.get("/api/users/:id/notes", (request, response) => {
  let id = request.params.id;
  console.log("User Id:", id);
  let userNotes = getUsersNotes(knex, id);
  userNotes.then((eachObject) => {
    response.send(eachObject);
  });
});

/**********************************************
 * Get All Notes
 * ==================================
 ***********************************************/
function makeNotes(eachNotesRow) {
  return eachNotesRow.map((eachNote) => ({
    id: eachNote.id,
    content: eachNote.content,
    user_id: eachNote.user_id,
  }));
}
function getAllNotes(database = knex) {
  let allUsers = database("noteapp_notes").select("id", "content", "user_id");
  return allUsers.then((eachRow) => {
    console.log(makeNotes(eachRow));
    return makeNotes(eachRow);
  });
}

app.get("/api/notes", (request, response) => {
  let getNotesFromDatabase = getAllNotes(knex);
  getNotesFromDatabase.then((eachObject) => {
    response.send(eachObject);
  });
});
/**********************************************
 * Post Note
 * ==================================
 ***********************************************/
function postNote(database = knex, object) {
  return database("noteapp_notes")
    .insert(object)
    .then(() => {
      console.log("inserted");
    });
}
app.post("/api/users/:userId/notes", (request, response) => {
  let userId = request.params.userId;
  let body = request.body;
  body.user_id = userId;
  console.log(body);
  postNote(knex, body).then(() => {
    response.send("posted!");
  });
});
/**********************************************
 *
 * ==================================
 ***********************************************/
// getAllUsers(knex);
// postNote(knex, { user_id: 2, content: "buy milk" });
// getNote(knex, 1);
// getAllNotes(knex);
// getNote(knex, 2);

/* Where works of a single entry
having works off the grouped object 

app.get("/api/ivan", (req, res) => {
  knex
    .select("*")
    .from("noteapp_users")
    .groupBy("id")
    .havingIn("id", [1, 3])
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

*/

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});

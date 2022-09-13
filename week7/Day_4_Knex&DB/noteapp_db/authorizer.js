const Authorizer = function (knex) {
  return function (username, password, cb) {
    let query = knex
      .select("username")
      .from("noteapp_users")
      .where("username", username)
      .where("password", password);

    query
      .then((rows) => {
        // console.log(rows)
        if (rows.length === 1) {
          cb(null, true);
          //we have found the user with this username and password.
        } else {
          cb(null, false);
          //no such user....
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
module.exports = Authorizer;

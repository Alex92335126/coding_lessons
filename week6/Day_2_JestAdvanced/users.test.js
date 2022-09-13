const axios = require("axios");
class Users {
  static all() {
    return axios.get("/users.json").then((resp) => resp.data);
  }
}
jest.mock("axios");
test("Should Fetch User", () => {
  const users = [{ name: "AlexNg" }];
  const resp = { data: users };
    axios.get.mockImplementation(() => Promise.resolve(resp));
    return Users.all().then((data)=> expect(data).toEqual(users))
});

const app = require("./routeExample");

const request = require("supertest");

describe("Routes", () => {
  test("/people should return person page", (done) => {
    request(app)
      .get("/people")
      .expect(201)
      .expect("content-type", /json/)
      .expect(function (response) {
        (response.body.firstName = "sam"),
          (response.body.lastName = "O'Shaughnessy"),
          (response.body.email = "sam.o@xccelerate.co");
      })
      .end((err, res) => {
        if (err) throw err;
        done();//end the test
      });
  });

  test("It should respond the GET method at root request", (done) => {
    request(app)
      .get("/")
      .expect(200)
      .expect("content-type", /html/)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });

  test("It should fail if the get request is invalid.", (done) => {
    request(app)
      .get("/hello")
      .expect(404)
      .expect("content-type", /html/)
      .end((err, res) => {
        if (err) throw err;
        done();
      });
  });
});

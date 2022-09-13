const express = require("express");

class CampRouter {
  constructor(campService) {
    this.campService = campService;
  }

  router() {
    const router = express.Router();

    router.get("/", this.get.bind(this));
    router.post("/", this.post.bind(this));

    return router;
  }

  get(request, response) {
    return this.campService
      .list()
      .then((campsites) => {
        response.json(campsites);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  post(request, response) {
    console.log("POSTING JSON FILE");
    let campsite = request.body.campsite;
    console.log("posting campsites");
    return this.campService
      .add(campsite)
      .then(() => {
        this.campService.list();
      })
      .then((campsites) => {
        response.json("posted!");
        response.status(200).json(campsites);
      });
  }
}

module.exports = CampRouter;

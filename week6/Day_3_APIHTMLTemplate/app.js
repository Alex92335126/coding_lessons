const express = require("express");
const CampSites = require("./4_example.js");
const CampRouter = require("./4_router.js");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

let jsonFile = __dirname + "/data/campingSites.json";

let campData = new CampSites(jsonFile);
let campRouterInstance = new CampRouter(campData);

app.use("/campsites", campRouterInstance.router());

/********************************
 * Get home page
 * =================================
 */

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/4_html.html");
});

/**********************************************
 * Post on campsite
 * ==================================
 ***********************************************/

app.post("/campsites", (request, response) => {
  console.log("POSTING JSON FILE");
  let campsite = request.body.campsite;
  console.log(campsite);
  console.log("posting campsites");
  return campData
    .add(campsite)
    .then(() => {
      campData.list();
    })
    .then((campsites) => {
      response.json("posted!");
      response.status(200).json(campsites);
    });
});

/**********************************************
 * Get all campsites
 * ==================================
 ***********************************************/
app.get("/campsites", (request, response) => {
  console.log("GETTING JSON FILE");
  return campData
    .list()
    .then((campsites) => {
      response.json(campsites);
    })
    .catch((error) => {
      console.log(error);
    });
});
/**********************************************
 * Get specific campsite
 * ==================================
 ***********************************************/
app.get("/campsites/:name", (request, response) => {
  let name = request.params.name;
  console.log("GETTING JSON FILE");
  return campData
    .list()
    .then((campsites) => {
      response.json(campsites);
    })
    .catch((error) => {
      console.log(error);
    });
});

/**********************************************
 * Replace Campsite
 * ==================================
 ***********************************************/
app.put("/campsites/:index", (request, response) => {
  console.log("UPDATING JSON FILE");
  let index = request.params.index;
  console.log("Index: ", index);
  let newCampsite = request.body.campsite;
  console.log("New Campsite: ", newCampsite);
  return campData
    .update(index, newCampsite)
    .then(() => {
      campData.list();
    })
    .then((campsites) => {
      response.json("Updated!");
    })
    .catch((error) => {
      console.log(error);
    });
});

/**********************************************
 * Delete Campsite
 * ==================================
 ***********************************************/
app.delete("/campsites/:id", (request, response) => {
  console.log("DELETING JSON FILE");
  let index = request.params.id;
  return campData
    .remove(index)
    .then(() => {
      campData.list();
    })
    .then((campData) => {
      response.json("Deleted");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log("port on 3000");
});

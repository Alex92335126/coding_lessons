/**********************************************
 * Creating my own API
 * ==================================
 ***********************************************/
const fs = require("fs");
/**********************************************
 * Step one: thinking about what I need
 * ==================================
 * Post campsites
 * Get campsites
 * Edit campsites
 * Delete campsites
 ***********************************************/

class CampSites {
  constructor(file) {
    this.file = file;
    this.initPromise = null;
    this.init();
  }
  init() {
    if (this.initPromise === null) {
      this.initPromise = new Promise((resolve, reject) => {
        this.read()
          .then(() => {
            resolve();
          })
          .catch(() => {
            this.campsites = [];
            this.write().then(resolve).catch(reject);
          });
      });
    }
    return this.initPromise;
  }
  read() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.file, "utf-8", (err, data) => {
        if (err) {
          reject(err);
        }
        try {
          this.campsites = JSON.parse(data);
        } catch (e) {
          return reject(e);
        }
        return resolve(this.campsites);
      });
    });
  }
  write() {
    console.log(4);
    return new Promise((resolve, reject) => {
      console.log(this.campsites);
      fs.writeFile(this.file, JSON.stringify(this.campsites), (err) => {
        if (err) {
          return reject(err);
        }
        resolve(this.campsites);
      });
    });
  }
  add(campsite) {
    return this.init().then(() => {
      this.campsites.push(campsite);
      return this.write();
    });
  }
  update(index, newCampsite) {
    return this.init().then(() => {
      this.campsites[index] = newCampsite;
      return this.write();
    });
  }

  remove(index) {
    return this.init().then(() => {
      return this.read().then(() => {
        console.log("Campsite to delete:", this.campsites[index]);
        console.log("Campsites: ");

        this.campsites.splice(index, 1);
        return this.write();
      });
    });
  }
  list() {
    console.log(5);
    return this.init().then(() => {
      return this.read();
    });
  }
}

// let data = __dirname + "/data/campingSites.json";
// let testCampsite = new CampSites(data);
// testCampsite.list().then((eachObject) => {
//   console.log(eachObject);
// } );

module.exports = CampSites;

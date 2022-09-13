/**********************************************
 * Getting Data
 * ==================================
 * Promises are important, especially when you have a lot of data that you want to fetch from. In this example, let's say that we want to create a website that gets all dog breed information, as well as their availability in Hong Kong pet stores.
 *
 * We have three sets of data:
 * - dogData (where we can get information about each dog)
 * - storeAvailability (where we see which stores have that particular dog)
 * - storeData (where we get the location)
 *
 * We also have three promises:
 *  Given a breed...
 *       |
 *       v
 * - getBreedInformation
 *       |
 *       v
 * - getDogBreedsFromStores
 *       |
 *       v
 * - getLocation
 *       |
 *       v
 *  returns all the given information
 ***********************************************/
const dogData = [
  {
    breed: "Shiba Inu",
    origin: "Japan",
    temperament: "Alert, Loyal, Attentive",
  },
  {
    breed: "Akita Inu",
    origin: "Japan",
    temperament: "Stubborn, Composed, Loyal",
  },
  {
    breed: "Great Dane",
    origin: "Germany",
    temperament: "Reserved, Friendly, Gentle",
  },
  {
    breed: "Dobermann",
    origin: "Germany",
    temperament: "Energetic, Loyal, Obedient",
  },
  {
    breed: "Pug",
    origin: "China",
    temperament: "Docile, Quiet, Mischievous",
  },
  {
    breed: "English Bulldog",
    origin: "United Kingdom",
    temperament: "Docile, Friendly, Easygoing",
  },
];
function breedInformation(breed) {
  for (let i = 0; i < dogData.length; i++) {
    if (dogData[i].breed === breed) {
      return dogData[i];
    }
  }
}
/**********************************************
 * Grab Dog Breeds Data
 * ==================================
 ***********************************************/
let getBreedInformation = (dogBreed) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    let breed = breedInformation(dogBreed);
    if (breed) {
      console.log("Breed Information\n", breed);
      resolve(breed);
    } else {
      reject("Couldn't get data");
    }
    // }, 2000);
  });
};

// getBreedInformation("Shiba Inu").then((object) => {
//   console.log(object);
// });

const storeAvailability = [
  {
    name: "Johnny",
    store: "The Best Doggos",
    breed: "English Bulldog",
    price: 10000,
  },
  {
    name: "Harry",
    store: "Causeway Bay Dog Breeders",
    breed: "English Bulldog",
    price: 10000,
  },
  {
    name: "Bella",
    store: "Whiskers n Paws",
    breed: "Labrador Retriever",
    price: 10000,
  },
  {
    name: "Jazzy",
    store: "SPCA",
    breed: "Shiba Inu",
    price: 5000,
  },
  {
    name: "Bob",
    store: "Whiskers n Paws",
    breed: "Akita Inu",
    price: 11000,
  },
  {
    name: "Julius",
    store: "SPCA",
    breed: "Great Dane",
    price: 20000,
  },
  {
    name: "Bella",
    store: "The Best Doggos",
    breed: "Dobermann",
    price: 5000,
  },
];

/**********************************************
 * See Store Availability
 * ==================================
 ***********************************************/
function getStores(breedInformation) {
  for (let index in storeAvailability) {
    if (storeAvailability[index].breed === breedInformation.breed) {
      breedInformation.store = storeAvailability[index].store;
      breedInformation.name = storeAvailability[index].name;
      breedInformation.price = storeAvailability[index].price;
    }
  }
  console.log("LOOK HERE");
  console.log(breedInformation);
  return breedInformation;
}

/**********************************************
 * Promise to get breeds from this country
 * ==================================
 ***********************************************/
let getDogBreedsFromStores = (dogBreed) => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    let storesThatHaveThisBreed = getStores(dogBreed);
    if (storesThatHaveThisBreed) {
      console.log("Got all stores that have", dogBreed.breed, "\n");
      console.log(storesThatHaveThisBreed);
      resolve(storesThatHaveThisBreed);
    } else {
      reject("Couldn't get data");
    }
    // }, 1000);
  });
};

// getDogBreedsFromStores({
//   breed: "Shiba Inu",
//   origin: "Japan",
//   temperament: "Alert, Loyal, Attentive",
// }).then((object) => {
//   console.log(object);
// });

/**********************************************
 * Get Store Location
 * ==================================
 ***********************************************/

const storeData = [
  {
    name: "The Best Doggos",
    location: "Homantin",
  },
  {
    name: "SPCA",
    location: "Tsim Sha Tsui",
  },
  {
    name: "Causeway Bay Dog Breeders",
    location: "Tin Hau",
  },
  {
    name: "Whiskers n Paws",
    location: "Ap Lei Chau",
  },
];
/**********************************************
 * See Store Location
 * ==================================
 ***********************************************/
function getLocation(dogInformation) {
  console.log("Dog information: ", dogInformation);
  for (let index in storeData) {
    if (storeData[index].name === dogInformation.store) {
      dogInformation.location = storeData[index].location;
    }
  }
  return dogInformation;
}

/**********************************************
 * Promise to get breeds from this country
 * ==================================
 ***********************************************/
let getStoreLocation = (dogData) => {
  console.log("Get store location function", dogData);
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    let storeLocations = getLocation(dogData);
    if (storeLocations) {
      console.log(storeLocations);
      resolve(storeLocations);
    } else {
      reject("Couldn't get data");
    }
    // }, 2000);
  });
};

// getStoreLocation({
//   breed: "Shiba Inu",
//   origin: "Japan",
//   temperament: "Alert, Loyal, Attentive",
//   store: "SPCA",
//   name: "Jazzy",
//   price: 5000,
// }).then((object) => {
//   console.log(object);
// });

// let breed = "Shiba Inu";

/**********************************************
 * Then Calls
 * ==================================
 ***********************************************/
// getBreedInformation("English Bulldog") // {breed: "Shiba Inu", origin: "", temperament}
//   .then(getDogBreedsFromStores)
//   .then((object) => {
//     console.log(1);
//     console.log(object);
//     return object;
//   })
//   .then(getStoreLocation)
//   .then((object) => {
//     console.log(2);
//     console.log(object);
//     return object;
//   })
//   .then((object) => {
//     console.log(3);
//     console.log(object);
//   })
//   .catch((error) => {
//     console.log("Error");
//   });

/**********************************************
 * Async Await Example
 * ==================================
 ***********************************************/
async function asyncAwait() {
  try {
    let getBreed = await getBreedInformation("Akita Inu");
    let getStores = await getDogBreedsFromStores(getBreed);
    let getLocation = await getStoreLocation(getStores);
    console.log(getLocation);
  } catch (err) {
    console.log(error);
  }
}

asyncAwait();

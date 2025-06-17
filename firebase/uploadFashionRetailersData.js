const { initializeApp } = require("firebase/app");
const { getDatabase, ref, set } = require("firebase/database");

// TODO: We'll probably need to hide this information when preparing for submission
const firebaseConfig = {
  apiKey: "AIzaSyBhWrjoWzkQ_2OeTeeooOFVFhvsg9VxrvI",
  authDomain: "lifehack-2025-garupar.firebaseapp.com",
  databaseURL: "https://lifehack-2025-garupar-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lifehack-2025-garupar",
  storageBucket: "lifehack-2025-garupar.firebasestorage.app",
  messagingSenderId: "475969090658",
  appId: "1:475969090658:web:32ec73b88939dff9ee0d3b",
  measurementId: "G-HW9N3WV8R5"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const fashionRetailers = {
  "fashionRetailers": {
    "komodo": {
      "brandName": "Komodo",
      "gsgEthicalScore": 100,
      "ethicalAccreditation": true,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "y",
          nuclearPower: "y",
          betterCottonInitiative: "y",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "y",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "y",
          otherCriticisms: "y",
          ethicalInnovator: "y"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/komodo/?_gl=1*1rdbvd2*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "ladageBonton": {
      "brandName": "Ladage Bonton",
      "gsgEthicalScore": 100,
      "ethicalAccreditation": true,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "na",
          nuclearPower: "y",
          betterCottonInitiative: "na",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "na",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "y",
          otherCriticisms: "y",
          ethicalInnovator: "y"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/ladage-bonton/?_gl=1*vvcduw*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "finisterre": {
      "brandName": "Finisterre",
      "gsgEthicalScore": 99,
      "ethicalAccreditation": false,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "y",
          nuclearPower: "y",
          betterCottonInitiative: "na",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "na",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "n",
          otherCriticisms: "y",
          ethicalInnovator: "y"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/finisterre/?_gl=1*l1k9p2*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "karee": {
      "brandName": "Karee",
      "gsgEthicalScore": 99,
      "ethicalAccreditation": true,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "n",
          nuclearPower: "y",
          betterCottonInitiative: "na",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "na",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "y",
          otherCriticisms: "y",
          ethicalInnovator: "y"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/karee/?_gl=1*1pfm7qw*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "peopleTree": {
      "brandName": "People Tree",
      "gsgEthicalScore": 99,
      "ethicalAccreditation": false,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "y",
          nuclearPower: "y",
          betterCottonInitiative: "na",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "y",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "n",
          otherCriticisms: "y",
          ethicalInnovator: "y"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/people-tree/?_gl=1*1053ur5*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "schoolUniformShop": {
      "brandName": "School Uniform Shop",
      "gsgEthicalScore": 99,
      "ethicalAccreditation": true,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "n",
          nuclearPower: "y",
          betterCottonInitiative: "na",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "na",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "y",
          otherCriticisms: "y",
          ethicalInnovator: "y"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/school-uniform-shop/?_gl=1*1053ur5*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "seaSalt": {
      "brandName": "Seasalt",
      "gsgEthicalScore": 80,
      "ethicalAccreditation": false,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "n",
          nuclearPower: "y",
          betterCottonInitiative: "n",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "y",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "n",
          otherCriticisms: "m",
          ethicalInnovator: "na"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/seasalt/?_gl=1*1qyyapu*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "patagonia": {
      "brandName": "Patagonia",
      "gsgEthicalScore": 79,
      "ethicalAccreditation": false,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "y",
          nuclearPower: "y",
          betterCottonInitiative: "n",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "n",
          ethicalTradingSchemes: "y",
          humanRights: "m"
        },
        other: {
          ethicalAccreditation: "n",
          otherCriticisms: "y",
          ethicalInnovator: "y"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/patagonia/?_gl=1*9vihes*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "fatFace": {
      "brandName": "Fat Face",
      "gsgEthicalScore": 77,
      "ethicalAccreditation": false,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "y",
          nuclearPower: "y",
          betterCottonInitiative: "y",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "m",
          politicalDonations: "y",
          ethicalTradingSchemes: "y",
          humanRights: "m"
        },
        other: {
          ethicalAccreditation: "n",
          otherCriticisms: "m",
          ethicalInnovator: "na"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/fat-face/?_gl=1*1e9l4i2*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "whistles": {
      "brandName": "Whistles",
      "gsgEthicalScore": 73,
      "ethicalAccreditation": false,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "n",
          nuclearPower: "y",
          betterCottonInitiative: "y",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "y",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "n",
          otherCriticisms: "n",
          ethicalInnovator: "na"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/whistles/?_gl=1*1n9oczd*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "monsoonAccessorize": {
      "brandName": "Monsoon Accessorize",
      "gsgEthicalScore": 70,
      "ethicalAccreditation": false,
      learnMore: {
        environment: {
          environmentalReport: "m",
          organic: "n",
          nuclearPower: "y",
          betterCottonInitiative: "n",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "y"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "y",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "n",
          otherCriticisms: "m",
          ethicalInnovator: "na"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/monsoon-accessorize/?_gl=1*1n9oczd*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "phaseEight": {
      "brandName": "Phase Eight",
      "gsgEthicalScore": 70,
      "ethicalAccreditation": false,
      learnMore: {
        environment: {
          environmentalReport: "y",
          organic: "n",
          nuclearPower: "y",
          betterCottonInitiative: "y",
          fossilFuels: "y"
        },
        animal: {
          animalWelfare: "n"
        },
        people: {
          armaments: "y",
          codeOfConduct: "y",
          politicalDonations: "y",
          ethicalTradingSchemes: "y",
          humanRights: "y"
        },
        other: {
          ethicalAccreditation: "n",
          otherCriticisms: "n",
          ethicalInnovator: "na"
        },
        link: "https://thegoodshoppingguide.com/brand-directory/phase-eight/?_gl=1*imox7b*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    }
  }
};


set(ref(db, 'fashionRetailers'), fashionRetailers.fashionRetailers)
  .then(() => {
    console.log("Fashion retailers prepopulated successfully!");
  })
  .catch((error) => {
    console.error("Error prepopulating fashion retailers:", error);
  });


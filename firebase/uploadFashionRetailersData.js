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
      "brandURL": "komodo",
      "gsgEthicalScore": 100,
      "ethicalAccreditation": true,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/komodo/?_gl=1*1rdbvd2*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "ladageBonton": {
      "brandName": "Ladage Bonton",
      "brandURL": "ladagebonton",
      "gsgEthicalScore": 100,
      "ethicalAccreditation": true,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/ladage-bonton/?_gl=1*vvcduw*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "finisterre": {
      "brandName": "Finisterre",
      "brandURL": "finisterre",
      "gsgEthicalScore": 99,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/finisterre/?_gl=1*l1k9p2*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "karee": {
      "brandName": "Karee",
      "brandURL": "karee",
      "gsgEthicalScore": 99,
      "ethicalAccreditation": true,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/karee/?_gl=1*1pfm7qw*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "peopleTree": {
      "brandName": "People Tree",
      "brandURL": "peopletree",
      "gsgEthicalScore": 99,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/people-tree/?_gl=1*1053ur5*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "schoolUniformShop": {
      "brandName": "School Uniform Shop",
      "brandURL": "schooluniformshop",
      "gsgEthicalScore": 99,
      "ethicalAccreditation": true,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/school-uniform-shop/?_gl=1*1053ur5*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "seaSalt": {
      "brandName": "Seasalt",
      "brandURL": "seasaltcornwall",
      "gsgEthicalScore": 80,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/seasalt/?_gl=1*1qyyapu*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "patagonia": {
      "brandName": "Patagonia",
      "brandURL": "patagonia",
      "gsgEthicalScore": 79,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/patagonia/?_gl=1*9vihes*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "fatFace": {
      "brandName": "Fat Face",
      "brandURL": "fatface",
      "gsgEthicalScore": 77,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/fat-face/?_gl=1*1e9l4i2*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "whistles": {
      "brandName": "Whistles",
      "brandURL": "whistles",
      "gsgEthicalScore": 73,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/whistles/?_gl=1*1n9oczd*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "monsoonAccessorize": {
      "brandName": "Monsoon Accessorize",
      "brandURL": "monsoon",
      "gsgEthicalScore": 70,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/monsoon-accessorize/?_gl=1*1n9oczd*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "phaseEight": {
      "brandName": "Phase Eight",
      "brandURL": "phase-eight",
      "gsgEthicalScore": 70,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/phase-eight/?_gl=1*imox7b*_up*MQ..*_ga*MTY5MTQzODQzLjE3NTAwODkzMzE.*_ga_PYEMHYT21H*czE3NTAwODkzMzAkbzEkZzEkdDE3NTAwODkzNDIkajQ4JGwwJGgw"
      }
    },
    "asos": {
      "brandName": "ASOS",
      "brandURL": "asos",
      "gsgEthicalScore": 67,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/asos/?_gl=1*bgtf8s*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
      }
    },
    "bershka": {
      "brandName": "Bershka",
      "brandURL": "bershka",
      "gsgEthicalScore": 53,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/bershka/?_gl=1*ki63mn*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
      }
    },
    "gap": {
      "brandName": "Gap",
      "brandURL": "gap",
      "gsgEthicalScore": 53,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/gap/?_gl=1*1pyxzsh*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
      }
    },
    "pull&bear": {
      "brandName": "Pull&Bear",
      "brandURL": "pullandbear",
      "gsgEthicalScore": 53,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/pull-bear/?_gl=1*1rwltu7*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
      }
    },
    "thenorthface": {
      "brandName": "The North Face",
      "brandURL": "thenorthface",
      "gsgEthicalScore": 53,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/the-north-face/?_gl=1*1fgp5za*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
      }
    },
    "zara": {
      "brandName": "Zara",
      "brandURL": "zara",
      "gsgEthicalScore": 53,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/zara/?_gl=1*1fgp5za*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
      }
    },
    "fila": {
      "brandName": "Fila",
      "brandURL": "fila",
      "gsgEthicalScore": 53,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/fila-fashion-retailers/?_gl=1*d94vmw*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
      }
    },
    "adidas": {
      "brandName": "adidas",
      "brandURL": "adidas",
      "gsgEthicalScore": 41,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/adidas-fashion-retailers/?_gl=1*13f4xrx*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
      }
    },
    "nike": {
      "brandName": "nike",
      "brandURL": "nike",
      "gsgEthicalScore": 37,
      "ethicalAccreditation": false,
      learnMore: {
        link: "https://thegoodshoppingguide.com/brand-directory/nike-fashion-retailers/?_gl=1*6ug76b*_up*MQ..*_ga*ODIwNTk2MTM4LjE3NTAxNTM4MzY.*_ga_PYEMHYT21H*czE3NTAxNTM4MzYkbzEkZzAkdDE3NTAxNTM4MzYkajYwJGwwJGgw"
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


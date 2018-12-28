configuro nodemon corriento tests automaticamente:

en package.json:
"scripts": {
    "test": "mocha **/*.tests.js",
    "test-watch": "nodemon --exec \"npm test\""
  }


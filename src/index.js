var uniqueRandomArray = require('unique-random-array');
var gameOfThronesNames  = require('./gameOfThrones-names.json');

// get a random name
module.exports = {
    all: gameOfThronesNames,
    random: uniqueRandomArray(gameOfThronesNames)
};
var uniqueRandomArray = require('unique-random-array');
var gameOfThronesNames  = require('./gameOfThrones-names.json');

module.exports = {
    all: gameOfThronesNames,
    random: uniqueRandomArray(gameOfThronesNames)
};
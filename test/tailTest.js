const assertEqual = require('../assertEqual.js')
const tail = require('../tail.js')

const words = ["Yo yo", "Lighthouse", "Labs"];
const word = tail(words);
assertEqual(words.length, 3);
assertEqual(tail(word), "Labs");
// mock data
const names = require("./4-names");
const data = require("./6-alternative-flavor");
// access functions via utils modules
const sayHi = require("./5-utilis");
require("./7-mind-grenade");
console.log(data);
// reuse func sayHi()
sayHi(names.john);
sayHi(names.peter);

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const nreItems = _.flattenDeep(items);
console.log(nreItems);

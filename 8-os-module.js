const os = require("os");

//info of current user
const user = os.userInfo();
console.log(user);

//method return system info
console.log("System uptime " + os.uptime());

//current os info
const currOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currOS);
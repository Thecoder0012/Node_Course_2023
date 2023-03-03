const { tanks } = require("./tanks.json"); // destructure tanks. Every js file is a module



function getTanks() {
  return tanks;
}

function addTank(tank){
    tanks.push(tank);
    return tanks;
}

module.exports = {
   getTanks,
   addTank
} // key and name of function
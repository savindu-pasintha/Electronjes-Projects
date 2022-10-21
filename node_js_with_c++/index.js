/**var calculate = require("./build/Release/calculate")
calculate.calc(); */
var addon = require("./build/Release/addon")
var addon2 = require("./build/Release/addon2")
var addon3 = require("./build/Release/addon3");


//const obj = new addon.calculate();
//console.log(addon.calculate())
//console.log(addon.getName())
console.log(addon.getSum())
console.log('parameeters pass', addon2.add(3,8));
addon3((msg) => {
    console.log("callback : ",msg);
  });



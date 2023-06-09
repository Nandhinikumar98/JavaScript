//thisbinding
const details = {
  fname: "Nandhini",
  lname: "Kumar",
  role: "SE",
  sal: 200000,
  getInfo: function () {
    console.log(`
          First Name is ${this.fname}
          Last Name is ${this.lname}
          Role is ${this.role}
          and salary is ${this.sal}
          `);
  },
};

const det = {
  fname: "Dony",
  lname: "jennifer",
  role: "SE",
  sal: 200000,
};

//details.getInfo(); -- give details information
//det.getInfo();
details.getInfo.bind(det)(); //display as by getinfo format from details object as ref
//or
//var detinfo = getInfo.bind(det);
//detinfo();
details.getInfo.call(det); //it directly calls the function

//Scope
//console.log(myName);
//var myName = "Nandhini"; //undefined op but there is no error shown
let myName = "Nandhini";
var Name = "nandy";
if (true) {
  let lname = "Kumar";
  console.log(lname);
}
//console.log(lname);

const { runInNewContext } = require("vm");

//map
var myMap = new Map();
myMap.set(0, "Nandy");
myMap.set(1, "Kumar");
myMap.set(2, "Swathi");
myMap.set(3, "Mages");
// console.log(myMap); -- op as dictionary

for (let key of myMap.keys()) {
  // to get key from map
  console.log(`key is ${key}`);
}
for (let value of myMap.values()) {
  //to get values from map
  console.log(`Value is ${value}`);
}
for (let [key, value] of myMap) {
  //get both key and value from map
  console.log(`key is ${key} and value is ${value}`);
}
myMap.forEach((key) => console.log(`${key}`)); //it takes only values as output
myMap.forEach((k, v) => console.log(`${k} and key is ${v}`));
myMap.delete(2); //delete 2nd key and thats value from map
console.log(myMap);

//class
class Employee {
  constructor(name, age) {
    this.name;
    this.age;
  }
  detailList = [];
  getInfo() {
    return { name: this.name, age: this.age };
  }
  enroll(name) {
    this.detailList.push(name);
  }
  getdetailsList() {
    return this.detailList;
  }
}

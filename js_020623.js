//Arrays
var myArray = [];

myArray[0] = "Nandy";
myArray[1] = "Dony";
myArray[2] = 86;
myArray[3] = true;
console.log(myArray);
console.log(myArray.length);
myArray.push("Name"); //element stored in last index
console.log(myArray);
myArray.pop(); // last elem in array is deleted
console.log(myArray);
myArray.unshift("Kumar"); // add ele in front or first index
console.log(myArray);
myArray.shift(); //remove first index elem
console.log(myArray);
myArray.splice(2, 1); //delete elem from which position to which index or count
console.log(myArray);

//objects
const myObj = { name: "Nandhini" }; //key:value
console.log(myObj.name);
const newObj = {
  employee: true,
  married: false,
  age: 24,
  desgn: "SE",
  details: { fn: "Nandy", ln: "Kumar" },
};
console.log(newObj.age);
console.log(newObj.details); // get all info under details obj

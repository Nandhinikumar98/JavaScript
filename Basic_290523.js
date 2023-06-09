console.log("Hi Nandhini, Welcome");
console.log(typeof "Nandhini");
console.log(typeof 12051998);
console.log(typeof true);
let myVariable; // for variable declaration need to use let and variablename might be as CamelCase so it is usefull in js
myVariable = 12 + 45;
console.log(myVariable);
let myNum1 = 18;
let myNum2 = 54;
console.log(myNum1 === myNum2); //in JS we need to use three = operator symbol for comparison
console.log(myNum1 >= myNum2);
console.log(myNum1 <= myNum2);

//String -- length property
myName = "Nandhini";
console.log(myName.length);
console.log("Hi, Welcome to Js program".length);

//String methods -- charAt()
console.log(myName.charAt(0));
console.log(myName.indexOf("ini")); //taken index num which start from this string - first index
console.log(myName.lastIndexOf("n"));

// Slice method
console.log(myName.slice(4, 7)); // start to end
console.log(myName.slice(4)); // from starting with end of length of string

//Uppercase nd lower
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//includes
console.log(myName.includes("ni")); // retrun boolean value

//split
console.log(myName.split("n"));
console.log(myName.split("")); //op will be split letter by letter as array format

//const
const name = "Welcome"; //if any value that doesnot need to be change in full script means we can use const keyword

//numbers methods
const myNum = "42";
const myNum3 = 42;
console.log(myNum === myNum3); //false
console.log(Number(myNum) === myNum3); //true

//isInteger
console.log(Number.isInteger(4256)); //true
console.log(Number.isInteger(523.554)); //false

//Parsefloat
myFloat = 4656.018856;
console.log(Number.parseFloat(myFloat)); //423.09 leave char from variable and taken only float value
console.log(Number.parseInt(myFloat)); //convert float value to integer
console.log(Number.parseFloat(myFloat).toFixed(2)); //op as 42.35 and as string

//isNaN -- not a number check datatype and returns T or F
console.log(Number.isNaN("Nandy")); //false bcos we use number methods it should take number as input
console.log(isNaN("Nandy")); //true

//Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.trunc(Math.PI)); // 3
console.log(Math.round(4.8)); // 5
console.log(Math.ceil(4.1)); //if any number after . it takes next whole number
console.log(Math.floor(4.9)); //if any num after . it takes only the same num before.
console.log(Math.pow(3, 4)); //3 to the power of 4 =81

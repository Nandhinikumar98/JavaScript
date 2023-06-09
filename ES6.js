// var keyword -- used for function scope
function greet() {
  for (var i = 0; i < 5; i++) {
    var a = "Hello";
    console.log(a);
  }
  console.log(i);
  console.log(a);
}
greet();

//let keyword -- block scope
function greetings() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // console.log(i); -- i is not defined -- let variable value used only in block this is outside the block
}
greetings();

//const keyword
const name = "Nandhini";
// name = "Kumar"; -- TypeError: Assignment to constant variable.

//Objects
const details = {
  firstName: "Nandhini",
  lastName: "Kumar",
  work: function () {
    console.log("HI");
  },
  hobby() {},
};

details.work();
console.log(`Last name is ${details.lastName}`);
details["lastName"] = "kumarr"; //bracket notation
console.log(details.lastName);

//objects basics -- dot, bracket notation and this keyword
const person = {
  names: ["Nandy", "priya"],
  age: 24,
  bio: function () {
    console.log(`${this.names[0]} ${this.names[1]} is ${this.age} years old`); //this used to refer current objects
  },
};

console.log(person.names); //dot notation
console.log(person.names[0]);
console.log(person["age"]); //bracket notation
person.bio();

const value = person.bio.bind(person); //if we didnot give bind in this lines means it shows undefined
value();

//normal function
const square = function (num) {
  return num * num;
};
//arrow function
const cube = (num) => num * num * num;
const sq = (num) => {
  return num * num;
};

console.log(square(5));
console.log(cube(5));
console.log(sq(5));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];
const actJobs = jobs.filter(function (active) {
  return active.isActive;
});
console.log(actJobs);
const aJobs = jobs.filter((active) => active.isActive);
console.log(aJobs);

//before destructing
const data = {
  Fname: "Nandhini",
  age: 25,
  gender: "Female",
};
let n = data.Fname;
let a = data.age;
let g = data.gender;
console.log(n);
console.log(a);
console.log(g);

//after destructing
let { Fname, age, gender } = data;
console.log(Fname);
console.log(age);
console.log(gender);

//spread operator
const arr = ["My", "Name", "is", "Nandy"];
console.log(arr);
console.log(...arr); //to concat array values
console.log("my", "Name", "is", "nandy");

//copy array using spread
const arr1 = ["one", "two"];
const arr2 = [...arr1, "three", "four"];
console.log(arr2);

//clone array using spread
let arr3 = arr2;
console.log(arr3);
console.log(arr2);

arr2.push("five");
console.log(arr3);
console.log(arr2);

//rest parameter
let func = function (args) {
  console.log(args);
};
func(4, 5, 6); // it passes only first arguement 4

let fun = function (...arg) {
  console.log(arg);
};

fun(3); //[3]
fun(4, 5, 6); //[4,5,6] //using rest parameter we can give multiple args

//Constructor function
function Lname() {
  (this.name = "Nandy"), (this.age = 25);
}

const ln = new Lname(); // creating an object

//class -- for above pgm instead of using function use class
class Ln {
  constructor(name) {
    this.name = name;
  }
}

const fn = new Ln("NandhiniKumar");
//console.log(fn);--Ln { name: 'NandhiniKumar' }
console.log(fn.name); //NandhiniKumar

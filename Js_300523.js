//If-else Statement
let display = "Nandhini";
let op;
if (display) {
  op = `Hi ${display}`; // -- to add variable value to the string so we use `` this symbol
} else {
  op = "Not welcome";
}
console.log(op);

//logicalcondition
var eng = 65;
var math = 50;
var science = 40;
var tot = 140;
let print;

if ((eng && math && science) > 35 && tot >= 150) {
  print = "Congrats, pass with distinction";
} else if ((eng && math && science) > 35) {
  print = "Congrats, pass in all sub";
} else if (tot > 150) {
  print = "Need to get 150";
} else {
  print = "sorry, failed";
}
console.log(print);

//switch statements
const fruit = "Apple";
switch (fruit) {
  case "Orange":
    console.log("orange rate is 150 perkg");
    break;
  case "Apple":
    console.log("Apple rate is 200 perkg");
    break;
  default:
    console.log(`no rate available for ${fruit}`);
}

//ternary operator -- same as if else but we give all statement in one line
const age = 25;
const loan = age >= 21 ? "success" : "Failed"; // if age >=21 means loan gets success or else it failed
console.log(loan);

//while loop
let i = 0;
while (i < 50) {
  console.log(i);
  i = i + 1;
}

//do while
let n = 0;
do {
  console.log(n);
  n = n + 1;
} while (n < 50);

//for loop
for (i = 0; i < 50; i++) {
  console.log(i);
}

//continue
let txt = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  txt = txt + i;
}
console.log(txt); // op = "012456789"

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text = text + i;
}
console.log(text); //op =012

//functions
function add() {
  return 2 + 2;
}
console.log(add(10, 2)); // default value inside funs is executed

function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(10, 2)); //func call

//slice
console.log("name@gmail.com".slice(0, "name@gmail.com".indexOf("@"))); //split before @

//using functions slice
function getUserName(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserName("abc@gmail.com"));

//Lexical scoping
function myname() {
  var myFirstname = "Nandhini"; //local variable
  function fname() {
    // inner functions that forms closure
    console.log(myFirstname); //taken the variable value from parent functions
  }
  fname();
}
myname();
// console.log(myFirstname); -- error shown -- ReferenceError: myFirstname is not defined

//closure
function init() {
  var ln = "Kumar";
  //console.log("I am Nandhini");
  function lname() {
    console.log(ln);
  }
  return lname;
}
var value = init(); // ref of function is hold here, if declare this only means it doesnot give any op but if any log is there inside init()then it display that
value(); //for us its shows as value for memory it shows as lname -- whatever lname value it shows as op in value()

function doadd(x) {
  return function (y) {
    return x + y;
  };
}
var add = doadd(4);
console.log(add(5));
console.log(doadd(5)(5)); //without any reference it works on just by parse args -- curring

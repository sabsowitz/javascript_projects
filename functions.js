// JavaScript is more function based, Ruby is more object oriented.
// JavaScript can store anything in variables (including functions).

//declare a function
function plus5(num) {
  return (num || 0) + 5;
}

// alternate form
var plus5 = function(num) {
  return (num || 0) + 5;
}

// call function
var x = plus5(3); // x = 8

// Why is this cool?
function flatTax(salary) {
  return salary * 0.12; // 12% flat tax
}

function progressiveTax(salary) {
  is (salary < 40000) { // first 40000 taxed at 10%
    return salary * 0.10;
  }
  else {                // remainder taxed at 15%
    return 4000 + (salary - 40000) * 0.15;
  }
}

var taxReform = getTaxReform(); // true or false
var taxFunction = taxReform ? flatTax : progressiveTax;
console.log("Tax on 60000 = " + taxFunction(60000));

//    Functions as 1st Class Citizens
//    In CS, a programming is said to have first-class functions
//    if it treats functions as "first-class citizens."
//    This means:
// -Assigning functions to variables.
// -Storing functions within data structures.
// -Passing functions as arguments to other functions.
// -Returning functions as the value from other functions.

function getTaxFormula(getTaxReform) {
  return getTaxReform() ? flatTax : progressiveTax;
}

function getTaxReform() { ... }
console.log("Tax on 80000 = " +
  getTaxFormula(getTaxReform)(80000));

// Anonymous Functions
function foo(){
  //this is a named function...
}

function() {
  //this is an anonymous function...
}

//  Common uses:
// -stored in an object key's value
// -stored in a variable inside an object
// -passed around as application data (callback or handler)
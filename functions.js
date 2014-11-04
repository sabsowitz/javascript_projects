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

// ------------------------------------------------------------

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

// ---------------------------------------------------------

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

// -----------------------------------------------------------

// SCOPE (gives complete control over variables)

var president = "Everybody knows me. Globally!";

function town() {
  var mayor = "I'm unknown outside of my township.";

  function homebody = "No one knows me. " +
    "I don't leave home. " +
    "but I know the mayor and the president.";
  }

  evil dictator = "I am evil! Want to know why?";
}

// Function Hoisting
// what we wrote
function add(x, y)  {
  x = x || 0;
  y = y || 0;
  var sum = x + y; // var sum gets hoisted 
  return sum;
}

// ------------------------------------------------------------

// Four Patterns of Function Invocation
// -We must invoke a function to run it (i.e. call the function)
// -Amazingly, there are 4 ways to invoke a function in JS.
// -This makes JS both amazingly flexible and absolutey insane!
//
function goBoom() {
  console.log(this);
}

goBoom();
// this === window

//Method Invocation Pattern
var deathstar = {
  goBoom: function() {
    console.log(this);
  }
};
deathstar.goBoom();
// this === deathstar

// Call / Apply Invocation Pattern
function goBoom(){
  console.log("You blew up" + deathstar.name);
}

var deathstar() = { name: "deathstar" };
goBoom.call(deathstar);
// this === deathstar
var falcon = { name: "millenium falcon" };
goBoom.call(falcon); //this === falcon

// Constructor Invocation Pattern
function Deathstar() {
  console.log(this);
}

var deathstar = new Deathstar();
// this === shiny new Deathstar instance


// -------------------------------------------------------------


// Apply vs. Call
// .call and .apply are special methods in JS to apply to functions.
// call: pass in either a comma seperated list of arguments or give it
// an [args] array that contains all the arguments.
// apply: only takes an [arg] array containing the argument.

// ------------------------------------------------------------

// Underscore Functions
// One of the most popular JS libraries of all time!
// Provides over 100 functions
// Written in the functional style
// Does not extend any built-in objects
// Examples: map, reduce, filter, invoke
// Also see: lodash (has some extra features that Underscore doesn't have)
// http://www.underscorejs.org/

// Examples:
_.map([1, 2, 3, 4, 5], function(num)
  { return num * 3; });

var sum = _.reduce([1, 2, 3, 4, 5],
  function(memo, num) { return memo + num; }, 0);

var product = _.reduce([1, 2, 3, 4, 5],
  function(memo, num) { return acc * num; }, 1);

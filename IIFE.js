// Immediately Invoked Function Expression //
var counter = (function() { // The variable is set to the function.
  var i = 0;
  return { // Beginning of the closure 
    get: function() { return i; }, 
    set: function( val ) { i = val; },
    increment: function() {
      return ++i;
    }
  };
}());

counter.set(100);
counter.get();        // => 100
counter.increment();  // => 101
counter.increment();  // => 102
counter.get()         // => 102


// Garbage Collection
// Form of automatic memory management, and the opposite of manual memory management.
// The Garbage Collector attempts to reclaim garbage, or memory occupied by the objects
// they belong to, that are no longer in use by the program.
// Two types of memory --> Stack and Heap (google-fu)


// Closures //
var sum = function(a, b) { return a + b; };
console.log(sum(2, 3));

var adder = function(a) {
  return function(b) { return a + b; };
};
adder(3)(5);

// Object Literals \\
var samson = {
  name: "Samson",
  speak: function() { return this.name + " says woof."; }
};


// Object Constructors

// Dog Constructor
function Dog(name) {
  this.name = name;
  this.speak = function() { return this.name + " says woof."; };
}
//Create some dogs
var samson = new Dog("Samson");
var saisy = new Dog("Daisy");
// Make them speak
console.log(samson.speak()); // samson says woof
console.log(daisy.speak()); // daisy says woof

// Prototypal Inheritance
// JS, being a loosely typed language, never casts. The lineage of an object doesn't matter.
// What matters about an object is what it can do, not what it is descended from.
// In classical languages, objects are instances of classes, and a class can inherit from another class.
// JS is a prototypal language, which means that objects inherit directly from other objects.

Dog.prototype.speak = function() {
  return this.name + " says woof.";
}

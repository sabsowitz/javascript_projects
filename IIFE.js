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



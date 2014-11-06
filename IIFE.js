// Immediately Invoked Function Expression
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

// Garbage collection (Managing memory) 
// Stack and Heap
// Heap memory. Large pool of memory. 



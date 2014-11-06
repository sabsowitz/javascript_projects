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

counter.get();
counter.set(3);
counter.increment();
counter.increment();

// Garbage collection --> manually manage all memory. Stack heap.


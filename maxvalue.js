var x = [1, 2, 3]

// max value of array of integers - flavor #1
function max1(x) {
  var result = x[0];
  for (var i=0; i<x.length; i++) {
    result = (result > x[i] ? result : x[i] )
  }
  return result;
}
console.log("max1 = " + max1(x));

// max value of array of integers - flavor #2
console.log("max2= " + Math.max.apply(Math, x));

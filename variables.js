var x = [1, 2, 3];

// sum of array of integers - flavor #1
function sum1(x) {
  var result = 0;
  for (var i=0; i<x.length; i++) {
    result += x[i];
  }
  return result;
}
console.log("sum1 = " + sum1(x));

// sum of array of integers - flavor #2
function sum2(x) {
  return x.reduce(function(a, b) { return a + b; })
}
console.log("sum2 = " + sum2(x));
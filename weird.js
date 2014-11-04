var weird = [1, 40, "bob", [], false, 89];

function getNumbers(array){
  var numbers = [];
  for (var i = 0; i < array.length; i++){
    if(typeof array[i] === 'number'){
      numbers.push(array[i]);
    }
  }
  return numbers;
}

function sum(array) {
  var sum = 0;
  for (var i=0; i<array.length; i++){
    sum = array[i] + sum;
  }
  return sum;
}

var weird = [1, 40, "bob", [], false, 89];
var theNumbers = getNumbers(weird);
console.log("the sum = " + sum(theNumbers));
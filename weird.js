var weird = [1, 40, "bob", [], false, 89];

function sum(array){
  var sum = 0;
  for (var i = 0; i < array.length; i++){
    if(typeof array[i] === 'number'){
      sum += array[i];
    }
  }
  console.log(sum);
}
sum(weird);
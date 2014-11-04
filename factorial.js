function fact(n) {
  var result;

  console.log("You called the fact with n = " + n);

  if (n == 1) {
    result = 1
  }
  else {
    result = n * fact(n-1); // recursive call
  }

  console.log("we calculated fact(" + n + ") = " + result);
  return result;
}

console.log("The factorial of 5 = " + fact(5));
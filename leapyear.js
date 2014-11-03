function isLeapYear(year) {
  return (year % 400 == || ((year % 4 ==0) && (year % 100!=0)));
 }

for (var year = 1900; year <= 2014; year++) {
  if (isLeapYear(year)) {
    console.log("The year " + year + " is a leap year!");
  }
 }

 isLeapYear()
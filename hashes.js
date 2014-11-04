// # create a hash (Ruby)
stephen = {
  name: "stephen",
  age: 27 

// simple objects look like hashes
var stephen = {
  name: "stephen",
  "age": 27 // quotes are optional unless it's JSON
};

// # Print the age (Ruby)
// # puts "age: #{stephen[:age]"

// Print the age
console.log("age: " + stephen["age"]); // OR
console.log("age: " + stephen.age);

// # increment age (Ruby)
// stephen[:age] = stephen[:age] + 1;

// stephen.keys.each do |key|
//   puts "#{key}: #{stephen[key]}"
// end

//increment age
stephen.age = stephen.age + 1;

for (key in stephen) {
  console.log(key, ':' stephen[key]);
//console.logy(key, ':', stephen.key);
}

function Pet(petName, ownerName, petAge, petSpecies) {
  this.petName = petName;
  this.ownerName = ownerName;
  this.petAge = petAge;
  this.petSpecies = petSpecies;
}

Pet.prototype.toString = function() {
  return this.petName + ' is ' + this.ownerName + '\'s ' + this.petAge + ' year old ' + this.petSpecies + '.';
};

var snoopy = new Pet('Snoopy', 'Susan', 3, 'dog');
console.log(snoopy.toString());

var daisy = new Pet('Daisy', 'Stephen', 4, 'dog');
console.log(daisy.toString());

var samson = new Pet('Samson', 'Stephen', 6, 'dog');
console.log(samson.toString());

function Pet(petName, ownerName, petAge, petSpecies) {
  this.petName = petName;
  this.ownerName = ownerName;
  this.petAge = petAge;
  this.petSpecies = petSpecies;
}

Pet.prototype.toString = function() {
  return this.petName + ' is ' + this.ownerName + '\'s ' + this.petAge + ' years old ' + this.petSpecies + '.';
};

var snoopy = new Pet('Snoopy', 'Susan', 3, 'dog');
console.log(snoopy.toString());
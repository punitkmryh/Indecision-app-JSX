const user = {
  name: "punit",
  cities: ["Gulbarga", "Bangalore", "Hyderabad"],
  printPlaceLived() {
    this.cities.forEach((city) => {
      console.log(this.name + " lived in " + city);
    });
  },
};
user.printPlaceLived();

// using mapfunction
const pk = {
  name: "Pkmr",
  locations: ["SK", "India"],
  placeLived: function () {
    const locMsg = this.locations.map((city) => {
      return user.name + " lived in " + city + "!";
    });
    return locMsg; //(2) ["punit lived in UK!", "punit lived in India!"]
  },
};
console.log(pk.placeLived());
console.log(pk.locations); //["UK", "India"]

// Using map function clean code
const pkmr = {
  name: "Punitkumar",
  locations: ["SK", "India"],
  placeLiked() {
    return this.locations.map((city) => this.name + " loved " + city);
  },
};

console.log(pkmr.placeLiked());

// challenge
const multi = {
  numbers: [1, 2, 3, 4, 5],
  multiBy: 2,
  multiply() {
    return this.numbers.map((num) => this.multiBy * num);
  },
};

console.log(multi.multiply());
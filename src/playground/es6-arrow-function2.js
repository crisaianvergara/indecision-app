const add = (a, b) => {
  return a + b;
};

console.log(add(55, 1));

const user = {
  name: "Andrew",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city + "!");
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number);
  },
};

console.log(multiplier.multiply());

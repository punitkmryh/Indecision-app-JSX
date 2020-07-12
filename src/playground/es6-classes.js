class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreetings() {
    return `Hi, this is ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is of ${this.age} year's old.`;
  }
}

class student extends Person {
  constructor(name, age, major = "Undecided") {
    // ^ fetch super class's attributes and methods
    super(name, age);
    this.major = major;
  }
  getDetails() {
    return `Student ${this.name}  is in ${this.major}`;
  }
  hasMajor() {
    return !!this.major;
  }
  //  ^ Overriding super class method
  getDescription() {
    let desc = super.getDescription();
    return `${desc} is ${this.major}`;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreetings() {
    let greeting = super.getGreetings();
    if (this.homeLocation) {
      greeting += ` I am from ${this.homeLocation}`;
    }
    return greeting;
  }
}
const me = new student("pkmr", 26, "CSE");
console.log(
  me,
  me.getGreetings(),
  me.getDescription(),
  me.getDetails(),
  me.hasMajor()
);

const other = new Person("Andrew", 29);
console.log(other.getDescription());

const loneRanger = new Traveller("Pkmr", 26, "NYC");
console.log(loneRanger.getGreetings());
console.log(loneRanger.getDetails());

//Fuction in js are objects they have properties and methods we can use
const person = {
  name: "Yashas",
  walk() {
    console.log(this);
  },
  talk() {}
};
person.name = "Yash";
const inputUI = "name"; //use const to specify constant fields required
person[inputUI] = "Yash"; //use the created const to save value instead of hardcoding it as person['name']

person.walk();

const walk = person.walk; //window object restricted sometimes so we use bind method
walk();

const walk1 = person.walk.bind(person); //binding person object. using bind we can see set value pf `person.walk()->this` permanently
walk1(); //access object by calling walk1 const.using bind we get a new function where value of `this` is based on
//arguement we passed as `person` to the bind method

//Arrow Function
const square = function (number) {
  //legacy
  return number * number;
};
const squarenew = (number) => number * number; //add () when no parameters
//and if its single parameter just add the parameter with or without paranthesis
console.log(squarenew(3));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
]; //array of objects

const activeJobOld = jobs.filter(function (job) {
  return job.isActive;
}); //legacy
const activeJob = jobs.filter((job) => job.isActive); //arrow fuction
console.log(activeJob);

//Maps and Template literals
const colors = ["red", "yellow", "blue"];
const colorlistOld = colors.map((color) => "<li>" + color + "</li>"); // mapping without template literals
const colorlist = colors.map((color) => `<li>${color}</li>`); //mapping with template literals
console.log(colorlist);

//Object Destructing
const address = {
  street: "1",
  city: "2",
  country: "1"
};
const streetold = address.street;
const cityold = address.city; //without destructing
const countryold = address.country;

const { street, city, country } = address; //with destructing
console.log(street + "," + city + "," + country);

//Spread Operator
const first = [1, 2, 3];
const second = [5, 6, 7];
const combinedOld = first.concat(second); //without spread operator
const combined = [...first, 4, ...second, 8]; //with spread operator
console.log(combined);
const job = { jobname: "Dev" };
const nameAndJob = { ...person, ...job }; //Object spreading
console.log(nameAndJob);

//Class
class Emp {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log(this);
  }
}
const empwalk = new Emp("Yashas");

//Inheritance
class dept extends Emp {
  constructor(name, depname) {
    super(name);
    this.depname = depname;
  }

  talk() {
    console.log(this);
  }
}

const dep = new dept("yashas", "dev");

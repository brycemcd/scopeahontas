function Person() {
  this.firstName = "Bryce";
  this.lastName  = "McD";
}

var person1 = new Person();
console.log('first: ', person1.firstName); // Bryce

var x = person1.firstName;
console.log('second: ', x); // Bryce
x = "Charlie";

console.log('third: ', x); // Charlie
console.log('fourth: ', person1.firstName); // Bryce

var personObject = {
  firstName: "Sophie",
  lastName:"Dow"
}

var person2 = personObject;

console.log("objLiteral: ", personObject.firstName); //Sophie
console.log("variable from obj: ", person2.firstName); // Sophie

person2.firstName = "Ashley";

console.log("objLiteral changed?: ", personObject.firstName); // Ashley
console.log("variable from obj changed?: ", person2.firstName); // Ashley

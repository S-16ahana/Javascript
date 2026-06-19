
// ## Question 1

// ```js
// const patient = {
//   name: "Rahul",
//   age: 25
// };
// ```

// In this object:

// 1. How many properties are there? there are two properties(key:value)pairs name:"rahul" age:25
// 2. What are their names?name:"rahul" age:25

// ---

// ## Question 2

// ```js
// const doctor = {
//   name: "Ramesh",

//   greet() {
//     console.log("Hello");
//   }
// };
// ```

// 1. Which is the property? name: "Ramesh"
// 2. Which is the method?   greet() {
//     console.log("Hello");
//   }

// ---

// ## Question 3

// What is the output?

// ```js
// const student = {
//   name: "Sahana"
// };

// console.log(student.name);  sahana
// ```

// ---

// ## Question 4

// What is the output?

// ```js
// const patient = {
//   name: "Rahul",

//   showName() {
//     console.log("Patient");
//   }
// };

// patient.showName(); patient
// ```

// ---

// ## Question 5

// True or False?

// > A method is a function inside an object.
// true
// ---

// ## Question 6 (Real Project)

// Suppose you have:

// ```js
// const patient = {
//   id: 101,
//   name: "Rahul",
//   bloodGroup: "O+"
// };
// ```

// Which of these are properties?

// A. `id`

// B. `name`

// C. `bloodGroup`

// D. All of the above this is correct ans

// ---


// Interview Question (Slightly Tricky)

// What is the output?

// const doctor = {
//   name: "Ramesh"
// };

// console.log(doctor.age);

// A. Ramesh

// B. age

// C. undefined ans

// D. Error

// Another One
// const patient = {
//   name: "Rahul"
// };

// patient.age = 25;

// console.log(patient); 

// const doctor = {
//   name: "Ramesh"
// };

// doctor.name = "Suresh";

// console.log(doctor); olp doctor = {
//   name: "Suresh"
// };

// Questions
// What is the output?doctor = {
//   name: "Suresh"
// };
// Did we add a new property or update an existing property? updated existing one value
// After execution, how many properties does the object have? 1



// * What an object is object is an collection of key value pais and like array stores orderd data the object stores named data 
// * Properties (keys and values) name:"sahana" name is key and sahana is value
// * Accessing properties using `.` yes
// * Adding new properties
// * Updating existing properties
// * Accessing non-existing properties (`undefined`)

// These are the fundamentals of objects.

// Before moving on, there are only **2 tiny concepts** worth knowing about objects:

// ### 1. Delete a property

// ```js
// const patient = {
//   name: "Rahul",
//   age: 25
// };

// delete patient.age;

// console.log(patient);
// ```

// Output:

// ```js
// {
//   name: "Rahul"
// }
// ```

// ---

// ### 2. Bracket notation

// You already know:

// ```js
// patient.name
// ```

// Same thing can be written as:

// ```js
// patient["name"]
// ```

// Output:

// ```js
// Rahul
// ```

// You'll use bracket notation when the property name comes from a variable:

// ```js
// const key = "name";

// console.log(patient[key]);
// ```

// Output:

// ```js
// Rahul
// ```

// For now, just know it exists.

// ---

// ## Next Topic: Methods

// You already know the definition:

// > A method is a function inside an object.

// Now we'll learn:

// 1. Why methods are useful
// 2. How methods access object data
// 3. The connection between methods and `this`
// 4. Common interview questions on methods

// The next topic naturally leads into the most important OOP concept in JavaScript:

// ```js
// this
// ```

// which is asked in almost every JavaScript interview.

// So yes, let's move to **Methods → `this`** next.
// const patient = {
//   name: "Rahul",

//   showDetails() {
//     console.log("Patient Details");
//   }
// };

// patient.showDetails()


// Question 1
// const patient = {
//   name: "Rahul",

//   greet() {
//     console.log("Hello");
//   }
// };

// How many:

// Properties? 1
// Methods?1
// Question 2

// Output?

// const doctor = {
//   greet() {
//     console.log("Hello Doctor");
//   }
// };

// doctor.greet(); Hello Doctor
// Question 3

// Output?

// const doctor = {
//   greet() {
//     console.log("Hello Doctor");
//   }
// };

// console.log(doctor.greet);  greet function 

// Notice carefully:

// doctor.greet

// vs

// doctor.greet()

// They are not the same thing.

// Question 4 (Important)
// const patient = {
//   name: "Rahul",

//   showName() {
//     console.log(this.name);
//   }
// };

// patient.showName(); rahul


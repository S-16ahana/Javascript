

// ### 1. Create a Person Object

// Create an object with:

// ```js
// name
// age
// city
// ```

// const user = {
//   name:"sahana",
//   age: 24,
//   city:"Dharwad"
// }
// console.log()
// // Print all values.
// console.log(user)
// console.log(user.name)
// console.log(user.age)
// console.log(user.city)
// ---

// ### 2. Add a Method

// Create:

// ```js
// const student = {
//   name: "Sahana",
//   greet(){
//     console.log("Hello" +""+ this.name)
//   }
// }

// student.greet()
// ```

// Add a method:

// ```js
// greet()
// ```

// Output:

// ```js
// Hello Sahana
// ```

// ---

// ### 3. Update Property

// Create:

// ```js
// const doctor = {
//   name: "Ramesh",
//   city: "Hubli"
// }

// doctor.city = "Bangalore"
// console.log(doctor.city)
// console.log(doctor)
// ```

// Change city to:

// ```js
// Bangalore
// ```

// Print object.

// ---

// ### 4. Use `this`

// Create:

// ```js
// const employee = {
//   name: "Rahul",
//   greet : function(){
//     console.log("I am " + this.name)
//   }
// };

// employee.greet()
// ```

// Use `this.name` inside a method.

// Output:

// ```js
// I am Rahul
// ```

// ---

// ### 5. Constructor Function

// Create:

// ```js
// function Car(brand, model){
//   this.brand=brand;
//   this.model=model;
// };

// let car1 = new Car("Toyota"," Corolla")
// let car2 = new Car("Honda"," City")

// console.log(car1)
// console.log(car2)
// ```

// Create two cars.

// Output:

// ```js
// Toyota Corolla
// Honda City
// ```

// ---

// ### 6. Constructor + Method

// Create:

// ```js
// function Patient(name){
//   this.name=name;
//   checkup=function(){
//     console.log("Patient "+this.name+" Checked" )
//   }
// };

// let pat = new Patient ("Sahana")

//  pat.checkup()

// function Patient(name){
//   this.name = name;

//   this.checkup = function(){
//     console.log("Patient " + this.name + " Checked");
//   }
// }

// let pat = new Patient("Sahana");

// pat.checkup();
// ```

// Add:

// ```js
// checkup()
// ```

// Output:

// ```js
// Patient Sahana checked
// ```

// ---

// ### 7. Create 3 Objects Using One Constructor

// Create:

// ```js
// Doctor
// ```

// function Doctor(name){
//   this.name=name;
// }

// var user1 = new Doctor("Ramesh")
// var user2 = new Doctor("Suresh")
// var user3 = new Doctor("mahesh")

// console.log(user1);
// console.log(user2);
// console.log(user3);

// objects:

// ```js
// Ramesh
// Suresh
// Mahesh
// ```

// Print all.

// ---

// ### 8. Prototype Property

// ```js

// function Doctor(name){
//   this.name=name;
// }
// Doctor.prototype.city = "Bangalore"
// var user = new Doctor("Ramesh")
// console.log(user.city);
// ```

// Create object and print:

// ```js
// doctor.city
// ```

// Understand why it works.

// ---

// ### 9. Prototype Method

// Create:

// ```js
// function Doctor(name){
//   this.name=name;
// }
// Doctor.prototype.greet= function(){
//    console.log("Hello" + this.name)
// }

// let user = new Doctor("Doctor")
// user.greet()
// ```

// Call:

// ```js
// doctor.greet()
// ```

// Output:

// ```js
// Hello Doctor
// ```

// ---

// ### 10. Property Shadowing

// ```js
// Doctor.prototype.city = "Bangalore"
// ```

// Then:

// ```js
// doctor.city = "Mysore"
// ```

// Print:

// ```js
// doctor.city
// ```

// and explain why.

// ---


function Doctor(name){
  this.name=name;
}
Doctor.prototype.city = "Bangalore"

var user = new Doctor("Ramesh")
user.city= "Mysore"
console.log(user.city);
console.log(user);
//Mysore because the shared prototype is updated 



// # Part 1 — Functions Basics (1–20)

// ## Beginner Level

// 1. Create a function named `greet` that prints `"Hello World"`.
// function greet(){
//   console.log("Hello world")
// }

// greet()
// 2. Create a function `add(a, b)` that returns the sum.
// function add(a,b){
//   let sum = a+b
//   return sum
// }
// console.log(add(2,2))

// 3. Write a function to calculate the square of a number.
// function squareOfNum(a){
//     var square=a*a;
//     return square;
// }

// let result = squareOfNum(2);
// console.log(result)


// 4. Create a function that checks whether a number is even or odd.
// function evenOrOdd(a){
//   if(a%2===0) console.log("Even")
//     else console.log("ODD")
// }
// evenOrOdd(4)


// 5. Write a function that converts Celsius to Fahrenheit.
// function Fahrenheit(a){
//   let F = a*1.8+32
//   return F
// }
// let result = Fahrenheit(1)
// console.log(result)

// 6. Create a function with default parameter `"Guest"`.
// function random("Guest"){

// }
// random()


// ## Intermediate Level

// 1. Write a function expression for multiplication.
// let mul = function(a,b){
//   let multiplication = a* b;
//   return multiplication
// }

// let result = mul(2,3)
// console.log(result)


// 2. Convert a normal function into an arrow function.

// Normal fuction
// function sumation(a,b){
//   let sum = a+b;
//   return sum
// }
// console.log(sumation(3,3))

// Arrrow fuction

// let sum=(a,b)=>{
//    let add = a+b
//    return add;
// }
// console.log(sum(3,4))


// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
// function sum(...numbers){
//    let total = 0;
//    for (let n of numbers){
//     total+=n;
//    }
//    return total
// }

// console.log(sum(1,2,3,4,1,5))

// 4. Write a function that counts vowels in a string.
// function vowelCount(str){
//   let count = 0;
//   for(let char of str.toLowerCase()){
//     if(
//       char === "a"||
//       char === "e"||
//       char === "i"||
//       char === "o"||
//       char === "u"
//     ){
//    count++;
//     }
//   }
//   return count
// }

// console.log(vowelCount("sahana"))

// 5. Create a function that checks if a string is palindrome.
// function isPalindrome(str){
//   let reversed = str.split("").reverse().join("");

//   return str === reversed;
// }

// console.log(isPalindrome("madam"))

// 6. Write a callback function example using `setTimeout`.
// function sayHello(){
//   console.log("Say hello babes")
// }

// setTimeout(sayHello , 2000)

// 7. Create a higher-order function that executes another function twice.
// 8. Write a function that returns another function.
// 9. Create a pure function for subtraction.
// 10. Create an impure function using global variable modification.
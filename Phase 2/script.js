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

//Arrays

// // # Part 3 — Arrays Basics (36–55)

// // ## Beginner

// // 1. Create an array of 5 fruits.
// let arr = ["mango","Apple","Graphes","tomato","watermelon"];
// // 2. Print first and last element of array.
// console.log(arr[0])
// console.log(arr[4])
// // 3. Find length of array.

// console.log(arr.length)
// // 4. Add element at end using `push`.
// arr.push("sahana")

// // 5. Remove last element using `pop`.
// arr.pop()

// // 6. Add element at beginning using `unshift`.
// arr.unshift("sahana")

// // 7. Remove first element using `shift`.
// arr.shift()
// // 8. Reverse an array.
// arr.reverse()
// // 9. Sort numbers ascending.
// let arr1=[23,49,1,90,3,5]
// arr1.sort((a,b)=>a-b)
// // 10. Sort numbers descending.
// arr1.sort((a,b)=>b-a)
// // ---

// ## Intermediate

// 1. Use `splice` to remove elements.
// let arra=[1,24,565,89,23,22,45,6,9]
// arra.splice(3,1)

// 2. Use `splice` to insert elements.
// let arra=[1,24,565,89,23,22,45,6,9]
// arra.splice(0,0,34,34)


// 3. Use `slice` to copy array.
// slice creates and shallow copy of original Array 
// let fruits = ["mango","Orange","Banana","Watermelon","Graphes"]
// let fruitsIlike = fruits.slice(0,4)
// console.log(fruits)
// console.log(fruitsIlike)
// 4. Find index of an element.

// console.log(fruits.indexOf("mango"))
// 5. Check if array contains a value.

// 6. Join array elements with .

// let newarr= fruits.join(".")
// 7. Merge two arrays using spread operator.
// let arr1 = [23,65,68,35,"end"]
// let arr2 = ["start",23,56,5,79,90]

// let newarra=[...arr1,...arr2]

// 8. Copy array using spread operator.
// let newar=[...arr2]
// 9. Find maximum value using `Math.max`.

// let arrr=[23,24,46,78,34,457,23]
// console.log(Math.max(...arrr))//NAN ??
// 10. Swap two variables using destructuring.
// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log(a); // 20
// console.log(b); // 10



// # Part 4 — Array Iteration Methods (56–75)

// 1. Use `forEach` to print all numbers doubled.
// let arr = [2,23,45,66,78,902,34]
// arr.forEach(function(num){
//   console.log(num*2);
// })

// 2. Use `map` to square all numbers.
// let arr = [2,23,45,66,78,902,34]
// let newarr = arr.map(function(a){
//   console.log(a*a)
// })

// 3. Use `filter` to get even numbers.
// let arr = [13,2,5,90,6,34,26,14]
// arr.filter(function(n){
//   if(n%2===0){
//     console.log(n)
//   }
// })

// 4. Use `reduce` to calculate sum.
// let arr = [10,20,30,40]
// let sum = arr.reduce(function(accu,curr){
//    return accu+curr
// },0);

// console.log(sum)

// 5. Use `reduce` to find maximum number.
// let arra = [23,456,78,900,3]
// let maxnum=arra.reduce(function(accc,curr){
//     return Math.max(accc,curr)
// },0);
// console.log(maxnum)

// 6. Use `find` to get first even number.
// let arr = [3,67,2,5,6,8];
// let eve = arr.find(function(n){
//   return n%2===0 ;
// })
// console.log(eve)

// 7. Use `findIndex` to locate number > 50.
// let arr = [23,45,2,4,51,4,56,90]
// let ind = arr.findIndex(ele=>ele>50)
// console.log(ind);


// 8. Use `some` to check if any number is negative.

//  let arr = [23,45,2,4,51,4,56,90,-2]
// let ind = arr.some(ele=>ele<0)
// console.log(ind);
// 9. Use `every` to check if all numbers are positive.
//  let arr = [23,45,2,4,51,4,56,90]
// let ind = arr.every(ele=>ele>0)
// console.log(ind);

// 10. Create array of names and convert all to uppercase.
// let names= ["sahana","kadrolli"]
// let uppnames=names.map(e=>e.toUpperCase(e))
// console.log(uppnames)

// 11. Filter all students with marks > 80.
// let marks = [23,89,75,91,93,89,85]
// let filterede = marks.filter(e=>e>80)
// console.log(filterede)

// 12. Calculate average using reduce.
// let arr = [23,45,78,90,67]
// const avg = arr.reduce((sum,value)=>sum+value,0)/arr.length;
// console.log(avg);

// 13. Count occurrences of numbers in array.
// 14. Flatten nested arrays using `flat`.
// let arr = [[1,3],[4,5],[8,9]]
// let flattened = arr.flat()
// console.log(flattened)
// 15. Remove duplicates using `Set`.
// 16. Sort array of objects by age.
// 17. Find total price of shopping cart.
// 18. Group users by age.
// 19. Chain `filter` and `map`.
// 20. Explain difference between `map`and forEach.

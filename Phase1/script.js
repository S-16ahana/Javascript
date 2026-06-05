// ## Console & Basics
// 1. Print `"Hello JavaScript"` in the console.
// console.log("Hello Javascript")

// // 2. Print your name, age, and city using one `console.log()`.
// var name='sahana'
// var age = 24
// var city ='Dharwad'
// console.log(`my name is ${name} and age is ${age} and city is ${city}`)

// // 3. Print a warning message using `console.warn()`.
// console.warn("This is a warning message babe")

// // 4. Print an error message using `console.error()`.
// console.error("This is an Error message babe")

// // 5. Use `console.table()` to display an array of 5 numbers.
// console.table([1,2,3,4,5,6])

// // ## Variables

// // 1. Create a variable called `studentName` and store your name in it.
// var studentName = 'sahana'

// // 2. Create a variable `age` and print it.
// var age = 24
// console.log(age);

// 3. Create two variables and swap their values.
// var a=24
// var b=34
// var temp = a
// a=b
// b=temp
// console.log(a)
// console.log(b)

// OR

// var a = 24;
// var b = 34;

// [a, b] = [b, a];

// console.log(a); // 34
// console.log(b); // 24
// // 4. Create a constant variable for `PI` and print it.
// const PI = 3.17;
// console.log(PI);

// // 5. Declare a variable without assigning a value and print it.
// var t;
// console.log(t);  //undefined

// // 6. Create a variable `score` and increase it by 10.
// var score =1;
// score+=10;
// console.log(score)

// // 7. Create three variables for first name, last name, and full name.
// var firstName = 'Sahana'
// var lastName ='Kadrolli'
// var fullName = firstName+""+lastName
// console.log(fullName)




// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
// var str = 'Sahana'
// let age = 24
// let bool = true
// let nullval =null
// let a //undefined

// console.log(typeof(age))
// console.log(typeof(str))
// console.log(typeof(bool))
// console.log(typeof(nullval))
// console.log(typeof(a))

// 2. Check the type of different variables using `typeof`.
// console.log(typeof(age))
// console.log(typeof(str))
// console.log(typeof(bool))
// console.log(typeof(nullval))
// console.log(typeof(a))

// 3. Store your mobile number in a variable and check its type.
// let phoneNumber = 9901376280
// console.log(typeof(phoneNumber))//number

// 4. Create a variable with value `null` and check its type.
// let valnull = null
// console.log(typeof(valnull)) //object this is purposely given by developer intentionally as null,also as the js was developed in span of 10 days it had lots of drawback one of them is type of null is object

// 5. Create a bigint number and print it.
// let bignum=1234567898765432345678n;
// console.log(typeof(bignum))
// ---


// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
// let str = "50";
// let num = Number(str);
// console.log(typeof(num))//Number

// 2. Convert the number `100` into a string.
// let numb = 100;
// let strr = String(numb)
// console.log(typeof(strr))//String

// 3. Convert `"true"` into a boolean.
// let str = "true"
// console.log(typeof(str))
// let bool = Boolean(str)
// console.log(bool)

// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`

// console.log("5" + 2)//52
// console.log("5" - 2)//3
// console.log(true + 1)//2


// 1. Create a variable with value `"123abc"` and convert it into a number.
// var val = "123abc"
// var numb = Number(val);
// console.log(typeof(numb)) //Number
// console.log(numb) //NaN

// 2. Use `parseInt()` on `"500px"`.
// var str = "500px"
// var int = parseInt(str);
// console.log(int)//500  parseInt converts string to number also removed px
// ---


// ## Operators

// 1. Add two numbers and print the result.
// let a = 10;
// let b = 20;
// console.log(a+b)

// 2. Find the remainder when 25 is divided by 4.
// console.log(25%4);

// 3. Find the square of a number using exponent operator.
// console.log(2 ** 2)

// 4. Increment a variable using `++`.
// let a = 10;
// a++;
// console.log(a)

// 5. Decrement a variable using `-`.
// let a = 10;
// a--;
// console.log(a)

// 6. Use `+=` operator to increase a variable by 20.
// var a = 0;
// a+=20;
// console.log(a)

// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.
// let a =25;
// let b =33;
// console.log(a>b) //false
// console.log(a<b) //true
// console.log(a>=b) //false
// console.log(a<=b) //true

// 8. Check if two values are strictly equal using `===`.
// let a = 23;
// let b ="23";

// console.log(a===b)//false

// // 9. Compare `"10"` and `10` using both `==` and `===`.
// let a = 10;
// let b ="10";

// console.log(a===b)//false
// console.log(a==b)//true

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
// let a = 56;
// let b= 23;
// console.log(a && b)//23
// console.log(a||b) //56
// console.log(!a) //false
// console.log(!b) //false


// ---


// ## Numbers & Math

// 1. Round `4.7` using `Math.round()`.
// console.log(Math.round(4.7))

// 2. Find the square root of 81.
// console.log(Math.sqrt(81))


// 3. Find the maximum number from `10, 20, 5, 99`.
// console.log(Math.max(10, 20, 5, 99))

// 4. Generate a random number between 1 and 10.
// console.log(Math.random()*10)+1

// 5. Convert `"99.99"` into an integer.
// console.log(parseInt(99.99));


// 6. Check whether `25` is an integer or not.
// console.log(Number.isInteger(25));

// 7. Use `toFixed(2)` on `3.141592`.
// let n = 3.141592;
// console.log(n.toFixed(2))
// // ---



// ## Conditionals

// 1. Check whether a number is positive or negative.
// let a = 12
// if(a>0){
//   console.log("POSITIVE")
// }else{
//   console.log("NEGATIVE")
// }

// 2. Check whether a number is even or odd.
// let b = 3
// if(b%2===0){
//   console.log("EVEN")
// }else{
//   console.log("ODD")
// }

// 3. Check whether a person is eligible to vote.
// let age = 18

// if(age>=18){
//   console.log("Perseon is elegible to vote")
// }
// else{
//   console.log("Not eligible")
// }

// 4. Find the largest among two numbers.
// let a =20
// let b=55

// if(a>b){
//   console.log(`${a} is largest among ${a} and ${b}`)
// } else{
//    console.log(`${b} is largest among ${a} and ${b}`)
// }

// 5. Find the largest among three numbers.
// let a= 33
// let b =2
// let c =190

// if(a>b && a>c) console.log(`${a} is largest among ${a},${b},${c}`);
// else if(b>a && b>c) console.log(`${b} is largest among ${a},${b},${c}`);
// else console.log(`${c} is largest among ${a},${b},${c}`);

// 6. Check whether a year is a leap year.
// LEAP YEAR IS A YEAR WHICH IS DIVISIBLE BY 4 AND THAT YEAR WHICH IS DIVISIBLE BY 4 IF IT IS DIVISIBLE BY 100 ITS NOT A LEAP YEAR BUT IS DIVISIBLE BY 400 IS A LEAP YEAR

// let year = 2000

// if((year%4===0 && year%100!==0)||(year%400===0)){
//      console.log(`${year} is a leap year`)
// }
// else {
//   console.log("Not a leap year")
// }

// 7. Check whether a number is divisible by both 3 and 5.
// let num = 30
// if(num%3===0 && num%5===0){
//   console.log(num, "divisible by 3 and 5")
// }
// else{
//   console.log("Not divisible");
  
// }


// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail

// let grade = 50

// if (grade < 0 || grade > 100) {
//   console.log("Invalid Grade");
// }

// else if(grade >= 90){
//   console.log("A")
// }
// else if(grade >= 75){
//   console.log("B")
// }
// else if(grade >= 50){
//   console.log("C")
// }

// else{
//   console.log("FAIL")
// }

// 1. Check whether a character is a vowel or consonant.
// let letter = prompt("Enter your letter")
// if(letter==="a"||letter==="A"||
//   letter==="e"||letter==="I"||
//   letter==="i"||letter==="O"||
//   letter==="o"||letter==="E"||
//   letter==="u"||letter==="U")
//   {
//   console.log("vowel")
// }else{
//   console.log("Consonant")
// }


// 2. Create a calculator using `switch` statement.
// const operator = prompt("Enter operator (+, -, *, /):");

// let a = Number(prompt("Enter Number"));
// let b = Number(prompt("Enter Number"));

// let result;

// switch (operator) {
//   case "+":
//     result = a + b;
//     console.log(`${a} + ${b} = ${result}`);
//     break;

//   case "-":
//     result = a - b;
//     console.log(`${a} - ${b} = ${result}`);
//     break;

//   case "*":
//     result = a * b;
//     console.log(`${a} * ${b} = ${result}`);
//     break;

//   case "/":
//     result = a / b;
//     console.log(`${a} / ${b} = ${result}`);
//     break;

//   default:
//     console.log("Invalid Operator");
// }
// 3. Print the day name based on a number (1–7).


// 4. Check whether a username is `"admin"` and password is `"1234"`.

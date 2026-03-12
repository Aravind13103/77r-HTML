// var x;
// x = 5;
// var x = 10;
// console.log(x)

// console.log(a);
// var a = 10;
// console.log(a);
// a = 22;
// console.log(a);

// var a = 10
// var b = "10"
// console.log(a >= b);
// console.log(a <= b);
// console.log(a != b);
// console.log(a !== b);
// console.log(a > b);
// console.log(a === b);
// console.log(a == b);
// -----------------------

// var age = 18
// console.log(age>=18?"Adult":"Teen");

// -----------------------

// var num = 12
// console.log(num%2==0?"Even" : "Odd");

//-----------------------

// var score = 97
// console.log(score>=90?"A" : 
//             score>=75?"B" :
//             score>=60?"C" :
//             score>=45?"D" : "F");

// ----------------------

// var temperature = 20
// console.log(temperature > 30?"Hot" :
//             temperature >= 20?"Warm" :
//             temperature >= 10?"Cool" : "Cold"         
// );

//----------------------

// var age_group = 6
// console.log(age_group >= 65 ? "Senior" :
//             age_group >= 20 ? "Adult" :
//             age_group >= 13 ? "Teen" : "Child"
// );

//----------------------------------------------------------------------------------------------------------------------
//  Define a function called greet that logs “Hello!” to the console. Call the function after defining it.

// function greet(){
//     console.log("Hello");
// }
// greet();

//----------------------------------------------------------------------------------------------------------------------

// Write a function named showMessage that logs “This is a message!” to the console. Call the function once after defining it.

// function showMessage(){
//     console.log("This is a message!");
// }
// showMessage();

//----------------------------------------------------------------------------------------------------------------------

//  Create a function called logInfo that prints “Logging Information…” to the console. Call the function after defining it.

// function logInfo(){
//     console.log("Logging Information...");

// }
// logInfo()

//----------------------------------------------------------------------------------------------------------------------


//  Define two functions:
// – startGame that logs “Game Started!”
// – endGame that logs “Game Over!”
//  Inside the startGame function, call the endGame function.

// function startGame() {
//     console.log("Game Started!");
//     endGame();
// }

// function endGame() {
//     console.log("Game Over!");
// }
// startGame();

//----------------------------------------------------------------------------------------------------------------------

// Create two functions:
// – beginTask that logs “Task Started”.
// – finishTask that logs “Task Finished”.
//  Inside the beginTask function, call the finishTask function.

// function beginTask() {
//     console.log("Task Started!");
//     finishTask();
// }
// function finishTask() {
//     console.log("Task Finished");
// }
// beginTask()

//--------------------------
// 11-02-2026 TASK
//--------------------------

// 1. How would you define a function that takes two numbers as parameters and returns their sum?

// function sum(a, b) {
//     return a + b
// }
// console.log(sum(10,11));

// 2. If you define a function that accepts a string as a parameter, how would you modify it to print the string in uppercase?

// function upper(name) {
//     return name.toUpperCase()
// }
// console.log(upper("preeti"));

//3. In JavaScript, what happens if you pass an undefined value as an argument to a function that expects a parameter?

// function undef(name) {
//     return name
// }
// console.log(undef(a));
// var a;

// 4. Suppose you have a function that takes an array as a parameter. How would you check inside the function if the array is empty?

// function empty_array(arr) {
//     if(arr.length === 0) {
//         return "array is empty"
//     }
//     else {
//         return "Not empty"
//     }
// }
// arr1 = [2,4]
// console.log(empty_array(arr1));
// arr2 = []
// console.log(empty_array(arr2));

// 5. write a function that takes two numbers as parameters and returns their difference.

// function diff(num1, num2) {
//     return num1-num2
// }
// console.log(diff(10,2));

// 6. Define a function that accepts a name and age as parameters, and returns a string with a greeting like "Hello, [name]! You are [age] years old."

// function greetings(name, age) {
//     console.log(`Hello, ${name}! You are ${age} years old.`);
// }
// greetings("Aravind", "22");


// 7. Write a function that takes a number as a parameter and returns true if the number is a even number, otherwise false.

// function even(num) {
//     if (num % 2 === 0) {
//         return "True"
//     }
//     return "False"
// }
// console.log(even(22));


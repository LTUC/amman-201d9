'use strict';

// loops ...

// for loop
// 1- counter is assigned
// 2- condition is checked
// 3- code is executed
// 4- update counter
// repeat 2,3,4

// log the numbers from 1 to 10
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// for(var i = 1; i <= 10; i++){
//   console.log(i);
// }

// log the numbers from 10 to 1
// for(var i = 10; i >= 1; i--){
//   console.log(i);
// }

// infinite loop example
// for(var i = 1; i <= 10; i--){
//   console.log(i);
// }


//While loop
// log numbers from 1 to 10
// var j = 1;
// while(j <= 10){
//   console.log(j);
//   j++;
// }

// log numbers from 10 to 1
// var x = 10;
// while(x > 0){
//   console.log(x);
//   x--;
// }

// 1+1
// var answer = prompt('What is the result of 1+1?');
// answer = Number(answer);
// console.log(answer);
// while(answer !== 2){
//   answer = prompt('What is the result of 1+1?');
// }

// ask the user to insert an odd number
// var answer = prompt('insert an odd number');
// answer = Number(answer);
// while(answer % 2 === 0){
//   answer = prompt('insert an odd number');
//   answer = Number(answer);
// }

// do while
// var answer;
// do {
//   answer = prompt('insert an odd number');
//   answer = Number(answer);
// } while(answer % 2 === 0);

// Truthy and Falsy values
// all numbers evaluate to true but not 0
// variables that are not assigned values evaluate to false
// strings evaluate to true, but not ''

// var answer= prompt('What is your name');


// if(answer){
//   alert('welcome '+answer);
//   console.log('the value evaluates to true');
// } else {
//   alert('Hello anonymous!');
//   console.log('the value evaluates to false');
// }

// arrays
var germanCars = ['bmw','mercedes','vw'];
var americanCars = ['cadillac','ford'];
var japaneseCars = ['honda'];

// for(var i=0; i < germanCars.length; i++ ){
//   console.log(germanCars[i]);
// }


var numbers = [3,7,2,4,91,17,26,34,55];

var sum = 0;

for(var i=0; i < numbers.length; i++){
  sum = sum + numbers[i];
}

console.log('sum of array items is ', sum);


// for(var i = 0; i < numbers.length; i++){
//   if(usreNumber === numbers[i]){
//     alert('I have this number in my array !');
//     break;
//   }
// }


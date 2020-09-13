'use strict';
// // global
// var x = 'abc';

// // declaring a function
// function sayHello(){
//   alert('Hello user!');
// }

// // call / invoke a function
// sayHello();

// // declare function with paramerters
// function sayGoodBye(uName){
//   alert('goodbye '+ uName);
// }

// var userName = 'Diana';
// // calling / invoking a function and passing arguments to it
// sayGoodBye(userName);

// // declare function that returns values .. 
// function calculateSum(num1,num2){
//   return num1 + num2;
// }

// var summation = calculateSum(5,10);
// console.log(summation);

// function calculateSumForArray(numbers){
//   console.log(numbers);
// }

// var nums = [1,5,6,7,8];
// calculateSumForArray(nums);

// // anonymous functions
// var anonymousFun = function(){
//   alert('This is the anonymous function');
// };

// // invoke the anonymous function
// anonymousFun();

// var multiply = function(num1, num2){
//   alert(num1*num2);
// };

// multiply(5,10);

// // IIFE
// (function(){
//   alert('This is the IIFE');
// })();


// scope .. local & global  ..
var globalVariable = 'I am a global var!';

for(var i = 0; i < 1; i++){
  console.log('I am the counter inside the array!' , i);
  console.log('Inside for .. can you see the global variable? ', globalVariable);
}



function scoper(x){
  console.log('can you see x from inside the function? ',x);

  var localVariable = 'I am declared inside the function';
  console.log('can you see the local variable from inside the fuction?', localVariable);

  console.log('can you see the global variable from inside the fuction?', globalVariable);

  console.log(' Can I see the for loop counter?! ', i);

  for(var j = 0; j < 1; j++){
    var c = 3;

    console.log('this is c inside the loop' ,c);
    console.log('this is j from inside the loop ',j);
  }

  console.log('this is j from outside the loop, but inside the function',j);
  console.log('this is c outside the loop ',c);
}


scoper('passed value');
console.log('this is j from outside the function', j);
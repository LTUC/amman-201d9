'use strict';

// var carModel = 'Cadillac'; // String (text - set of characters)
// var modelYear = 2009; // Number (integers , doubles)
// var reliablity = .85; // Number
// var isAvailableInJordan = true; // boolean (true, false)

// console.log('The type of carModel is ..  ', typeof carModel);
// console.log('The type of modelYear is ..  ', typeof modelYear);
// console.log('The type of reliablity is ..  ', typeof reliablity);
// console.log('The type of isAvailableInJordan is ..', typeof isAvailableInJordan);

// var answer = confirm('Is Cadillac an American car?');

// Flow control statement - Conditional Statements - if , switch

// if(answer === true){
//   alert('correct answer!');
// } else {
//   alert('Oops! wrong answer');
// }

// var firstBoolean = false;
// var secondBoolean = false;
// var thirdBoolean = false;

// if(firstBoolean && thirdBoolean){ // first = true, third = true
//   console.log('Both firstBoolean and thirdBoolean are true');
// } else if(firstBoolean || secondBoolean) { // first = true OR second = true
//   console.log('At least one of first boolean or second boolean is true');
// } else if (thirdBoolean){
//   console.log('if third boolean ONLY is true');
// } else {
//   console.log('all booleans are false');
// }

// Switch statements

var favCar = prompt('what is your favorite car?').toLowerCase();
console.log(favCar);

if(favCar == 'bmw' || favCar == 'vw' || favCar == 'mercedes'){
  alert('You are more into German cars');
} else if (favCar == 'ford' || favCar == 'cadillac'){
  alert('You are more into American cars');
} else if (favCar == 'honda' || favCar == 'mitsubishi'){
  alert('You are more into Japanese cars');
} else {
  alert('Sorry I don\'t recognize this car');
}

// switch statement
// switch(favCar.toLowerCase()){
//   case 'bmw':
//   case 'vw':
//   case 'mercedes':
//     alert('You are more into German cars');
//     break;
//   case 'ford':
//   case 'cadillac':
//     alert('You are more into American cars');
//     break;
//   case 'honda':
//   case 'mitsubishi':
//     alert('You are more into Japanese cars');
//     break;
//   default:
//     alert('Sorry I don\'t recognize this car')
// }



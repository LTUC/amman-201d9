'use strict';

function Coffee(name, size, milk, isHot, drinkType){
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);
 // localStorage.setItem('allOrders',this);
}

Coffee.drinks = [];

var coffeeObj = new Coffee('Hade', 'med', 'reg', false, 'type');

console.log(coffeeObj);
var jsonObject = JSON.stringify(coffeeObj);

localStorage.setItem('coffeeObject', coffeeObj);
localStorage.setItem('coffeeJson', jsonObject);

console.log(JSON.parse(jsonObject));


// localStorage.setItem('votes',5);
// localStorage.setItem('displaytimes', 10);

// console.log(localStorage.getItem('votes'));

// localStorage.removeItem('votes');

// localStorage.setItem('displaytimes',20);

// Objets in javascript
// An object is an entity that contains properties that describe it's state, and behaviors

// Objects:
// 2 ways -> Object literas

// var objectName = {
// key: value
//}

// create person object

// person
// properties: name, age, gender
// behavior: talk, walk, work, sleep, move

var person = {
  name: 'Hade',
  age: 25,
  gender: 'male',
  favoriteColors: ['red', 'black', 'grey'],
  walk: function() {
    console.log('I am walking ... ');
  }
};

// console.log(person);

// bracket notation - to add a property
// objectname['propertyname'] = value;
person['height'] = 180;
person['talk'] = function(){
  console.log('I am talking ...');
};
// console.log(person);

// dot notation
// changing a property value
person.age = 26;
// console.log(person);

//person.walk();
// console.table(person);

// mobile phone

var mobile = {
  color: 'white',
  price: 200,
  model: 'iPhone',
  sendMessage: function(){
    console.log('sending message ... ');
  }
};

mobile.size = '6 inches';
console.log(mobile);
console.log(mobile['model']);
mobile['model'] = 'samsung';
console.log(mobile);

mobile.sendMessage();


'use strict';
// JavaScript Objects - what are objcts?

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

var cats = [];

function Cat(name, likes, img, isGoodWithKids, isGoodWithDogs, isGoodWithOtherCats, breed) {
  this.name = name;
  this.age = 0;
  this.likes = likes;
  this.img = img;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats;
  this.breed = breed;
  cats.push(this);
}

Cat.prototype.getAge = function () {
  this.age = getRandomNumber(1, 5);
  console.log(this.name + ' is ' + this.age + ' months years old');
};

Cat.prototype.render = function () {
  var parentElement = document.getElementById('kittenProfiles');

  var article = document.createElement('article');
  parentElement.appendChild(article);

  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  var p = document.createElement('p');
  p.textContent = this.age;
  article.appendChild(p);

  var ul = document.createElement('ul');
  article.appendChild(ul);

  for (var i = 0; i < this.likes.length; i++) {
    var li = document.createElement('li');
    li.textContent = this.likes[i];
    ul.appendChild(li);
  }

  var img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.name + '.jpeg');
  img.setAttribute('alt', 'this is an image of ' + this.name);
  article.appendChild(img);

};

var frankie = new Cat('frankie', ['chasin string', 'eating'], 'images/frankie.jpeg', true, false, true, 'british');

// frankie.getAge();
// frankie.render();

var jumper = new Cat('jumper', ['playing', 'eating'], 'images/jumper.jpeg', true, false, true, 'italian');

// jumper.getAge();
// jumper.render();

for(var i = 0; i < cats.length; i++){
  cats[i].getAge();
  cats[i].render();
}

console.log(frankie);
console.log(jumper);






// var frankie = {
//   name: 'frankie',
//   age: 0,
//   likes: ['chasin string', 'eating'],
//   img: 'images/frankie.jpeg',
//   isGoodWithKids: true,
//   isGoodWithDogs: false,
//   isGoodWithOtherCats: true,
//   breed: 'british',
//   getAge: function(){
//     this.age = getRandomNumber(1,5);
//     console.log(this.name + ' is ' +this.age + ' months years old');
//   },
//   render: function(){
//     var parentElement = document.getElementById('kittenProfiles');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     article.appendChild(h2);

//     var p = document.createElement('p');
//     p.textContent = this.age;
//     article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);

//     for(var i = 0; i < this.likes.length; i++){
//       var li = document.createElement('li');
//       li.textContent = this.likes[i];
//       ul.appendChild(li);
//     }

//     var img = document.createElement('img');
//     img.setAttribute('src','images/' + this.name + '.jpeg');
//     img.setAttribute('alt', 'this is an image of ' + this.name);
//     article.appendChild(img);

//   }
// };
// frankie.getAge();
// frankie.render();

// // juumper

// var jumper = {
//   name: 'jumper',
//   age: 0,
//   likes: ['playimg', 'eating'],
//   img: 'images/jumper.jpeg',
//   isGoodWithKids: true,
//   isGoodWithDogs: true,
//   isGoodWithOtherCats: true,
//   breed: 'italian',
//   getAge: function(){
//     this.age = getRandomNumber(1,5);
//     console.log(this.name + ' is ' +this.age + ' months years old');
//   },
//   render: function(){
//     var parentElement = document.getElementById('kittenProfiles');

//     var article = document.createElement('article');
//     parentElement.appendChild(article);

//     var h2 = document.createElement('h2');
//     h2.textContent = this.name;
//     article.appendChild(h2);

//     var p = document.createElement('p');
//     p.textContent = this.age;
//     article.appendChild(p);

//     var ul = document.createElement('ul');
//     article.appendChild(ul);

//     for(var i = 0; i < this.likes.length; i++){
//       var li = document.createElement('li');
//       li.textContent = this.likes[i];
//       ul.appendChild(li);
//     }

//     var img = document.createElement('img');
//     img.setAttribute('src','images/' + this.name + '.jpeg');
//     img.setAttribute('alt', 'this is an image of ' + this.name);
//     article.appendChild(img);

//   }
// };
// jumper.getAge();
// jumper.render();

function getRandomNumber(min, max) {
  var random = Math.random(); // 0 - 1
  random = (random * (max - min + 1)) + min; // less than or equal max
  random = Math.floor(random); // remove fractions
  return random;
}



// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// Create cats

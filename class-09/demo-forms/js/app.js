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

function getRandomNumber(min, max) {
  var random = Math.random(); // 0 - 1
  random = (random * (max - min + 1)) + min; // less than or equal max
  random = Math.floor(random); // remove fractions
  return random;
}

var form = document.getElementById('kitten-form');

form.addEventListener('submit', function(event){
  event.preventDefault();
  console.log(event);
  console.log('name ...' ,event.target.nameField.value);

  var name = event.target.nameField.value;
  console.log('name: ', name);

  var likes = event.target.likesField.value; // 'sleeping,eating'
  console.log('likes:', likes);
  var likesArray = likes.split(',');
  console.log('likes array ', likesArray);

  var isGoodWithDogs = event.target.goodWithDogs.checked;
  console.log(isGoodWithDogs);

  var isGoodWithKids = event.target.goodWithKids.checked;
  console.log(isGoodWithKids);

  var isGoodWithCats = event.target.goodWithCats.checked;
  console.log(isGoodWithCats);

  var breed = event.target.breed.value;
  console.log('breed:', breed);

  var img = name + '.jpeg';

  var addedKitten = new Cat(name, likesArray, img,isGoodWithKids,isGoodWithDogs,isGoodWithCats,breed);

  //var container = document.getElementById('kittenProfiles');
  //container.textContent = '';
  //container.innerHTML = '';
  // container.innerHTML

  for(var i = 0; i < cats.length; i++){
    cats[i].getAge();
    cats[i].render();
  }

});

// function addKitten(event){
//   event.pereventDefault();
//   alert('Submitted!');
// }


for(var i = 0; i < cats.length; i++){
  cats[i].getAge();
  cats[i].render();
}

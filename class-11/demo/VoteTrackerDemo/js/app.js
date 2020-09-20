'use strict';
/*
  - Randomly put 2 goats on the screen
  - When a user clicks on any goat, both images change randomly
  - After the user have a total of 10 clicks, stop the application from changing the images, and show results as following:
    - How many times was each image displayed?
    - How many times was each image clicked?
  - Make sure left and right images are unique
*/


/*
1 - Images - object for each (constructor)
2 - Array to contain all objects
3 - Random number function
4 - Global variable to track total clicks
5 - event listeners
*/

var allGoats = [];
var leftSideImageElement = document.getElementById('left_goat_img');
var rightSideImageElement = document.getElementById('right_goat_img');
var imagesSection = document.getElementById('all_goats');

var currentLeftSideImage;
var currentRightSideImage;

var totalClicks = 0;

var resultsList = document.getElementById('finalResult');

// constructor
function GoatImage(goatName, link){
  this.goatName = goatName;
  this.link = link;
  this.votes = 0;
  this.timesDisplayed = 0;
  allGoats.push(this);
}

// creating objects
new GoatImage('Cruisin Goat','images/cruisin-goat.jpg');
new GoatImage('Goat Away','images/goat-away.jpg');
new GoatImage('Float Goat','images/float-your-goat.jpg');
new GoatImage('Goat out of hand','images/goat-out-of-hand.jpg');
new GoatImage('Sassy Goat','images/sassy-goat.jpg');
new GoatImage('Smiling Goat','images/smiling-goat.jpg');

function displayRandomImages(){
  var leftImageIndex;
  var rightImageIndex;
  leftImageIndex = Math.floor((Math.random() * allGoats.length));

  do{
    rightImageIndex = Math.floor((Math.random() * allGoats.length));
  } while(leftImageIndex === rightImageIndex);

  displayImages(leftImageIndex,rightImageIndex);
}

function displayImages(leftIndex, rightIndex){
  currentLeftSideImage = allGoats[leftIndex];
  currentRightSideImage = allGoats[rightIndex];
  currentLeftSideImage.timesDisplayed++;
  currentRightSideImage.timesDisplayed++;

  leftSideImageElement.setAttribute('src',currentLeftSideImage.link);
  rightSideImageElement.setAttribute('src',currentRightSideImage.link);
}

displayRandomImages();

imagesSection.addEventListener('click',handleVote);

function handleVote(event){
  var clickedImage;

  if(event.target.id === 'left_goat_img'){
    clickedImage = currentLeftSideImage;
  } else if(event.target.id === 'right_goat_img'){
    clickedImage = currentRightSideImage;
  }

  if(clickedImage){
    clickedImage.votes++;
    displayRandomImages();
    totalClicks++;
  }

  if(totalClicks >= 10){
    imagesSection.removeEventListener('click',handleVote);
    displayResults();
  }
}

function displayResults(){
  var listItem;
  for(var i = 0; i < allGoats.length; i++){
    listItem = document.createElement('li');
    listItem.textContent = 'Displayed Times for '+ allGoats[i].goatName + ' is ' + allGoats[i].timesDisplayed + ' and votes are ' + allGoats[i].votes;
    resultsList.appendChild(listItem);
  }
}
// function generateNewImages(){
//   // 1- increment the votes for the clicked image
//   // 2- display other random images (call the function)
//   // 3- condition for click times ..
// }
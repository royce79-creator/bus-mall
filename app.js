'use strict'

//Global Variables
let allBusMall = [];
let clicks = 0;
let clicksAllowed = 15;

let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:last-child');
// let imageOne = document.getElementById('imageOne');
imageOne.src = `img/water-can.jpg`;
imageTwo.src = `img/banana.jpg`;
imageThree.src = `img/bag.jpg`;
// imageTwo.src = 'img/'

function BusMall(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allBusMall.push(this);
}

new BusMall('bag');
new BusMall('banana');
new BusMall('bathroom');
new BusMall('boots');
new BusMall('breakfast');
new BusMall('bubblegum');
new BusMall('chair');
new BusMall('cthulu');
new BusMall('dog-duck');
new BusMall('dragon');
new BusMall('pen');
new BusMall('pet-sweep');
new BusMall('scissors')
new BusMall('shark');
new BusMall('sweep', 'png');
new BusMall('tauntaun');
new BusMall('unicorn');
new BusMall('water-can');
new BusMall('wine-glass');

// // imageOne.src = allGoats[0].src;
// // imageTwo.src = allGoats[1].src;
// // allGoats[0].views++;

function selectRandomBusMallIndex() {
  return Math.floor(Math.random() * allBusMall.length);
}

function renderBusMall() {
  let busMallOne = selectRandomBusMallIndex();
  let busMallTwo = selectRandomBusMallIndex();
  let busMallThree = selectRandomBusMallIndex();
  while (busMallOne === busMallTwo) {
    busMallTwo = selectRandomBusMallIndex();
  }
  while (busMallThree === busMallOne) {
    busMallOne = selectRandomBusMallIndex();
  };
//   imageOne.src = allBusMall[busMallOne].src;
//   imageOne.alt = allBusMall[busMallOne].name;
//   imageOne.style.width = '50px'; 
//   allBusMall[busMallOne].view++;

//   imageTwo.src = allBusMall[busMallTwo].src;
//   imageTwo.alt = allBusMall[busMallTwo].name;
//   allBusMall[busMallTwo].view++;

// }

// function handleBusMallClick(event){
//   if(event.target === myContainer){
//     alert('Click on an image please');
//   }
//   clicks++;
//   let clickedBusMall = event.target.alt
//   for (let i = 0; i < allBusMall.length; i++)
//     if (clickedBusMall === allBusMall[i].name) {
//       allBusMall[i].clicks++;
//     }
// }
// renderBusMall();

// if (clicks === clicksAllowed) {
//   myContainer.removeEventListener('click', handleBusMallClick);
// }

// function renderResults(){
//   let ul = document.querySelector('ul');
//   for(let i = 0; i < allBusMall.length; i++) {
//     let li = document.createElement('li').textContent = `${allBusMall[i].name} had ${allBusMall[i].views} views and was clicked ${allBusMall[i].clicks} times.`
//     appendChild
//   }
// }

// function handleButtonClick(event) {
//   if(clicks === clicksAllowed){
//     renderResults();
//   }
// }
// renderRandomBusMall();

// myContainer.addEventListener('click', handleBusMallClick);

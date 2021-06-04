'use strict';

//Global Variables
let allBusMallItems = [];
let clicks = 0;
let clicksAllowed = 25;
let renderList = [];

let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:last-child');
// let imageOne = document.getElementById('imageOne');
// imageTwo.src = 'img/'

//Constructor Function
function BusMallItem(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.clicks = 0;
  this.views = 0;
  allBusMallItems.push(this);
}

new BusMallItem('bag');
new BusMallItem('banana');
new BusMallItem('bathroom');
new BusMallItem('boots');
new BusMallItem('breakfast');
new BusMallItem('bubblegum');
new BusMallItem('chair');
new BusMallItem('cthulhu');
new BusMallItem('dog-duck');
new BusMallItem('dragon');
new BusMallItem('pen');
new BusMallItem('pet-sweep');
new BusMallItem('scissors')
new BusMallItem('shark');
new BusMallItem('sweep', 'png');
new BusMallItem('tauntaun');
new BusMallItem('unicorn');
new BusMallItem('water-can');
new BusMallItem('wine-glass');

function selectRandomBusMallIndex() {
  return Math.floor(Math.random() * allBusMallItems.length);
}

function renderRandomBusMallItems() {
  while (renderList.length < 4) {
    let uniqueIndex = selectRandomBusMallIndex();
    if (!renderList.includes(uniqueIndex)) {
      renderList.push(uniqueIndex);
    }
  }
  let busOne = renderList.pop();
  let busTwo = renderList.pop();
  let busThree = renderList.pop();
  // console.log(allBusMallItems[imageOne].src);

  imageOne.src = allBusMallItems[busOne].src;
  imageOne.alt = allBusMallItems[busOne].name;
  allBusMallItems[busOne].views++;

  imageTwo.src = allBusMallItems[busTwo].src;
  imageTwo.alt = allBusMallItems[busTwo].name;
  allBusMallItems[busTwo].views++;

  imageThree.src = allBusMallItems[busThree].src;
  imageThree.alt = allBusMallItems[busThree].name;
  allBusMallItems[busThree].views++;
}

function handleBusMallClick(event) {
  if (event.target === myContainer) {
    alert('Click on an image please');
  }

  clicks++;
  let clickedImages = event.target.alt;
  for (let i = 0; i < allBusMallItems.length; i++) {
    if (clickedImages === allBusMallItems[i].name) {
      allBusMallItems[i].clicks++;
      console.log(clickedImages);
      console.log(allBusMallItems[i].name);
    }
  }
  renderRandomBusMallItems();

  if (clicks === clicksAllowed) {
    myContainer.removeEventListener('click', handleBusMallClick);
  }
}

  function renderResults() {
    let ul = document.querySelector('ul');
    for (let i = 0; i < allBusMallItems.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allBusMallItems[i].name} had ${allBusMallItems[i].views} views and was clicked ${allBusMallItems[i].clicks} times.`;
      ul.appendChild(li);
    }
    renderResults
  }
  function handleButtonClick(event) {
    for (let i = 0; i < allBusMallItems.length; i++) {
      if (allBusMallItems[i].name === event.target.alt) {
        allBusMallItems[i].clicks = allBusMallItems[i].clicks + 1;
      }
    }

    renderRandomBusMallItems();
  }
  
  renderRandomBusMallItems();
  
  myContainer.addEventListener('click', handleBusMallClick);
  myButton.addEventListener('click', renderResults);

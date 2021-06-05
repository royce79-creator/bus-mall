'use strict';

//Global Variables
let allBusMallItems = [];
let clicks = 0;
let clicksAllowed = 25;
let renderList = [];

let myContainer = document.querySelector('section');
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
//Changes for local Storage lab. 
let collectedImages = localStorage.getItem('products'); 

if (collectedImages) {
  let coolImages = JSON.parse(collectedImages);
  allBusMallItems = coolImages;
}

else {
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
}

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
    renderChart();
    myContainer.removeEventListener('click', handleBusMallClick);
    //local storage storing the data into JSON file. 
    let tempStorage = JSON.stringify(allBusMallItems);
    localStorage.setItem('products', tempStorage);
  }
}  

function renderChart() {
    let clicksArray = [];
    let viewsArray = [];
    let namesArray = [];

    for (let i = 0; i < allBusMallItems.length; i++) {
      clicksArray.push(allBusMallItems[i].clicks);
      viewsArray.push(allBusMallItems[i].views);
      namesArray.push(allBusMallItems[i].name);
    }
    console.log(`${clicksArray}
      ${viewsArray}
      ${namesArray}`);

    let ctx = document.getElementById('myChart').getContext('2d');
    new Chart (ctx, {
      type: 'bar',
      data: {
        labels: namesArray,
        datasets: [{
          label: '# of Clicks',
          data: clicksArray,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        },
        {
          label: '# of Views',
          data: viewsArray,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
});
}
renderRandomBusMallItems();

myContainer.addEventListener('click', handleBusMallClick);

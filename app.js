'use strict';

// created global variables

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var sectionEl = document.getElementById('image-holder');
var totalClicks = 25;
var tempLabel = [];
var tempNumber = [];
var allImages = [];
var tempLocalStorageVariable = localStorage.getItem('swProducts');

//created constructor

function ProductImages(src, alt, title, clicked=0, viewed=0){
  this.src = src;
  this.alt = alt;
  this.title = title;
  this.clicked = clicked;
  this.viewed = viewed;

  allImages.push(this);
  tempLabel.push(this.title);
  
}

function random(max) {
  return Math.floor(Math.random() * max);
}

// While loop selects random pictures and no two pictures are shown per click

function imageGenerator(){
  var pic1 = random(allImages.length);
  var pic2 = random(allImages.length);
  var pic3 = random(allImages.length);
  while(pic1 === pic2 || pic2 === pic1 || pic3 === pic1 || pic2 === pic3){
    pic1 = random(allImages.length);
    pic2 = random(allImages.length);
    pic3 = random(allImages.length);
}

  imageOneEl.src = allImages[pic1].src;
  imageOneEl.alt = allImages[pic1].alt;
  imageOneEl.title = allImages[pic1].title;
  allImages[pic1].viewed++;

  imageTwoEl.src = allImages[pic2].src;
  imageTwoEl.alt = allImages[pic2].alt;
  imageTwoEl.title = allImages[pic2].title;
  allImages[pic2].viewed++;

  

  imageThreeEl.src = allImages[pic3].src;
  imageThreeEl.alt = allImages[pic3].alt;
  imageThreeEl.title = allImages[pic3].title;
  allImages[pic3].viewed++;

}

 // function for total clicks

function handelClick(e) {

  var clickedImage = e.target.title;
  
  
  console.log(totalClicks);
  for(var i =0; i < allImages.length; i++){
    if(clickedImage === allImages[i].title){
      allImages[i].clicked++;
    }
  }
  totalClicks--;
  
  
  if(totalClicks === 0){
    
    
    sectionEl.removeEventListener('click', handelClick);
    
    addClicksToTempNumberArray();
  }
  imageGenerator();
}

// created an function / array for voting results

function addClicksToTempNumberArray(){
  var name = [];
  var votes = [];
  var viewed = [];
  var colors = [];
  
  // created array for chart to show voting results
  
  for(var i = 0; i < allImages.length; i++){
    name.push(allImages[i].alt);
    votes.push(allImages[i].clicked);
    viewed.push(allImages[i].viewed);
    
  }
  
  
  
  var canvasEl = document.getElementById('myChart3')
  var ctx = canvasEl.getContext('2d');
  
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: name,
      datasets: [{
        label: '# of Votes',
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
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
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  storedProducts();
}  

// add function to populate data to get clicks and viewed
//saving an array and pulling out objects

    // creating local storage function

    function storedProducts(){
      var stringArray = JSON.stringify(allImages);
      localStorage.setItem('swProducts', stringArray);
      console.log('In the storedProducts function');
    }

// function populateData(){
//     if (localStorage.getItem('swProducts')) {
//         var allStorageProducts = JSON.parse(localStorage.getItem('swProducts'));
//         for (var i = 0; i < allStorageProducts.length; i++) {
//             new ProductImages(
//               allStorageProducts[i].alt,
//               allStorageProducts[i].src, 
//               allStorageProducts[i].viewed,
//               allStorageProducts[i].title,
//               allStorageProducts[i].clicked)
                
//             } 
//           } else {
//           new ProductImages('images/bathroom.jpg', 'bath1', 'bath1');
//           new ProductImages('images/banana.jpg', 'banana2', 'banana2');
//           new ProductImages('images/pen.jpg', 'pen3', 'pen3');
//           new ProductImages('images/boots.jpg', 'boots4', 'boots4');
//           new ProductImages('images/breakfast.jpg', 'break5', 'break5');
//           new ProductImages('images/bubblegum.jpg', 'bubble6', 'bubble6');
//           new ProductImages('images/chair.jpg', 'chair7', 'chair7');
//           new ProductImages('images/cthulhu.jpg', 'cthulhu8', 'cthulhu8');
//           new ProductImages('images/dog-duck.jpg', 'dog-duck9', 'dog-duck9');
//           new ProductImages('images/dragon.jpg', 'dragon10', 'dragon10');
//           new ProductImages('images/pet-sweep.jpg', 'pet-sweep11', 'pet-sweep11');
//           new ProductImages('images/scissors.jpg', 'scissors12', 'scissors12');
//           new ProductImages('images/shark.jpg', 'shark13', 'shark13');
//           new ProductImages('images/tauntaun.jpg', 'tauntaun14', 'tauntaun14');
//           new ProductImages('images/unicorn.jpg', 'unicorn15', 'unicorn15');
//           new ProductImages('images/usb-.gif', 'usb16', 'usb16');
//           new ProductImages('images/water-can.jpg', 'water17', 'water17');
//           new ProductImages('images/wine-glass.jpg', 'wine18', 'wine18');
//           }
//         }

function populateData(){

      if (tempLocalStorageVariable) {
        console.log('local storage found')
        var allStorageProducts = localStorage.getItem('swProducts');
        var parseData = JSON.parse(allStorageProducts);
          for (var i = 0; i < parseData.length; i++) {
            new ProductImages(
              parseData[i].src, 
              parseData[i].alt,
              parseData[i].title,
              parseData[i].clicked,
              parseData[i].viewed)
            } 
      }
      else {
          console.log('populate the data');
          new ProductImages('images/bathroom.jpg', 'bath1', 'bath1');
          new ProductImages('images/banana.jpg', 'banana2', 'banana2');
          new ProductImages('images/pen.jpg', 'pen3', 'pen3');
          new ProductImages('images/boots.jpg', 'boots4', 'boots4');
          new ProductImages('images/breakfast.jpg', 'break5', 'break5');
          new ProductImages('images/bubblegum.jpg', 'bubble6', 'bubble6');
          new ProductImages('images/chair.jpg', 'chair7', 'chair7');
          new ProductImages('images/cthulhu.jpg', 'cthulhu8', 'cthulhu8');
          new ProductImages('images/dog-duck.jpg', 'dog-duck9', 'dog-duck9');
          new ProductImages('images/dragon.jpg', 'dragon10', 'dragon10');
          new ProductImages('images/pet-sweep.jpg', 'pet-sweep11', 'pet-sweep11');
          new ProductImages('images/scissors.jpg', 'scissors12', 'scissors12');
          new ProductImages('images/shark.jpg', 'shark13', 'shark13');
          new ProductImages('images/tauntaun.jpg', 'tauntaun14', 'tauntaun14');
          new ProductImages('images/unicorn.jpg', 'unicorn15', 'unicorn15');
          new ProductImages('images/usb-.gif', 'usb16', 'usb16');
          new ProductImages('images/water-can.jpg', 'water17', 'water17');
          new ProductImages('images/wine-glass.jpg', 'wine18', 'wine18');
      }
}
      
          
sectionEl.addEventListener('click', handelClick);
populateData();
imageGenerator();




  

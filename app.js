'use strict';

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var sectionEl = document.getElementById('image-holder');

var allImages = [];

function ProductImages(src, alt, title){
  this.src = src;
  this.alt = alt;
  this.title = title;
  this.clicked = 0;
  this.viewed = 0;

  allImages.push(this);
}

function random(max) {
  return Math.floor(Math.random() * max);
}

function imageGenerator(){
  var pic1 = random(allImages.length);
  var pic2 = random(allImages.length);
  var pic3 = random(allImages.length);
  while(pic1 === pic2){
    pic2 = random(allImages.length);
  }

  imageOneEl.src = allImages[pic1].src;
  imageOneEl.alt = allImages[pic1].alt;
  imageOneEl.title = allImages[pic1].title;
  allImages[pic1].viewed++;

  imageTwoEl.src = allImages[pic2].src;
  imageTwoEl.alt = allImages[pic2].alt;
  imageTwoEl.title = allImages[pic2].title;
  allImages[pic2].viewed++;

  console.log(allImages[pic3]);

  imageThreeEl.src = allImages[pic3].src;
  imageThreeEl.alt = allImages[pic3].alt;
  imageThreeEl.title = allImages[pic3].title;
  allImages[pic3].viewed++;
  
  console.log(imageThreeEl.src);
  // console.log(allImages[pic3].src);

}

function handelClick(e) {
  var clickedImage = e.target.title;
  for(var i =0; i < allImages.length; i++){
    if(clickedImage === allImages[i].title){
      allImages[i].clicked++;
    }
  }
  imageGenerator();
}

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








sectionEl.addEventListener('click', handelClick);

imageGenerator();

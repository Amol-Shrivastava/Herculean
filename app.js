const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = .6;

//set first-img opacity

imgs[0].style.opacity = opacity;

imgs.forEach(img => addEventListener('click', imgClick));

function imgClick(e){
  //Reset the opacity
  imgs.forEach(img => img.style.opacity = 1);

  //set current img source as that of target source
  current.src = e.target.src;

  //add fadeInZoom class
  current.classList.add('fadeInZoom');

  //remove fadeInZoom class after .5s
  setTimeout(() => current.classList.remove('fadeInZoom'),500);

  //change opacity of imgs img to opacity variable
    e.target.style.opacity = opacity;

}



const slideImgs = document.querySelectorAll('.slide');
const arrowRight = document.querySelector('.icon-triangle-right');
const arrowLeft = document.querySelector('.icon-triangle-left');
var carousel_current = 0;

//remove the carousel_current image
function reset(){
  for(let i = 0; i<= slideImgs.length; i++){
    slideImgs[i].style.display = 'none';
  }
}

//init slider
function init(){
  reset();

  //initially show 1st slide
  slideImgs[0].style.display = 'block';
}

//show Previous slide
function slideLeft(){
  reset();
  slideImgs[carousel_current - 1].style.display = 'block';
  carousel_current--;
}

//show Next slide
function slideRight(){
  reset();
  slideImgs[carousel_current + 1].style.display = 'block';
}

//leftarrow click
arrowLeft.addEventListener('click',function(){
  if(carousel_current = 0){
    carousel_current = slideImgs.length;
    }
    slideLeft();
});

//Rightarrow click
arrowRight.addEventListener('click',function(){
  if(carousel_current = slideImgs.length - 1){
    carousel_current = 0;
  }
  slideRight();
});

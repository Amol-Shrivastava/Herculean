//gym walkthrough
const current = document.querySelector('#current');
const imgs = Array.from(document.querySelectorAll('.imgs img'));
const opac = .6;

//set first-img opacity

imgs[0].style.opacity = opac;

imgs.forEach(img => img.addEventListener('click', imgClick));

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
    e.target.style.opacity = opac;

}

//scrolling navbar
const header = document.querySelector('header');
const sectOne = document.querySelector('.carousel');

const selectOneOptions = {
  rootMargin: '-140px 0px 0px 0px'
}

const sectOneObserver = new IntersectionObserver(function(entries,sectOneObserver){

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
     header.classList.add("scrolled");
   } else {
     header.classList.remove("scrolled");
   }
 });

},selectOneOptions);

sectOneObserver.observe(sectOne);


//MODAL OPERATION

//BUTTONS
const aplyBtn = document.getElementById('sign-in');
const closBtn = document.getElementById('close');

//MODAL
const modlCont = document.getElementById('modal');

// opening Modal
function addToggleModal(){
  modlCont.classList.add('toggle');
}

// closing Modal
function removeToggleModal(){
  modlCont.classList.remove('toggle');
}


aplyBtn.addEventListener('click',addToggleModal);
closBtn.addEventListener('click',removeToggleModal);

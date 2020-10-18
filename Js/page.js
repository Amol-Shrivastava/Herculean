//MODAL OPERATION

//BUTTONS
const aplyBtn = document.getElementById('sign-in');
const closBtn = document.getElementById('close');
const canBtn = document.getElementById('cancel');

//form btn
const openBtn = document.getElementById('apply-now');
const hideBtn = document.getElementById('form-close');

//MODAL
const modlCont = document.getElementById('modal');

//form modal
const formCont = document.getElementById('form-modal');

// opening Modal
function addToggleModal(){
  modlCont.classList.add('toggle');
}

// closing Modal
function removeToggleModal(){
  modlCont.classList.remove('toggle');
}



//****************************************************************************************

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

//************************************************************************


//click events

aplyBtn.addEventListener('click',addToggleModal);

closBtn.addEventListener('click',removeToggleModal);

openBtn.addEventListener('click',() => {
    formCont.classList.add('toggle');
});

hideBtn.addEventListener('click', () => {
    formCont.classList.remove('toggle');
});

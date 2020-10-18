//getting side Button
const registerBtn = document.getElementById('item-1');
const currentBtn = document.getElementById('item-2');
const programmeBtn = document.getElementById('item-3');
const trainerBtn = document.getElementById('item-4');

//add,delete Button
const addBtn = Array.from(document.querySelectorAll('.icon-plus'));
const plusBtn = Array.from(document.querySelectorAll('.plusBtn'));
const closeBtn = document.querySelector('.close');

//modal
const modal = document.querySelector('.modal-container');

//Event Delegation Container
const admiCont = document.getElementById('adminCont');

//getting side Content
const registerItem = document.getElementById('register');
const currentItem = document.getElementById('current');
const programmeItem = document.getElementById('programme');
const trainerItem = document.getElementById('trainer');

//show Register Details
function showRegisterDetails(){

  //registerBtn add toggle class
  registerBtn.classList.add('clickactive');
  currentBtn.classList.remove('clickactive');
  programmeBtn.classList.remove('clickactive');
  trainerBtn.classList.remove('clickactive');

  //for Register Details adding showDisplay class
  registerItem.classList.add('showDisplay');
  currentItem.classList.add('hideDisplay');
  programmeItem.classList.add('hideDisplay');
  trainerItem.classList.add('hideDisplay');

  // for 2nd click
    registerItem.classList.remove('hideDisplay');
    registerItem.classList.add('showDisplay');
}

//show Current Details
function showCurrentDetails(){

  //currentBtn add toggle class
  registerBtn.classList.remove('clickactive');
  currentBtn.classList.add('clickactive');
  programmeBtn.classList.remove('clickactive');
  trainerBtn.classList.remove('clickactive');

  //for Current Details adding showDisplay class
  registerItem.classList.add('hideDisplay');
  currentItem.classList.add('showDisplay');
  programmeItem.classList.add('hideDisplay');
  trainerItem.classList.add('hideDisplay');

  // for 2nd click
   currentItem.classList.remove('hideDisplay');
   currentItem.classList.add('showDisplay');
}

//show Programme Details
function showProgrammeDetails(){

  //programmeBtn add toggle class
  registerBtn.classList.remove('clickactive');
  currentBtn.classList.remove('clickactive');
  programmeBtn.classList.add('clickactive');
  trainerBtn.classList.remove('clickactive');

  //for Programme Details adding showDisplay class
  registerItem.classList.add('hideDisplay');
  currentItem.classList.add('hideDisplay');
  programmeItem.classList.add('showDisplay');
  trainerItem.classList.add('hideDisplay');

  // for 2nd click
  programmeItem.classList.remove('hideDisplay');
  programmeItem.classList.add('showDisplay');
}

//show Trainer Details
function showTrainerDetails(){

  //trainerBtn add toggle class
  registerBtn.classList.remove('clickactive');
  currentBtn.classList.remove('clickactive');
  programmeBtn.classList.remove('clickactive');
  trainerBtn.classList.add('clickactive');

  //for Trainer Details adding showDisplay class
  registerItem.classList.add('hideDisplay');
  currentItem.classList.add('hideDisplay');
  programmeItem.classList.add('hideDisplay');
  trainerItem.classList.add('showDisplay');

  // for 2nd click
  trainerItem.classList.remove('hideDisplay');
  trainerItem.classList.add('showDisplay');
}

//delete Item
var deleteItem = function(event){

let clickedElement = event.target;

 if (clickedElement.closest('.deleteBtn')) {
   clickedElement.closest('tr').remove();
 }
}

//modal popup
function showModal(){
  modal.classList.add('toggle');
}

//modal close
function hideModal(){
  modal.classList.remove('toggle');
}

// adding click event
registerBtn.addEventListener('click',showRegisterDetails);

currentBtn.addEventListener('click',showCurrentDetails);

programmeBtn.addEventListener('click',showProgrammeDetails);

trainerBtn.addEventListener('click',showTrainerDetails);

admiCont.addEventListener('click', deleteItem);

addBtn.forEach( btn =>  btn.addEventListener('click', showModal));

closeBtn.addEventListener('click', hideModal);

plusBtn.forEach(p => p.addEventListener('click', () => console.log(`plus btn clicked!!!!`)));

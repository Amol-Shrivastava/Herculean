//MODAL OPERATION

//BUTTONS
const aplyBtn = document.getElementById('sign-in');
const closBtn = document.getElementById('close');
const canBtn = document.getElementById('cancel');

//MODAL
const modlCont = document.getElementById('modal');

// opening Modal
function addToggleModal() {
  modlCont.classList.add('toggle');
}

// closing Modal
function removeToggleModal() {
  modlCont.classList.remove('toggle');
}

//click events

aplyBtn.addEventListener('click', addToggleModal);

closBtn.addEventListener('click', removeToggleModal);

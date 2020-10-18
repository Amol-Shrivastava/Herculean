//getting side Button
const courseBtn = document.getElementById('item-1');
const paymentBtn = document.getElementById('item-2');
const editBtn = document.getElementById('item-3');

//getting side Content
const courseItem = document.getElementById('courseItem');
const paymentItem = document.getElementById('paymentItem');
const editProfile = document.getElementById('editProfileItem');


//show Course list
function showCourseItem(){
  //courseBtn add toggle class
  courseBtn.classList.add('clickactive');
  paymentBtn.classList.remove('clickactive');
  editBtn.classList.remove('clickactive');

  //for course content adding showDisplay class
  courseItem.classList.add('showDisplay');
  paymentItem.classList.add('hideDisplay');
  editProfile.classList.add('hideDisplay');

  // for 2nd click
    courseItem.classList.remove('hideDisplay');
    courseItem.classList.add('showDisplay');
}

//show Payment list
function showPaymentItem(){
  //courseBtn add toggle class
  courseBtn.classList.remove('clickactive');
  paymentBtn.classList.add('clickactive');
  editBtn.classList.remove('clickactive');

  //for payment content adding showDisplay class
  courseItem.classList.add('hideDisplay');
  paymentItem.classList.add('showDisplay');
  editProfile.classList.add('hideDisplay');

  // for 2nd click
    paymentItem.classList.remove('hideDisplay');
    paymentItem.classList.add('showDisplay');
}

//show edit Form
function showEditForm(){

  //courseBtn add toggle class
  courseBtn.classList.remove('clickactive');
  paymentBtn.classList.remove('clickactive');
  editBtn.classList.add('clickactive');

  //for edit content adding showDisplay class
  courseItem.classList.add('hideDisplay');
  paymentItem.classList.add('hideDisplay');
  editProfile.classList.add('showDisplay');

  // for 2nd click
  editProfile.classList.remove('hideDisplay');
  editProfile.classList.add('showDisplay');
}

// adding click event
courseBtn.addEventListener('click',showCourseItem);

paymentBtn.addEventListener('click',showPaymentItem);

editBtn.addEventListener('click',showEditForm);

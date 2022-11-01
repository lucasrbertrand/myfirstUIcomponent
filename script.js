'use strict';

// Functions to use

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');

//Refactored, same code was found two times

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// For easier understanding

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//A for loop to go through the .show-modal class (we got 3 uses of it)
//Then added I event listener to click the 3 buttons
//When they are clicked the class 'hidden' is removed showing the box we want to show
//Refactored is above this one

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal)

//Function refactored applied to close Modal when clicked in the X of the box, and in the outside part of the box

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

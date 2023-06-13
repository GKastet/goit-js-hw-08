import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const formTotal = refs.form;
const inputEmail = refs.form.elements.email;
const inputMessage = refs.form.elements.message;
let inputData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

formTotal.addEventListener('input', throttle(handlerFormInput), 500);
function handlerFormInput(evt) {
  inputData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}


function onLoad() {
  inputEmail.value = inputData.email || '';
  inputMessage.value = inputData.message || '';
}
onLoad();

formTotal.addEventListener('submit', handlerFormSubmit);
function handlerFormSubmit(evt) {
  evt.preventDefault();
  console.log(inputData);
  localStorage.removeItem('feedback-form-state');
  evt.target.reset();
  inputData = {};
}
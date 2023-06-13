import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

const formTotal = refs.form;
const inputEmail = refs.form.elements.email;
const inputMessage = refs.form.elements.message;
const inputData = {};

formTotal.addEventListener('input', throttle(handlerFormInput), 500);
function handlerFormInput(evt) {
  const emailText = inputEmail.value;
  inputData.email = emailText;
  const messageText = inputMessage.value;
  inputData.message = messageText;  
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

formTotal.addEventListener('submit', handlerFormSubmit);
function handlerFormSubmit(evt) {
  evt.preventDefault();
  console.log(inputData);
  localStorage.removeItem('feedback-form-state');
  evt.target.reset();
}

function onLoad() {
  const jsonData = localStorage.getItem('feedback-form-state');
  const jsonInput = JSON.parse(jsonData) || {};

  inputEmail.value = jsonInput.email || '';
  inputMessage.value = jsonInput.message || '';
}
onLoad();

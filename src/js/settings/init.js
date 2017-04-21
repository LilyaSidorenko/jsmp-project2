/** Created by Liliia_Sydorenko on 4/20/17. */
import '../../scss/add-list.scss';
import * as states from '../states.js';
import * as validate from '../index.js';

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var messageInput = document.getElementById('message');

nameInput.addEventListener('blur', function(){
  if (validate.validateName(this.value)) {
    states.successState(this);
  } else {
    states.errorState(this, 'Please write correct email');
  }
});
nameInput.addEventListener('focus', function(){
  states.defaultState(this);
});

emailInput.addEventListener('blur', function(){
  if (validate.validateEmail(this.value)) {
    states.successState(this);
  } else {
    states.errorState(this, 'Please write correct email');
  }
});
emailInput.addEventListener('focus', function(){
  states.defaultState(this);
});

phoneInput.addEventListener('blur', function(){
  if (validate.validatePhone(this.value)) {
    states.successState(this);
  } else {
    states.errorState(this, 'Please write correct phone number');
  }
});
phoneInput.addEventListener('focus', function(){
  states.defaultState(this);
});
messageInput.addEventListener('blur', function(){
  if (validate.validateMessage(this.value)) {
    states.successState(this);
  } else {
    states.errorMessage(this, 'Please write your message');
  }
});
messageInput.addEventListener('focus', function(){
  states.defaultState(this);
});
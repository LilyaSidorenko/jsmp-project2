/** Created by Liliia_Sydorenko on 4/20/17. */
import '../../scss/add-list.scss';
import * as states from '../states.js';
import * as validate from '../index.js';

var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var phoneInput = document.getElementById('phone');
var cardInput = document.getElementById('card');
var dateInput = document.getElementById('date');
var messageInput = document.getElementById('message');
var submitBtn = document.getElementById('submitBtn');
var formHeader = document.getElementById('formHeader');

nameInput.addEventListener('blur', function () {
    this.value = validate.inputTrimming(this.value);

    if (validate.validateName(this.value)) {
        states.successState(this);
    } else {
        states.errorState(this, 'Please write correct name');
    }
});
nameInput.addEventListener('focus', function () {
    states.defaultState(this);
});

emailInput.addEventListener('blur', function () {
    this.value = validate.inputTrimming(this.value);

    if (validate.validateEmail(this.value)) {
        states.successState(this);
    } else {
        states.errorState(this, 'Please write correct email');
    }
});
emailInput.addEventListener('focus', function () {
    states.defaultState(this);
});

phoneInput.addEventListener('blur', function () {
    this.value = validate.inputTrimming(this.value);

    if (validate.validatePhone(this.value)) {
        states.successState(this);
    } else {
        states.errorState(this, 'Please write correct phone number');
    }
});
phoneInput.addEventListener('focus', function () {
    states.defaultState(this);
});
messageInput.addEventListener('blur', function () {
    this.value = validate.inputTrimming(this.value);

    if (validate.validateMessage(this.value)) {
        states.successState(this);
    } else {
        states.errorState(this, 'Please write your message');
    }
});
messageInput.addEventListener('focus', function () {
    states.defaultState(this);
});
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    validate.submitButton(formHeader);
});


cardInput.addEventListener('blur', function(){
    if (validate.validateCard(this.value)) {
    states.successState(this);
  } else {
    states.errorState(this, 'Please write correct credit card');
  }
});

cardInput.addEventListener('focus', function(){
  states.defaultState(this);
});
dateInput.addEventListener('blur', function(){
    if (validate.validateDate(this.value)) {
        states.successState(this);
    } else {
        states.errorState(this, 'Please write correct date');
    }
});
dateInput.addEventListener('focus', function(){
    states.defaultState(this);
});
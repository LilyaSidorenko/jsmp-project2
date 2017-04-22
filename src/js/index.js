export const validateEmail = function (email) {
  const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexp.test(email);
};
export const validatePhone = function (phone) {
  const regexp = /^(\+380|0)([0-9]{9})$/;
  return regexp.test(phone);
};
export const validateMessage = function (message) {
  if (message === '') {
    return false;
  } else {
    return true;
  }
};
export const validateName = function (name) {
  const regexp = /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/;
  return regexp.test(name);
};
export const inputTrimming = function (input) {
  return input.trim();
};
export const validateCard = function (card) {
  const regexp = /^(?:4\d{3}|5[1-5]\d{2}|6011|3[47]\d{2})([- ]?)\d{4}\1\d{4}\1\d{4}$/;
  return regexp.test(card);
};

export const validateDate = function (card) {
  const regexp = /^[0-9]{2}[-|\/]{1}[0-9]{2}[-|\/]{1}[0-9]{4}$/;
  return regexp.test(card);
};



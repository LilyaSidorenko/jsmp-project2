/**
 * Created by Liliia_Sydorenko on 4/20/17.
 */
export const successState = function (self) {
  self.classList.remove('error');
  self.classList.add('success');
};
export const errorState = function (self, errorMsg ) {
  self.classList.remove('success');
  self.classList.add('error');
  let errorBlock = self.parentElement.getElementsByClassName('error-message');
  errorBlock[0].innerHTML = errorMsg;
};
export const defaultState = function (self) {
  let error = self.parentElement.getElementsByClassName('error-message');
  error[0].innerHTML = '';
  self.classList.remove('success');
  self.classList.remove('error');
};

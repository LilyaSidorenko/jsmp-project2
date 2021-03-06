import * as validation from '../src/js/index';


describe('validation form', function() {
  describe('email', function() {
        it('empty', function() {
          expect(validation.validateEmail('')).toBe(false);
        });
        it('not empty not valid', function() {
          expect(validation.validateEmail('liliia.com.ua')).toBe(false);
        });
        it('valid email', function() {
          expect(validation.validateEmail('liliia@com.ua')).toBe(true);
        });
    });
  describe('fullName', function() {
    it('empty', function() {
      expect(validation.validateName('')).toBe(false);
    });
    it('not empty not letters', function() {
      expect(validation.validateName('12345')).toBe(false);
    });
    it('not empty not only letters', function() {
      expect(validation.validateName('liliia12345')).toBe(false);
    });
    it('not empty not full', function() {
      expect(validation.validateName('liliia')).toBe(false);
    });
    it('valid name', function() {
      expect(validation.validateName('liliia sydorenko')).toBe(true);
    });
  });
  describe('phone number', function() {
    it('empty', function() {
      expect(validation.validatePhone('')).toBe(false);
    });
    it('not empty not number', function() {
      expect(validation.validatePhone('my_number')).toBe(false);
    });
    it('not empty not only numbers', function() {
      expect(validation.validatePhone('my_number1234')).toBe(false);
    });
    it('not empty not valid', function() {
      expect(validation.validatePhone('9058473847')).toBe(false);
    });
    it('valid phone number', function() {
      expect(validation.validatePhone('0935647477')).toBe(true);
    });
    it('valid phone number', function() {
      expect(validation.validatePhone('+380935647477')).toBe(true);
    });
  });
  describe('massage', function() {
     it('empty', function() {
       expect(validation.validateMessage('')).toBe(false);
     });
     it('valid message', function() {
       expect(validation.validateMessage('Some message for you')).toBe(true);
     });
   });
  describe('trimming spaces', function() {
    it('should trim all spaces before validation', function() {
      expect(validation.inputTrimming('   my name ')).toBe('my name');
    });
  });
  describe('card validation', function() {
    it('should validate card (16 characters, right numbers)', function() {
      expect(validation.validateCard('4731185606294277')).toBe(true);
    });
    it('should validate card (16 characters, right numbers)', function() {
      expect(validation.validateCard('47456jjkkkj')).toBe(false);
    });
  });
  describe('date validation', function() {
    it('should validate date with wrong info', function() {
      expect(validation.validateDate('my-date')).toBe(false);
    });
    it('should validate date with wrong format', function() {
      expect(validation.validateDate('10 jun 2010')).toBe(false);
    });
    it('should validate date with correct format', function() {
      expect(validation.validateDate('11-12-2012')).toBe(true);
    });
    it('should validate date with correct format', function() {
      expect(validation.validateDate('11/12/2012')).toBe(true);
    });
  });
});


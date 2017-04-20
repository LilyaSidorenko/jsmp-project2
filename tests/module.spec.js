describe('validation form', function() {
  describe('email', function() {
        it('empty', function() {
          expect(validateEmail('')).toBe(false);
        });
        it('not empty not valid', function() {
          expect(validateEmail('liliia.com.ua')).toBe(false);
        });
        it('valid email', function() {
          expect(validateEmail('liliia@com.ua')).toBe(true);
        });
    });
  describe('fullName', function() {
    it('empty', function() {
      expect(validateName('')).toBe(false);
    });
    it('not empty not letters', function() {
      expect(validateName('12345')).toBe(false);
    });
    it('not empty not only letters', function() {
      expect(validateName('liliia12345')).toBe(false);
    });
    it('not empty not full', function() {
      expect(validateName('liliia')).toBe(false);
    });
    it('valid name', function() {
      expect(validateName('liliia sydorenko')).toBe(true);
    });
  });
  describe('phone number', function() {
    it('empty', function() {
      expect(validatePhone('')).toBe(false);
    });
    it('not empty not number', function() {
      expect(validatePhone('my_number')).toBe(false);
    });
    it('not empty not only numbers', function() {
      expect(validatePhone('my_number1234')).toBe(false);
    });
    it('not empty not valid', function() {
      expect(validatePhone('9058473847')).toBe(false);
    });
    it('valid phone number', function() {
      expect(validatePhone('0935647477')).toBe(true);
    });
  });
  describe('massage', function() {
    it('empty', function() {
      expect(validateMessage('')).toBe(false);
    });
    it('valid message', function() {
      expect(validateMessage('Some message for you')).toBe(true);
    });
  });
});


import { sayHello } from '../src/js/module';
import { sayHi } from '../src/js/module2';
describe('module', function () {

    const hello = sayHello('World');
    const hi = sayHi();

    it('should display proper hello', function () {
        expect(hello).toBe('Hello World!');
    });

    it('should display proper hi', function () {
        expect(hi).toBe('hi');
    });

});
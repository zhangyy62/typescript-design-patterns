import { Person } from '../../src/patterns/Creational-Patterns/prototype';
import * as assert from 'assert';

describe('#prototype test', function () {
    it('prototype succeed', () => {
        let person1 = new Person('john', 22);
        let person2 = new Person('tom', 32);
        let person3 = person1.clone();
        let person4 = person2.clone();

        assert.equal(person1.name, person3.name);
        assert.equal(person2.name, person4.name);
    });

    it('prototype failed', () => {
        let person1 = new Person('john', 22);
        let person2 = new Person('tom', 32);
        let person3 = person1.clone();
        let person4 = person2.clone();

        assert.equal(person1.name, person4.name);
        assert.equal(person2.name, person3.name);
    });
});
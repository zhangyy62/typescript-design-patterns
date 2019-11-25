import { PersonType, Factory } from '../../src/patterns/Creational-Patterns/factory-method';
import * as assert from 'assert';

describe('#factory-method test', function () {
    it('factory-method succeed', () => {
        let factory = new Factory();
        assert.equal(factory.getPerson(PersonType.Urban).getName(), 'City Person');
        assert.equal(factory.getPerson(PersonType.Rural).getName(), 'Village Person');
    });

    it('factory-method failed', () => {
        let factory = new Factory();
        assert.equal(factory.getPerson(PersonType.Urban).getName(), 'Village Person');
        assert.equal(factory.getPerson(PersonType.Rural).getName(), 'City Person');
    });
});
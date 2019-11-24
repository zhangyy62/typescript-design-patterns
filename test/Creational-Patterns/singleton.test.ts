import { LazySingleton, HungrySingleton } from '../../src/patterns/Creational-Patterns/singleton';
import * as assert from 'assert';

describe.skip('#singleton test', function () {
    it('singleton test', () => {
        assert.equal(LazySingleton.getInstance(), LazySingleton.getInstance());
        assert.equal(HungrySingleton.getInstance(), HungrySingleton.getInstance());
    });

    it('different singleton test', () => {
        assert.equal(HungrySingleton.getInstance(), LazySingleton.getInstance());
    });
});
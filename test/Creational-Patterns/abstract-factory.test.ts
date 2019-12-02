import { GUIFactory, WinFactory, OSXFactory } from '../../src/patterns/Creational-Patterns/abstract-factory';
import * as assert from 'assert';

describe.skip('#abstract-factory test', function () {
    it('abstract-factoray succeed', () => {
        let factory: GUIFactory;
        let type = 'win';
        switch (type) {
            case 'win':
                factory = new WinFactory();
                break;
            case 'osx':
                factory = new OSXFactory();
                break;
            default:
                break;
        }

        var button = factory.CreateButton();
        assert.equal(button.Paint(), 'this is winButton');
    });

    it('abstract-factoray failed', () => {
        let factory: GUIFactory;
        let type = 'osx';
        switch (type) {
            case 'win':
                factory = new WinFactory();
                break;
            case 'osx':
                factory = new OSXFactory();
                break;
            default:
                break;
        }

        var button = factory.CreateButton();
        assert.equal(button.Paint(), 'this is winButton');
    });
});
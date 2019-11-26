import { ProxyCar, Driver } from '../../src/patterns/Structural-Patterns/proxy';
import * as assert from 'assert';

describe('#proxy test', function () {
    it('proxy succeed', () => {
        let car = new ProxyCar(new Driver(17));
        car.driveCar();
        assert.equal(car.driveCar(), 'Sorry, the driver is too young to drive.');

        car = new ProxyCar(new Driver(25));
        car.driveCar();
        assert.equal(car.driveCar(), 'Car has been driven!');
    });

    it('proxy failed', () => {
        let car = new ProxyCar(new Driver(17));
        car.driveCar();
        assert.equal(car.driveCar(), 'Car has been driven!');

        car = new ProxyCar(new Driver(25));
        car.driveCar();
        assert.equal(car.driveCar(), 'Sorry, the driver is too young to drive.');
    });
});
import { Customer, NormalStrategy, HappyHourStrategy } from '../../src/patterns/Behavioral-Patterns/strategy';
import * as assert from 'assert';

describe('#strategy test', function () {
    it('strategy succeed', () => {
        let normalStrategy = new NormalStrategy();
        let happyHourStrategy = new HappyHourStrategy();

        let firstCustomer = new Customer(normalStrategy);
        firstCustomer.add(1.0, 1);
        firstCustomer.Strategy = happyHourStrategy;
        firstCustomer.add(1.0, 2);

        let secondCustomer = new Customer(happyHourStrategy);
        secondCustomer.add(0.8, 1);
        secondCustomer.Strategy = normalStrategy;
        secondCustomer.add(1.3, 2);
        secondCustomer.add(2.5, 1);

        assert.equal(firstCustomer.getBill(), 1.0 + 1.0 * 2 * 0.5);
        assert.equal(secondCustomer.getBill(), 0.8 * 0.5 + 1.3 * 2 + 2.5);
    });

    it('strategy failed', () => {
        let normalStrategy = new NormalStrategy();
        let happyHourStrategy = new HappyHourStrategy();

        let firstCustomer = new Customer(normalStrategy);

        firstCustomer.add(1.0, 1);
        firstCustomer.Strategy = happyHourStrategy;
        firstCustomer.add(1.0, 2);

        let secondCustomer = new Customer(happyHourStrategy);
        secondCustomer.add(0.8, 1);
        secondCustomer.Strategy = normalStrategy;
        secondCustomer.add(1.3, 2);
        secondCustomer.add(2.5, 1);

        assert.equal(firstCustomer.getBill(), 0);
        assert.equal(secondCustomer.getBill(), 999.9);
    });
});
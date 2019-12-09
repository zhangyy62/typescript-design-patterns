import { FerrariBuilder, SportsCarBuildDirector } from '../../src/patterns/Creational-Patterns/builder';
import * as assert from 'assert';

describe.skip('#builder test', function () {
    it('builder succeed', () => {
        let builder = new FerrariBuilder();
        let director = new SportsCarBuildDirector(builder);

        director.Construct();
        let myRaceCar = builder.GetResult();
        assert.equal(`${myRaceCar.make} ${myRaceCar.model}`, 'Ferrari 488 Spider');
    });
});
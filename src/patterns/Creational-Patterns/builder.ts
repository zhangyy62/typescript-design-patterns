interface ICarBuilder {
    colour: string
    numDoors: number
    GetResult(): Car
}

class Car {
    make: string
    model: string
    numDoors: number
    colour: string

    constructor(make: string, model: string, colour: string, numDoors: number) {
        this.make = make;
        this.model = model;
        this.colour = colour;
        this.numDoors = numDoors;
    }
}

export class FerrariBuilder implements ICarBuilder {
    colour: string;
    numDoors: number;
    GetResult(): Car {
        return this.numDoors == 2 ? new Car("Ferrari", "488 Spider", this.colour, this.numDoors) : null;
    }
}

export class SportsCarBuildDirector {
    private _builder: ICarBuilder;
    public constructor(builder: ICarBuilder) {
        this._builder = builder;
    }

    public Construct() {
        this._builder.colour = "Red";
        this._builder.numDoors = 2;
    }
}
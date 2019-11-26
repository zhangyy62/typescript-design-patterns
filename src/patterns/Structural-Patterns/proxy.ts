interface Car {
    driveCar();
}

class MyCar implements Car {
    public driveCar() {
        return 'Car has been driven!';
    }
}

export class Driver {
    public age: number

    constructor(age: number) {
        this.age = age;
    }
}

export class ProxyCar implements Car {
    private _driver: Driver;
    private _realCar: MyCar;

    constructor(driver: Driver) {
        this._driver = driver;
        this._realCar = new MyCar();
    }

    public driveCar() {
        if (this._driver.age < 18) {
            return 'Sorry, the driver is too young to drive.';
        } else {
            return this._realCar.driveCar();
        }
    }
}


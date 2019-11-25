interface BillingStrategy {
    getActPrice(rawPrice: number): number;
}

export class NormalStrategy implements BillingStrategy {
    getActPrice(rawPrice: number): number {
        return rawPrice;
    }
}

export class HappyHourStrategy implements BillingStrategy {
    getActPrice(rawPrice: number): number {
        return rawPrice * 0.5;
    }
}

export class Customer {
    private _drinks: number[];

    public Strategy: BillingStrategy

    public constructor(strategy: BillingStrategy) {
        this._drinks = [];
        this.Strategy = strategy;
    }

    public add(price: number, quantity: number) {
        this._drinks.push(this.Strategy.getActPrice(price * quantity));
    }

    public getBill() {
        let sum = 0;
        this._drinks.forEach(x => {
            sum += x;
        });
        return sum;
    }

    public clear() {
        this._drinks = [];
    }
}

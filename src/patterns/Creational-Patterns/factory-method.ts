interface Person {
    getName(): string
}

export enum PersonType {
    Rural,
    Urban
}

class Villager implements Person {
    public getName(): string {
        return "Village Person";
    }
}

class CityPerson implements Person {
    public getName(): string {
        return "City Person";
    }
}

export class Factory {
    public getPerson(type: PersonType): Person {
        switch (type) {
            case PersonType.Rural:
                return new Villager();
            case PersonType.Urban:
                return new CityPerson();
            default:
                throw new Error();
        }
    }
}
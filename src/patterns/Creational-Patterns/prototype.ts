interface Cloneable {
    clone(): Person;
}

export class Person implements Cloneable {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    clone(): Person {
        return Object.assign({}, this);
    }
}

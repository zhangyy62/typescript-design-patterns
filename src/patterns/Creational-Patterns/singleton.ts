class LazySingleton {
    private static _instance = new LazySingleton();

    private constructor() { }

    static getInstance(): LazySingleton {
        if (!LazySingleton._instance) {
            LazySingleton._instance = new LazySingleton()
        }
        return this._instance
    }
}

class HungrySingleton {
    private static _instance = new HungrySingleton();

    private constructor() { }

    static getInstance(): HungrySingleton {
        return this._instance;
    }
}

export {
    LazySingleton,
    HungrySingleton
}

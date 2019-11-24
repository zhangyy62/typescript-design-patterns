export interface LightningPhone {
    recharge();
    useLightning();
}

export interface MicroUsbPhone {
    recharge();
    useMicroUsb();
}

export class Iphone implements LightningPhone {
    private connector: boolean;

    public useLightning() {
        this.connector = true;
        console.log("Lightning connected");
    }

    public recharge() {
        if (this.connector) {
            console.log("Recharge started");
            console.log("Recharge finished");
        } else {
            console.log("Connect Lightning first");
        }
    }
}

export class Android implements MicroUsbPhone {
    private connector: boolean;

    public useMicroUsb() {
        this.connector = true;
        console.log("MicroUsb connected");
    }

    public recharge() {
        if (this.connector) {
            console.log("Recharge started");
            console.log("Recharge finished");
        } else {
            console.log("Connect MicroUsb first");
        }
    }
}

export class LightningToMicroUsbAdapter implements MicroUsbPhone {
    private lightningPhone: LightningPhone;

    public constructor(lightningPhone: LightningPhone) {
        this.lightningPhone = lightningPhone;
    }

    public useMicroUsb() {
        console.log("MicroUsb connected");
        this.lightningPhone.useLightning();
    }

    public recharge() {
        this.lightningPhone.recharge();
    }
}

import { Iphone, Android, LightningToMicroUsbAdapter, MicroUsbPhone, LightningPhone } from '../../src/patterns/Structural-Patterns/adapter';
import * as assert from 'assert';

function rechargeMicroUsbPhone(phone: MicroUsbPhone) {
    phone.useMicroUsb();
    phone.recharge();
}

function rechargeLightningPhone(phone: LightningPhone) {
    phone.useLightning();
    phone.recharge();
}

describe('#adapter test', function () {
    it('adapter test', () => {
        let android = new Android();
        let iPhone = new Iphone();

        console.log("Recharging android with MicroUsb");
        rechargeMicroUsbPhone(android);

        console.log("Recharging iPhone with Lightning");
        rechargeLightningPhone(iPhone);

        console.log("Recharging iPhone with MicroUsb");
        rechargeMicroUsbPhone(new LightningToMicroUsbAdapter(iPhone));
    });
});
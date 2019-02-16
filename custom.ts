/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */

/**
 * header type XXX
 * first digit -> operation/function: 0: create, 1: resize, 2: move, 3: update, 4: postToChat
 * second digit -> object type: 1: meter, 2: block, 9: thermometer
 * third digit -> length of Name
 */

/**
 * Custom blocks
 */
//% weight=100 color=#993300 icon=""
namespace minecraft {
    /**
     * fill packet with zeros while "/" indicating end of message, message after "/" is redundant
     */
    function fillPacket(s: string): string {
        s += "/000000000000000000"
        return s;
    }

    /**
     * fill packet with zeros while "/" indicating end of message, message after "/" is redundant
     */
    function fixLenInt(v: number): string{
        let s: string;
        if(v.toString().length < 2) {
            s = v.toString();
        }else{
            s = "0" + v.toString();
        }
        return s;
    }

    /**
     * create meter(analog)
     * create meter by name with default values in python 
     */
    //% block
    export function createMeter(name: string): void {
        let message: string;
        let length = name.length;
        message = "01" + length + name;
        radio.sendString(fillPacket(message));
    }

    /**
     * create block(digital)
     * create block by name with default values in python 
     */
    //% block
    export function createBlock(name: string): void{
        let message: string;
        let length = name.length;
        message = "02" + length + name;
        radio.sendString(fillPacket(message));
    }

    /**
     * create thermometer
     * create thermometer by name with default values in python 
     */
    //% block
    export function createThermometer(name: string): void {
        let message: string;
        let length = name.length;
        message = "09" + length + name;
        radio.sendString(fillPacket(message));
    }

    /**
     * resize meter
     * resize meter by name 
     */
    //% block
    export function resizeMeter(name: string, x: number, y: number, z: number): void {
        let message: string;
        let length = name.length;
        message = "11" + length + fixLenInt(x) + fixLenInt(y) + fixLenInt(z);
        radio.sendString(fillPacket(message));
    }

    /**
     * resize block
     * resize block by name 
     */
    //% block
    export function resizeBlock(name: string, x: number, y: number, z: number): void {
        let message: string;
        let length = name.length;
        message = "12" + length + fixLenInt(x) + fixLenInt(y) + fixLenInt(z);
        radio.sendString(fillPacket(message));
    }

    /**
     * resize thermometer
     * resize thermometer by name 
     */
    //% block
    export function resizeThermometer(name: string, x: number, y: number, z: number): void {
        let message: string;
        let length = name.length;
        message = "19" + length + fixLenInt(x) + fixLenInt(y) + fixLenInt(z);
        radio.sendString(fillPacket(message));
    }

    /**
     * move meter
     * move meter by name 
     */
    //% block
    export function moveMeter(name: string, x: number, y: number, z: number): void {
        let message: string;
        let length = name.length;
        message = "21" + length + fixLenInt(x) + fixLenInt(y) + fixLenInt(z);
        radio.sendString(fillPacket(message));
    }

    /**
     * move block
     * move block by name 
     */
    //% block
    export function moveBlock(name: string, x: number, y: number, z: number): void {
        let message: string;
        let length = name.length;
        message = "22" + length + fixLenInt(x) + fixLenInt(y) + fixLenInt(z);
        radio.sendString(fillPacket(message));
    }

    /**
     * move Thermeter
     * move Thermeter by name 
     */
    //% block
    export function moveThermometer(name: string, x: number, y: number, z: number): void {
        let message: string;
        let length = name.length;
        message = "29" + length + fixLenInt(x) + fixLenInt(y) + fixLenInt(z);
        radio.sendString(fillPacket(message));
    }

    /**
     * update meter
     * update by name 
     */
    //% block
    export function updateMeter(name: string, v: number): void {
        let message: string;
        let length = name.length;
        message = "31" + length + fixLenInt(v);
        radio.sendString(fillPacket(message));
    }

    /**
     * update block
     * update by name 
     */
    //% block
    export function updateBlock(name: string, v: number): void {
        let message: string;
        let length = name.length;
        message = "32" + length + fixLenInt(v);
        radio.sendString(fillPacket(message));
    }

    /**
     * update Thermometer
     * update by name 
     */
    //% block
    export function updateThermometer(name: string, v: number): void {
        let message: string;
        let length = name.length;
        message = "33" + length + fixLenInt(v);
        radio.sendString(fillPacket(message));
    }


    /**
     * post to chat by meter
     * post by objectname 
     */
    //% block
    export function chatMeter(name: string, v: string): void {
        let message: string;
        let length = name.length;
        message = "41" + length + v;
        radio.sendString(fillPacket(message));
    }

    /**
     * post to chat by block
     * post by objectname 
     */
    //% block
    export function chatBlock(name: string, v: string): void {
        let message: string;
        let length = name.length;
        message = "42" + length + v;
        radio.sendString(fillPacket(message));
    }

    /**
     * post to chat by meter
     * post by objectname 
     */
    //% block
    export function chatThermometer(name: string, v: string): void {
        let message: string;
        let length = name.length;
        message = "43" + length + v;
        radio.sendString(fillPacket(message));
    }
}

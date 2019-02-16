
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
//% weight=100 color=#0fbc11 icon=""
namespace custom {
   /**
    * fill packet with zeros while "/" indicating end of message, message after "/" is redundant
    */
    function fillPacket(s: string): string{
        s += "/000000000000000000"
        return s;
    }
  
   /**
    * fill packet with zeros while "/" indicating end of message, message after "/" is redundant
    */
    function fixLenInt(v: var): string{
        if(v.toString().length < 2){
            let s = v.toString();
        }else{
          let s = "0" + v.toString();
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
        var length = name.length;
        message = "01" + length + name;
        return fillPacket(message);
    }
    
    /**
     * create block(digital)
     * create block by name with default values in python 
     */
    //% block
    export function createBlock(name: string): void {
        let message: string;
        var length = name.length;
        message = "02" + length + name;
        return fillPacket(message);
    }
  
    /**
     * create thermometer
     * create thermometer by name with default values in python 
     */
    //% block
    export function createThermometer(name: string): void {
        let message: string;
        var length = name.length;
        message = "09" + length + name;
        return fillPacket(message);
    }
    
    /**
     * resize block
     * resize block by name 
     */
    //% block
    export function resizeMeter(name: string, x: var, y: var, z: var): void {
        let message: string;
        var length = name.length;
        message = "11" + length + fixLenInt(x) + fixLenInt(y) + fixLenInt(z);
        return fillPacket(message);
    }
  
}

import { FormEvent } from "react";

/**
 * Provides utility methods
 */
export interface IUtil {

    /**     
     * Methods for aborting an event fired from HTML element
     * This method should be used as an event handler
     * 
     * @param evt 
     */
    abortEvent(evt: any): boolean
}

/**
 * Provides utility methods
 * @class
 */
class Util implements IUtil {
    
    abortEvent(evt: any): boolean {
        evt.preventDefault();
        return false;
    }
}

const util: IUtil = new Util();

export default util;
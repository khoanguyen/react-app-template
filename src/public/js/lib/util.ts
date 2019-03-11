import { FormEvent } from "react";

export interface IUtil {
    abortEvent(evt: FormEvent<HTMLFormElement>): boolean
}

/**
 * Provides utility methods
 * @class
 */
class Util implements IUtil{

    /**
     * Functions for aborting event
     * @param {Event} evt 
     */
    abortEvent(evt: FormEvent<HTMLFormElement>): boolean {
        evt.preventDefault();
        return false;
    }
}

const util = new Util();

export default util;
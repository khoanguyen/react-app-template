import { ENV_PRODUCTION, IEnv } from "./env";
import ioc from "./ioc";
import { SERVICE_ID } from "./identifiers";

export interface ILog {
    /**
     * Prints given input to console
     * @param obj 
     */
    info(...obj: any[]): void;

    /**
     * Prints trace of given input to console
     * @param obj 
     */
    debug(...obj: any[]): void;

    /**
     * Prints error to console
     * @param obj 
     */
    error(...obj: any[]): void;
}

class Log implements ILog {
    
    constructor() { }

    info(...obj: any[]) {
        this._write(console.log, ...obj);
    }

    debug(...obj: any[]) {
        this._write(console.trace, ...obj);
    }

    error(...obj: any[]): void {
        this._write(console.error, ...obj);        
    }

    /**     
     * @param writer 
     * @param obj 
     */
    private _write(writer: (...obj: any[]) => void, ...obj: any[]) {
        const env  = ioc.resolve<IEnv>(SERVICE_ID.IEnv);
        if (env.nodeEnv !== ENV_PRODUCTION) writer(...obj);
    }
}

const logger: ILog = new Log();
export default logger;
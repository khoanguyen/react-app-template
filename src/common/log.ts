export interface ILog {
    /**
     * Prints given input to console
     * @param obj 
     */
    log(...obj: any[]): void;

    /**
     * Prints trace of given input to console
     * @param obj 
     */
    trace(...obj: any[]): void;

    /**
     * Prints error to console
     * @param obj 
     */
    error(...obj: any[]): void;
}

class Log implements ILog {
    
    constructor() { }

    log(...obj: any[]) {
        const l_env: string = process.env.NODE_ENV || "development";

        if (l_env.trim().toLowerCase() !== 'production') console.log(...obj);
    }

    trace(...obj: any[]) {
        const l_env: string = process.env.NODE_ENV || "development";

        if (l_env.trim().toLowerCase() !== 'production') console.trace(...obj);
    }

    error(...obj: any[]): void {
        const l_env: string = process.env.NODE_ENV || "development";

        if (l_env.trim().toLowerCase() !== 'production') console.error(...obj);
    }
}

const Logger: ILog = new Log();
export default Logger;
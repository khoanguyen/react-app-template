
class Log {
    constructor() { }

    log(...obj: any[]) {
        const l_env: string = process.env.NODE_ENV || "development";

        if (l_env.trim().toLowerCase() !== 'production') console.log(...obj);
    }

    trace(...obj: any[]) {
        const l_env: string = process.env.NODE_ENV || "development";

        if (l_env.trim().toLowerCase() !== 'production') console.trace(...obj);
    }
}

const Logger: Log = new Log();
export default Logger;
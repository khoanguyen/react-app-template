import { ILog } from "./common/log";
import winston from 'winston';
import moment from 'moment';

export default class ServerLogger implements ILog {

    private _infoLogger: winston.Logger;
    private _errorLogger: winston.Logger;  

    constructor() {        

        this._infoLogger = winston.createLogger(
            {
                transports: [
                    new winston.transports.File({
                        level: 'info',
                        filename: './logs/info.log',
                        handleExceptions: true,
                        maxsize: 5242880, //5MB
                        maxFiles: 15,

                    }),
                    new winston.transports.Console({
                        level: 'debug',
                        handleExceptions: true,
                    })
                ],
                exitOnError: false
            }
        );

        this._errorLogger = winston.createLogger(
            {
                transports: [
                    new winston.transports.File({
                        level: 'error',
                        filename: './logs/error.log',
                        handleExceptions: true,
                        maxsize: 5242880, //5MB
                        maxFiles: 15,
                    }),
                    new winston.transports.Console({
                        level: 'debug',
                        handleExceptions: true,
                    })
                ],
                exitOnError: false
            }
        );
    }

    info(...obj: any[]): void {
        this._infoLogger.info({message: obj[0], timestamp: this.getCurrentTime()});
    }

    debug(...obj: any[]): void {
        this._infoLogger.debug({message: obj[0], timestamp: this.getCurrentTime()});
    }

    error(...obj: any[]): void {
        this._errorLogger.error({message: obj[0], timestamp: this.getCurrentTime()});
    }

    private getCurrentTime() {
        return moment();
    }
}
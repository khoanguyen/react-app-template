import { Request, Response, NextFunction, RequestHandler } from "express";
import * as path from 'path';
import ServerServices from "./server-services";

export function clientConfig(url: string): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        if (req.url.toLowerCase() === url.toLocaleLowerCase()) {
            const l_filePath = path.join(__dirname, '..', 'conf', `client.${ServerServices.env.nodeEnv}.js`);
            res.sendFile(l_filePath);
        } else {
            next();
        }
    };
}
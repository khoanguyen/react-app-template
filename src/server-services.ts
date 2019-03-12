import ioc from "./common/ioc";
import { SERVICE_ID } from "./common/identifiers";
import ServerEnv from "./server-env";
import { IEnv, ENV_TEST } from "./common/env";
import { ILog } from "./common/log";
import ServerLogger from "./server-logger";

// Init IoC
const env : IEnv = new ServerEnv();
ioc.bind(SERVICE_ID.IEnv, env);

if (env.nodeEnv === ENV_TEST) {
    // IoC for test
    // It can be external let the test script init it
} else {
    ioc.bind(SERVICE_ID.ILog, new ServerLogger());    
}

const ioc_logger = ioc.resolve<ILog>(SERVICE_ID.ILog);

const ServerServices = {
    env, 
    logger: ioc_logger
};

export default ServerServices;
import ioc from "../common/ioc";
import { SERVICE_ID } from "../common/identifiers";
import ServerEnv from "./server-env";
import { IEnv, ENV_TEST } from "../common/env";
import { ILog } from "../common/log";
import ServerLogger from "./server-logger";
import serverConfigService from "./server-config";
import { IConfigService } from "../common/config";

// Init IoC
const env : IEnv = new ServerEnv();
ioc.bind(SERVICE_ID.IEnv, env);

if (env.nodeEnv === ENV_TEST) {
    // IoC for test
    // It can be external
    // Let the test script init it
} else {
    ioc.bind(SERVICE_ID.ILog, new ServerLogger());
    ioc.bind(SERVICE_ID.IConfig, serverConfigService);    
}

const ServerServices = {
    env, 
    logger: ioc.resolve<ILog>(SERVICE_ID.ILog),
    config : ioc.resolve<IConfigService>(SERVICE_ID.IConfig)
};

export default ServerServices;
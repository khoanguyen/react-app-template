import { IConfigService } from "../common/config";
import { ENV_DEVELOPMENT } from "../common/env";

const env = (process.env.NODE_ENV || ENV_DEVELOPMENT).toLowerCase();

const config = require(`./conf/server.${env}.js`);

class ServerConfigService implements IConfigService {

    getConfig<TConfig>(key: string): TConfig {
        return config[key] as TConfig;
    }

}

const serverConfigService : IConfigService = new ServerConfigService();
export default serverConfigService;
import { IConfigService } from '../../../common/config';

class ClientConfigService implements IConfigService {
    private config: any = (window as any)._app_config_;

    getConfig<TConfig>(key: string): TConfig {
        return this.config[key] as TConfig;
    }
}

const clientConfigService : IConfigService = new ClientConfigService();
export default clientConfigService;
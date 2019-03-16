export interface IConfigService {
    getConfig<TConfig>(key: string) : TConfig;  
}

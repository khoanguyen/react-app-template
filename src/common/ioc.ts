/**
 * Simple IoC container
 */
class IoC {    
    readonly registry: any;

    constructor() { 
        this.registry = { };
    }

    /**
     * Binds implementation to service interface
     * @param identifier 
     * @param instance 
     */
    bind<TService, TImpl extends TService>(identifier: string, instance: TImpl): void {
        this.registry[identifier] = instance;        
    }

    /**
     * Resolves implementation for given service
     * @param identifier 
     */
    resolve<TService>(identifier: string) : TService {
        return this.registry[identifier];
    }
}

const ioc = new IoC();
export default ioc;
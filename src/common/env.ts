/**
 * Provides environment variables
 */
export interface IEnv {
    /**
     * NODE_ENV value
     */
    readonly nodeEnv: string;
}

export const ENV_DEVELOPMENT: string = 'development';
export const ENV_TEST: string = 'test';
export const ENV_PRODUCTION: string = 'production';

export class Env implements IEnv {
    readonly nodeEnv: string;

    constructor() {
        this.nodeEnv = (process.env.NODE_ENV || ENV_DEVELOPMENT).toLowerCase();
    }
}

import ioc from '../../../common/ioc';
import { SERVICE_ID } from '../../../common/identifiers';
import logger, { ILog } from '../../../common/log';
import ClientEnv from '../lib/client-env';
import util, { IUtil } from '../lib/util';
import { IEnv, ENV_TEST } from '../../../common/env';
import storeService, { IStoreService } from './store';

/* Init IoC */
ioc.bind(SERVICE_ID.IEnv, new ClientEnv());

const env = ioc.resolve<IEnv>(SERVICE_ID.IEnv);

if (env.nodeEnv === ENV_TEST) {
    // IoC for test
    // It can be external 
    // Let the test script init it
} else {
    ioc.bind(SERVICE_ID.ILog, logger);
    ioc.bind(SERVICE_ID.IUtil, util);
    ioc.bind(SERVICE_ID.IStore, storeService);
}

const ioc_logger = ioc.resolve<ILog>(SERVICE_ID.ILog);
const ioc_util = ioc.resolve<IUtil>(SERVICE_ID.IUtil);
const ioc_store = ioc.resolve<IStoreService>(SERVICE_ID.IStore);

const Services = {
    env,
    logger: ioc_logger,
    util: ioc_util,
    store: ioc_store
}

export default Services;
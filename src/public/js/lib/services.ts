import ioc from '../../../common/ioc';
import { SERVICE_ID } from '../../../common/identifiers';
import logger, { ILog } from '../../../common/log';
import ClientEnv from '../lib/client-env';
import util, { IUtil } from '../lib/util';
import { IEnv, ENV_TEST } from '../../../common/env';

/* Init IoC */
ioc.bind(SERVICE_ID.IEnv, new ClientEnv());

const env = ioc.resolve<IEnv>(SERVICE_ID.IEnv);

if (env.nodeEnv === ENV_TEST) {
    // IoC for test
    // It can be external let the test script init it
} else {
    ioc.bind(SERVICE_ID.ILog, logger);
    ioc.bind(SERVICE_ID.IUtil, util);
}

const ioc_logger = ioc.resolve<ILog>(SERVICE_ID.ILog);
const ioc_util = ioc.resolve<IUtil>(SERVICE_ID.IUtil);

const Services = {
    env,
    logger: ioc_logger,
    util: ioc_util
}

export default Services;
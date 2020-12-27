import Server from './Server';

import { Logger } from './utils/logger.utils';

import * as os from 'os';
import * as cluster from 'cluster';

if (cluster.isMaster) {
    // const CPUS: any = os.cpus();
    for (let i = 0; i < 2; i++) {
        cluster.fork();
    }
} else {
    try {
        Server.setup();
        Server.connectDb();
        Server.start();
    } catch (err) {
        Logger(`Problem at worker: ${err}`, 'BRed');
    }
}

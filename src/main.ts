import Server from './Server';

import * as os from 'os';
import * as cluster from 'cluster';

if (cluster.isMaster) {
    const CPUS: any = os.cpus();
    CPUS.forEach(() => cluster.fork());
} else {
    Server.init();
    // Server.loadDatabase();
}

import Server from './Server';

import * as os from 'os';
import * as cluster from 'cluster';

if (cluster.isMaster) {
    const CPUS: any = os.cpus();
    for (let i = 0; i < 2; i++) {
        cluster.fork();
    }
} else {
    Server.connectDb();
    Server.start();
    // Server.loadDatabase();
}

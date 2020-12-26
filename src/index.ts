/* eslint-disable @typescript-eslint/no-explicit-any */
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.join(__dirname, '../.env') });
import express from 'express';

import bodyParser from 'body-parser';

import * as os from 'os';
import * as cluster from 'cluster';

if (cluster.isMaster) {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    const PORT = process.env.PORT;

    app.listen(PORT, () => {
        console.log(`⚡️[server]: Server is running at port ${PORT}`);
    });

    // const CPUS: any = os.cpus();
    // for (let i = 0; i < CPUS.length; i++) {
    //     cluster
    //         .fork()
    //         .on('listening', (worker: any) =>
    //             console.log(`Server :: Cluster with ProcessID '${worker.process.pid}' Connected!`),
    //         );
    // }
} else {
    console.log('AT WORKERS');
}

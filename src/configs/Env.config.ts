import * as dotenv from 'dotenv';
import * as path from 'path';

import { Logger } from '../utils/logger.utils';

class Environment {
    private Env: string | undefined;
    private Port: string | undefined;
    private Db: any;

    public load(): void {
        dotenv.config({ path: path.join(__dirname, '../../.env') });
        this.Env = process.env.NODE_ENV;
        this.Port = process.env.PORT;
        switch (this.Env) {
            case 'local':
                this.Db = {
                    url: process.env.LOCAL_DB_URL,
                    name: process.env.LOCAL_DB_NAME,
                    user: process.env.LOCAL_DB_USER,
                    password: process.env.LOCAL_DB_PWD,
                };
                break;
            case 'dev':
                this.Db = {
                    url: process.env.DEV_DB_URL,
                    name: process.env.DEV_DB_NAME,
                    user: process.env.DEV_DB_USER,
                    password: process.env.DEV_DB_PWD,
                };
                break;
            case 'production':
                this.Db = {
                    url: process.env.DEV_DB_URL,
                    name: process.env.DEV_DB_NAME,
                    user: process.env.DEV_DB_USER,
                    password: process.env.DEV_DB_PWD,
                };
                break;
        }
        Logger(`Environment <${this.Env}>`, 'FMagenta');
    }

    public get env(): string | undefined {
        return this.Env;
    }
    public set env(newEnv: string | undefined) {
        this.Env = newEnv;
    }

    public get port(): string | undefined {
        return this.Port;
    }
    public set port(newPort: string | undefined) {
        this.Port = newPort;
    }

    public get db(): any | undefined {
        return this.Db;
    }
    public set db(newDb: any | undefined) {
        this.Db = newDb;
    }
}

export default new Environment();

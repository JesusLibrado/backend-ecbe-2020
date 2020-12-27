import * as dotenv from 'dotenv';
import * as path from 'path';

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
            case 'dev':
                this.Db = {
                    url: process.env.DEV_DB_URL,
                    user: process.env.DEV_DB_USER,
                    password: process.env.DEV_DB_PWD,
                };
                break;
        }
    }
    public get env(): string | undefined {
        return this.Env;
    }

    public get port(): string | undefined {
        return this.Port;
    }

    public get db(): string | undefined {
        return this.Db;
    }
}

export default new Environment();

import mongoose from 'mongoose';

import Environment from './Env.config';

export class Database {
    public connect(): void {
        mongoose.set('useCreateIndex', true);
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        const fieldsRegex = /([<]username[>][:][<]password[>])/g;
        const newFields = `${Environment.db.user}:${Environment.db.password}`;
        const databaseUrl = Environment.db.url.replace(fieldsRegex, newFields);
        mongoose.connect(`${databaseUrl}/${Environment.db.name}`, options);
    }

    public get connection(): mongoose.Connection {
        return mongoose.connection;
    }
}

export default mongoose;

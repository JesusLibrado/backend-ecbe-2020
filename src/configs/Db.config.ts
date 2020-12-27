import mongoose from 'mongoose';

import Environment from './Env.config';

class Database {
    public connect(): void {
        const options = { useNewUrlParser: true, useUnifiedTopology: true };
        const fieldsRegex = /([<]username[>][:][<]password[>])/g;
        const newFields = `${Environment.db.user}:${Environment.db.password}`;
        const databaseUrl = Environment.db.url.replace(fieldsRegex, newFields);
        mongoose
            .connect(`${databaseUrl}/${Environment.db.name}`, options)
            .then((res) => console.log(res.connections[0].name))
            .catch((err) => {
                throw mongoose.mongo.MongoError;
            });
    }
}

export default new Database();

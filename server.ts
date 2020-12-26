import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
import express from 'express';

import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const PORT = process.env.PORT;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at port ${PORT}`);
});
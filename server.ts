import express from 'express';
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

const app = express();
const PORT = process.env.PORT;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at port ${PORT}`);
});
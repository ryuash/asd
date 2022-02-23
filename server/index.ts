import 'dotenv/config';
import * as R from 'ramda';
import express, {
  Request, Response,
} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { AccountBalanceRequestType } from './types';

const app = express();
const PORT = 5000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (_, res) => {
  res.status(200).send('pong');
});

app.post('/account_balance', (req, res) => {
  const body = req.body as AccountBalanceRequestType;
  console.log(body, 'body');
  // res.status(200).send('pong');
  res.status(200).send('pong');
});

const init = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Winging it up on port ${PORT}`);
      console.log(`localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

init();

export default app;

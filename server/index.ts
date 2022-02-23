import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { bankClient } from '@grpc/client';
import { QueryAllBalancesRequest } from '@proto/cosmos/bank/v1beta1/query_pb';
import { PageRequest } from '@proto/cosmos/base/query/v1beta1/pagination_pb';
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

app.post('/account_balance', async (req, res) => {
  const body = req.body as AccountBalanceRequestType;
  const params = new QueryAllBalancesRequest();
  params.setAddress(body.input.address);

  // const pageRequest = new PageRequest();
  // pageRequest.setLimit(10);
  // pageRequest.toObject

  const clientGetBalance = (options: any) => new Promise((resolve, _reject) => {
    bankClient.allBalances(options, (error, response) => {
      if (response) {
        resolve(response.toObject());
      } else {
        resolve({
          balancesList: [],
        });
      }
    });
  });

  const data = await clientGetBalance(params);

  res.status(200).json({
    data,
  });
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

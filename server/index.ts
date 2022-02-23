import 'dotenv/config';
import * as R from 'ramda';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { bankClient, stakingClient, distributionClient } from '@grpc/client';
import { QueryAllBalancesRequest } from '@proto/cosmos/bank/v1beta1/query_pb';
import { PageRequest } from '@proto/cosmos/base/query/v1beta1/pagination_pb';
import { QueryDelegatorDelegationsRequest } from '@proto/cosmos/staking/v1beta1/query_pb';
import { QueryDelegationTotalRewardsRequest } from '@proto/cosmos/distribution/v1beta1/query_pb';
import { AccountBalanceRequestType, AccountDelegationRequestType } from './types';

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

  const clientGetBalance = (options: any) => new Promise((resolve, reject) => {
    bankClient.allBalances(options, (error, response) => {
      if (error) {
        reject(error);
      }
      if (response) {
        resolve(response.toObject());
      }
    });
  });

  const data = await clientGetBalance(params);

  const formatted = R.pathOr([], ['balancesList'], data);

  res.status(200).json(formatted);
});

app.post('/delegation_reward', async (req, res) => {
  const body = req.body as AccountDelegationRequestType;
  const params = new QueryDelegationTotalRewardsRequest();
  params.setDelegatorAddress(body.input.address);

  const clientGetDelegationRewards = (options: any) => new Promise((resolve, reject) => {
    distributionClient.delegationTotalRewards(options, (error, response) => {
      if (error) {
        reject(error);
      }
      if (response) {
        resolve(response.toObject());
      }
    });
  });

  const data = await clientGetDelegationRewards(params);
  const formatted = R.pathOr([], ['rewardsList'], data).map((x) => ({
    validator_address: R.pathOr('', ['validatorAddress'], x),
    coins: R.pathOr([], ['rewardList'], x),
  }));

  res.status(200).json(formatted);
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

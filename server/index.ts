import 'dotenv/config';
import * as R from 'ramda';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { bankClient, stakingClient, distributionClient } from '@grpc/client';
import { QueryAllBalancesRequest } from '@proto/cosmos/bank/v1beta1/query_pb';
import { PageRequest } from '@proto/cosmos/base/query/v1beta1/pagination_pb';
import { QueryDelegatorDelegationsRequest } from '@proto/cosmos/staking/v1beta1/query_pb';
import {
  QueryDelegationTotalRewardsRequest,
  QueryDelegatorWithdrawAddressRequest,
  QueryValidatorOutstandingRewardsRequest,
} from '@proto/cosmos/distribution/v1beta1/query_pb';
import {
  AccountBalanceRequestType,
  AccountDelegationRequestType,
  AccountWithdrawalAddressRequestType,
  ValidatorCommissionAmountRequestType,
  DelegatorDelegationsRequestType,
} from './types';

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

app.post('/delegator_withdraw_address', async (req, res) => {
  const body = req.body as AccountWithdrawalAddressRequestType;
  const params = new QueryDelegatorWithdrawAddressRequest();
  params.setDelegatorAddress(body.input.address);

  const clientWithdrawalAddress = (options: any) => new Promise((resolve, reject) => {
    distributionClient.delegatorWithdrawAddress(options, (error, response) => {
      if (error) {
        reject(error);
      }
      if (response) {
        resolve(response.toObject());
      }
    });
  });

  const data = await clientWithdrawalAddress(params);
  const formatted = {
    address: R.pathOr('', ['withdrawAddress'], data),
  };

  res.status(200).json(formatted);
});

app.post('/validator_commission_amount', async (req, res) => {
  const body = req.body as ValidatorCommissionAmountRequestType;
  const params = new QueryValidatorOutstandingRewardsRequest();
  params.setValidatorAddress(body.input.address);

  const clientWithdrawalAddress = (options: any) => new Promise((resolve, reject) => {
    distributionClient.validatorOutstandingRewards(options, (error, response) => {
      if (error) {
        reject(error);
      }
      if (response) {
        resolve(response.toObject());
      }
    });
  });

  const data = await clientWithdrawalAddress(params);
  const formatted = R.pathOr([], ['rewards', 'rewardsList'], data);

  res.status(200).json(formatted);
});

app.post('/delegation', async (req, res) => {
  const body = req.body as DelegatorDelegationsRequestType;
  const params = new QueryDelegatorDelegationsRequest();
  params.setDelegatorAddr(body.input.address);

  const pageRequest = new PageRequest();
  if (body.input.count_total) {
    pageRequest.setCountTotal(false);
  }

  if (body.input.limit) {
    pageRequest.setLimit(body.input.limit);
  }

  if (body.input.offset) {
    pageRequest.setOffset(body.input.offset);
  }

  params.setPagination(pageRequest);

  const clientWithdrawalAddress = (options: any) => new Promise((resolve, reject) => {
    stakingClient.delegatorDelegations(options, (error, response) => {
      if (error) {
        reject(error);
      }
      if (response) {
        resolve(response.toObject());
      }
    });
  });

  const data = await clientWithdrawalAddress(params);
  const formattedDelegations = R.pathOr([], ['delegationResponsesList'], data).map((x) => ({
    delegator_address: R.pathOr('', ['delegation', 'delegatorAddress'], x),
    validator_address: R.pathOr('', ['delegation', 'validatorAddress'], x),
    coins: R.pathOr([], ['balance'], x),
  }));

  const format: any = {
    delegations: formattedDelegations,
  };

  if (body.input.count_total) {
    format.pagination = {
      total: R.pathOr(0, ['pagination', 'total'], data),
    };
  }
  res.status(200).json(format);
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

import 'dotenv/config';
import Big from 'big.js';
import * as R from 'ramda';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dayjs from '@utils/dayjs';
import { bankClient, stakingClient, distributionClient } from '@grpc/client';
import { QueryAllBalancesRequest } from '@proto/cosmos/bank/v1beta1/query_pb';
import { PageRequest } from '@proto/cosmos/base/query/v1beta1/pagination_pb';
import {
  QueryDelegatorDelegationsRequest,
  QueryDelegatorUnbondingDelegationsRequest,
  QueryRedelegationsRequest,
} from '@proto/cosmos/staking/v1beta1/query_pb';
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
  DelegationTotalRequestType,
  DelegatorUnbondingRequestType,
  UnbondingTotalRequestType,
} from './types';

const app = express();
const { PORT } = process.env;

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

app.post('/delegation_total', async (req, res) => {
  const body = req.body as DelegationTotalRequestType;
  const params = new QueryDelegatorDelegationsRequest();
  // fuck hope this doesnt break
  params.setDelegatorAddr(body.input.address);

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
  const coins: any = {};

  R.pathOr([], ['delegationResponsesList'], data).forEach((x) => {
    const denom = R.pathOr('', ['balance', 'denom'], x);
    const amount = R.pathOr('', ['balance', 'amount'], x);
    if (coins[denom]) {
      coins[denom] = Big(coins[denom]).add(amount).toPrecision();
    } else {
      coins[denom] = amount;
    }
  });

  const denoms = R.keys(coins);

  const formatted = {
    coins: denoms.map((x) => ({
      denom: x,
      amount: coins[x],
    })),
  };
  res.status(200).json(formatted);
});

app.post('/unbonding_delegation', async (req, res) => {
  const body = req.body as DelegatorUnbondingRequestType;
  const params = new QueryDelegatorUnbondingDelegationsRequest();
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
    stakingClient.delegatorUnbondingDelegations(options, (error, response) => {
      if (error) {
        reject(error);
      }
      if (response) {
        resolve(response.toObject());
      }
    });
  });

  const data = await clientWithdrawalAddress(params);

  const formattedStaking = R.pathOr([], ['unbondingResponsesList'], data).map((x) => ({
    delegator_address: R.pathOr('', ['delegatorAddress'], x),
    validator_address: R.pathOr('', ['validatorAddress'], x),
    entries: R.pathOr([], ['entriesList'], x).map((y) => {
      const time = dayjs.utc(dayjs.unix(R.pathOr(0, ['completionTime', 'seconds'], y))).format('YYYY-MM-DDTHH:mm:ss');
      return ({
        creation_height: R.pathOr('', ['creationHeight'], y),
        completion_time: time,
        initial_balance: R.pathOr('', ['initialBalance'], y),
        balance: R.pathOr('', ['balance'], y),
      });
    }),
  }));

  const format: any = {
    unbonding_delegations: formattedStaking,
  };

  if (body.input.count_total) {
    format.pagination = {
      total: R.pathOr(0, ['pagination', 'total'], data),
    };
  }
  res.status(200).json(format);
});

app.post('/unbonding_delegation_total', async (req, res) => {
  const body = req.body as UnbondingTotalRequestType;
  const params = new QueryDelegatorUnbondingDelegationsRequest();
  // fuck hope this doesnt break
  params.setDelegatorAddr(body.input.address);

  const clientWithdrawalAddress = (options: any) => new Promise((resolve, reject) => {
    stakingClient.delegatorUnbondingDelegations(options, (error, response) => {
      if (error) {
        reject(error);
      }
      if (response) {
        resolve(response.toObject());
      }
    });
  });

  const data = await clientWithdrawalAddress(params);
  const coins: any = {};

  R.pathOr([], ['unbondingResponsesList'], data).forEach((x) => {
    R.pathOr([], ['entriesList'], x).forEach((y) => {
      const amount = R.pathOr('0', ['balance'], y);
      const denom = process.env.STAKE_DENOM as string;
      if (coins[denom]) {
        coins[denom] = Big(coins[denom]).add(amount).toPrecision();
      } else {
        coins[denom] = amount;
      }
    });
  });

  const denoms = R.keys(coins);

  const formatted = {
    coins: denoms.map((x) => ({
      denom: x,
      amount: coins[x],
    })),
  };
  res.status(200).json(formatted);
});

app.post('/redelegation', async (req, res) => {
  const body = req.body as DelegatorUnbondingRequestType;
  const params = new QueryRedelegationsRequest();
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
    stakingClient.redelegations(options, (error, response) => {
      if (error) {
        reject(error);
      }
      if (response) {
        resolve(response.toObject());
      }
    });
  });

  const data = await clientWithdrawalAddress(params);
  const formattedStaking = R.pathOr([], ['redelegationResponsesList'], data).map((x) => ({
    delegator_address: R.pathOr('', ['redelegation', 'delegatorAddress'], x),
    validator_src_address: R.pathOr('', ['redelegation', 'validatorSrcAddress'], x),
    validator_dst_address: R.pathOr('', ['redelegation', 'validatorDstAddress'], x),
    entries: R.pathOr([], ['entriesList'], x).map((y) => {
      const time = dayjs.utc(dayjs.unix(R.pathOr(0, ['redelegationEntry', 'completionTime', 'seconds'], y))).format('YYYY-MM-DDTHH:mm:ss');
      return ({
        completion_time: time,
        balance: R.pathOr('', ['balance'], y),
      });
    }),
  }));

  const format: any = {
    redelegations: formattedStaking,
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

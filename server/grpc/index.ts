/* eslint-disable */
import 'dotenv/config';
import * as grpc from '@grpc/grpc-js';
import { ServiceClient as BaseClient } from '@proto/cosmos/base/tendermint/v1beta1/query_grpc_pb';
import { QueryClient as StakingClient } from '@proto/cosmos/staking/v1beta1/query_grpc_pb';

// base/tendermint
export const baseClient = new BaseClient(process.env.GRPC as string, grpc.credentials.createSsl());
export const stakingClient = new StakingClient(process.env.GRPC as string, grpc.credentials.createSsl());

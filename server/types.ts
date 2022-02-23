export type AccountType = {
  input: {
    address: string;
    height?: number;
  }
}
export type AccountBalanceRequestType = AccountType;

export type AccountDelegationRequestType = AccountType;

export type AccountWithdrawalAddressRequestType = AccountType;

export type ValidatorCommissionAmountRequestType = AccountType;

export type DelegatorDelegationsRequestType = {
  input: {
    address: string;
    offset?: number;
    limit?: number;
    count_total?: boolean;
  }
}

export type DelegationTotalRequestType = AccountType;

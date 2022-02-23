export type AccountType = {
  input: {
    address: string;
    height?: number;
  }
}
export type AccountBalanceRequestType = AccountType;

export type AccountDelegationRequestType = AccountType;

export type AccountWithdrawalAddressRequestType = AccountType;

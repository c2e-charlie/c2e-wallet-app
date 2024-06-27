export interface HistoryType {
  id: number;
  transType:
    | 'deposit'
    | 'withdraw'
    | 'TRANSFER'
    | 'SWAP'
    | 'MINTING'
    | 'VENDING';
  transState: 'SUCCESS' | 'FAIL' | 'PENDING';
  balance: string;
  tokenAddress: string;
  confirmAt: string;
}

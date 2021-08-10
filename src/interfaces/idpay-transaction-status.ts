export enum IDPayTrasactionStatus {
  NOT_DONE = 1,
  NO_SUCCESS = 2,
  ERROR = 3,
  BLOCKED = 4,
  REFUNDED_TO_DEPOSITOR = 5,
  SYSTEMATIC_REFUND = 6,
  PAYMENT_CANCELED = 7,
  USER_AT_PG = 8,
  WAITING_FOR_APPROVAL = 10,
  PAYMENT_ACCEPTED = 100,
  PAYMENT_PREVIOUSLY_ACCEPTED = 101,
  PAYMENT_TRANSFERED_TO_PAYEE = 200,
}

export const IDPayTrasactionStatusDesc = {
  1: 'Transaction not done',
  2: 'Transaction not successfull',
  3: 'Transaction failed due to an error',
  4: 'Transaction blocked',
  5: 'Transaction refunded to user',
  6: 'Transaction refunded systematically',
  7: 'Transaction canceled by user',
  8: 'User is at the payment gateway',
  10: 'Transaction waiting for verification',
  100: 'Transaction verified',
  101: 'Transaction has already been verified',
  200: 'Transaction recieved by recipient',
};

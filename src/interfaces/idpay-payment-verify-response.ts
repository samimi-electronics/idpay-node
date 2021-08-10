interface IPayment {
  track_id: string;
  amount: number;
  card_no: string;
  hashed_card_no: string;
  date: Date;
}

interface IVerify {
  date: Date;
}

export interface IDPayPaymentVerifyResponse {
  status: number;
  track_id: number;
  id: string;
  order_id: string;
  amount: number;
  date: Date;
  payment: IPayment;
  verify: IVerify;
}

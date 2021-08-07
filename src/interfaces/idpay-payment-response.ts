import { IDPayTrasactionStatus } from '.';

export interface POSTidPayTrasactionResult {
  status: IDPayTrasactionStatus;
  track_id: number;
  id: string;
  order_id: string;
  amount: number;
  card_no: string;
  hashed_card_no: string;
  date: Date;
}

export interface GETidPayTrasactionResult {
  status: IDPayTrasactionStatus;
  track_id: number;
  id: string;
}
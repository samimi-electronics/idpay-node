import axios, { AxiosResponse } from 'axios';
import { config } from './cfg';
import {
  CreatePayment,
  CreatePaymentResponse,
  IDPayPaymentVerifyResponse,
  IDPayTrasactionResult,
  IDPayTrasactionStatus,
  iDPayTrasactionStatusDesc,
} from './interfaces';

import * as uuid from 'uuid';
import { idPayErrorCodes } from './interfaces/idpay-error-codes';

export class IDPay {
  private apiKey: string;
  private sandBox: boolean = false;

  /**
   *
   * @param apiKey API-KEY provided by IDPay
   * @param sandbox Flag to enable sandbox mode for testing purposes
   */
  constructor(apiKey: string, sandbox?: boolean) {
    if (!apiKey) throw new Error('API Key not provided.');
    this.apiKey = apiKey;
    sandbox && sandbox ? (this.sandBox = false) : (this.sandBox = true);
  }

  /**
   * @description
   * @param payment Payment request object
   * @returns Payment Response
   */
  public async paymentRequest(payment: CreatePayment): Promise<CreatePaymentResponse> {
    if (!payment.order_id || !payment.order_id.length) {
      payment.order_id = uuid.v4();
    }

    let response: AxiosResponse<CreatePaymentResponse>;
    try {
      response = await axios.post<CreatePaymentResponse>(config.createPaymentURL, payment, {
        headers: {
          'Content-type': 'application/json',
          'X-API-KEY': this.apiKey,
          'X-SANDBOX': this.sandBox ? 1 : 0,
        },
      });
    } catch (err) {
      const errorDesc = idPayErrorCodes[err.response.error_code];
      throw new Error(errorDesc);
    }
    return response.data;
  }

  /**
   * @description Callback is optional as the user can implement custom logic outside of
   * the function and user can use this function to just verify the callback result.
   */
  public processPaymentRequest(
    cbResult: IDPayTrasactionResult,
    cb?: (res: IDPayTrasactionResult) => void,
  ): boolean | void {
    if (cb && typeof cb !== 'function') throw new Error('Callback provided is not a function');
    if (cbResult.status !== IDPayTrasactionStatus.WAITING_FOR_APPROVAL)
      throw new Error(iDPayTrasactionStatusDesc[cbResult.status]);
    if (!cb) return true;
    cb(cbResult);
    return;
  }

  /**
   * @description Callback is optional as the user can implement custom logic outside of
   * the function. User can use this send a the payment result to verify the payment.
   * @returns Payment verification result if a callback is not provided
   */
  public async verifyPayment(id: string, order_id: string, cb?: (res: IDPayPaymentVerifyResponse) => void) {
    if (!id) throw new Error('Transaction id not provided');
    if (typeof id !== 'string') throw new Error('Trasaction id provided is not a string');
    if (!order_id) throw new Error('Transaction order_id not provided');
    if (typeof order_id !== 'string') throw new Error('Trasaction order_id provided is not a string');
    if (cb && typeof cb !== 'function') throw new Error('Callback provided is not a function');

    let result: IDPayPaymentVerifyResponse | undefined;
    try {
      result = (
        await axios.post<IDPayPaymentVerifyResponse>(config.verifyPayment, {
          id,
          order_id,
        })
      ).data;
    } catch (err) {
      throw new Error(idPayErrorCodes[err.response.data.error_code]);
    }
    const { status } = result;
    if (status !== IDPayTrasactionStatus.PAYMENT_ACCEPTED) {
      throw new Error(iDPayTrasactionStatusDesc[status]);
    }
    if (!cb) return result;
    cb(result);
  }
}

import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { config } from "./cfg";
import {
  CreatePayment,
  CreatePaymentResponse,
  GETidPayTrasactionResult,
  POSTidPayTrasactionResult,
} from "./interfaces";
import * as uuid from "uuid";
import { idPayErrorCodes } from "./interfaces/idpay-error-codes";

export class IDPay {
  private apiKey: string;
  readonly sandBox: boolean = false;
  /**
   * 
   * @param apiKey Your IDPay API-KEY
   * @param sandbox optional - enable sandbox mode
   */
  constructor(apiKey: string, sandbox?: boolean) {
    if (!apiKey) throw new Error("API Key not provided.");
    this.apiKey = apiKey;
    sandbox && sandbox ? this.sandBox = false : this.sandBox = true;
  }

  /**
   * @description Creates a payment request to IDPay
   * @param {CreatePayment} payment
   */
  public async paymentRequest(
    payment: CreatePayment
  ): Promise<CreatePaymentResponse> {
    
    if (!payment.order_id || !payment.order_id.length) {
      payment.order_id = uuid.v4();
    }
    
    let response: AxiosResponse<CreatePaymentResponse>;
    try {
      response = await axios.post<CreatePaymentResponse>(
        config.createPaymentURL,
        payment,
        {
          headers: {
            "Content-type": "application/json",
            "X-API-KEY": this.apiKey,
            "X-SANDBOX": this.sandBox ? 1 : 0,
          }
        }
      );

    } catch (err) {
      const { response } = err;
      let errorDesc = idPayErrorCodes[response.error_code];
      throw new Error(errorDesc);
    }
    return response.data;
  }

  // public processPaymentRequest(
  //   responseType: "GET" | "POST",
  //   idpayTransactionResult: POSTidPayTrasactionResult | GETidPayTrasactionResult
  // ) {
  //   if (
  //     idpayTransactionResult.status != IDPayTrasactionStatus.WAITING_FOR_APPROVAL
  //   ) {

  //   }
  // }
}

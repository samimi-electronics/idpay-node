import { CreatePayment, CreatePaymentResponse } from "./interfaces";
export declare class IDPay {
    private apiKey;
    readonly sandBox: boolean;
    constructor(apiKey: string, sandbox?: boolean);
    paymentRequest(payment: CreatePayment): Promise<CreatePaymentResponse>;
}

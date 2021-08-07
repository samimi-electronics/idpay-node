export interface CreatePayment {
    order_id: string;
    amount: number;
    name?: string;
    phone?: string;
    mail?: string;
    desc?: string;
    callbackUrl: string;
}

import { IDPay } from '..';

jest.setTimeout(10000);

describe("IDPay", () => {
    
    it('should return an error saying "API Key not provided."', () => {
        try {
            const idpay = new IDPay('', true);
        } catch(err) {
            expect(err.message).toBe('API Key not provided.');
        }
    });

    it("should send a payment request and recieve a response", async () => {
        const idpay = new IDPay('32f7a3af-3f7a-4f96-b62b-2c280c46c5a6', true);
        const result = await idpay.paymentRequest({
            amount: 10000,
            callback: 'http://localhost:3000/pg-callback',
            order_id: ''
        });
        console.log(result);
        return result;
    });

    it('should process the payment request response and return true if cb is defined', () => {
        const idpay = new IDPay('32f7a3af-3f7a-4f96-b62b-2c280c46c5a6', true);
        expect(idpay.processPaymentRequest({ status: 10, track_id: 504727, id: "904b14a779fc605c52bb551d3eec14fe", order_id: "034ac864-5112-432f-b006-c0dc339c78d5", amount: 10000, card_no: "123456******1234", hashed_card_no: "E59FA6241C94B8836E3D03120DF33E80FD988888BBA0A122240C2E7D23B48295", date: new Date(1628683143 * 1000) })).toBe(true);
    });

    it('should process the payment request response and throw an error if code is not 10', () => {
        const idpay = new IDPay('32f7a3af-3f7a-4f96-b62b-2c280c46c5a6', true);
        try {
            idpay.processPaymentRequest({ status: 101, track_id: 504727, id: "904b14a779fc605c52bb551d3eec14fe", order_id: "034ac864-5112-432f-b006-c0dc339c78d5", amount: 10000, card_no: "123456******1234", hashed_card_no: "E59FA6241C94B8836E3D03120DF33E80FD988888BBA0A122240C2E7D23B48295", date: new Date(1628683143 * 1000) });
        } catch(err) {
            expect(err.message).toBeDefined();
        }
    });
});
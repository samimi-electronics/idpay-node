"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iDPayTrasactionStatusDesc = exports.IDPayTrasactionStatus = void 0;
var IDPayTrasactionStatus;
(function (IDPayTrasactionStatus) {
    IDPayTrasactionStatus[IDPayTrasactionStatus["NOT_DONE"] = 1] = "NOT_DONE";
    IDPayTrasactionStatus[IDPayTrasactionStatus["NO_SUCCESS"] = 2] = "NO_SUCCESS";
    IDPayTrasactionStatus[IDPayTrasactionStatus["ERROR"] = 3] = "ERROR";
    IDPayTrasactionStatus[IDPayTrasactionStatus["BLOCKED"] = 4] = "BLOCKED";
    IDPayTrasactionStatus[IDPayTrasactionStatus["REFUNDED_TO_DEPOSITOR"] = 5] = "REFUNDED_TO_DEPOSITOR";
    IDPayTrasactionStatus[IDPayTrasactionStatus["SYSTEMATIC_REFUND"] = 6] = "SYSTEMATIC_REFUND";
    IDPayTrasactionStatus[IDPayTrasactionStatus["PAYMENT_CANCELED"] = 7] = "PAYMENT_CANCELED";
    IDPayTrasactionStatus[IDPayTrasactionStatus["USER_AT_PG"] = 8] = "USER_AT_PG";
    IDPayTrasactionStatus[IDPayTrasactionStatus["WAITING_FOR_APPROVAL"] = 10] = "WAITING_FOR_APPROVAL";
    IDPayTrasactionStatus[IDPayTrasactionStatus["PAYMENT_ACCEPTED"] = 100] = "PAYMENT_ACCEPTED";
    IDPayTrasactionStatus[IDPayTrasactionStatus["PAYMENT_PREVIOUSLY_ACCEPTED"] = 101] = "PAYMENT_PREVIOUSLY_ACCEPTED";
    IDPayTrasactionStatus[IDPayTrasactionStatus["PAYMENT_TRANSFERED_TO_PAYEE"] = 200] = "PAYMENT_TRANSFERED_TO_PAYEE";
})(IDPayTrasactionStatus = exports.IDPayTrasactionStatus || (exports.IDPayTrasactionStatus = {}));
exports.iDPayTrasactionStatusDesc = {
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
    200: 'Transaction recieved by recipient'
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.idPayErrorCodes = void 0;
exports.idPayErrorCodes = {
    11: "User banned",
    12: "API-KEY not provided",
    13: "Domain/IP associated with the API-KEY does not match the request origin",
    14: "Web service associated with the API-KEY hasn't been verified yet",
    21: "Bank account associated with the API-KEY hasn't been verified yet",
    22: "Web service unavailable",
    23: "Web service verification failed",
    24: "Bank account associated with the API-KEY has been disabled",
    31: "Transaction ID not provided",
    32: "Order ID not provided",
    33: "Amount not provided",
    34: "Amount should not be lesser than 10,000 IRR",
    35: "Amount should not be more 500,000,000 IRR",
    36: "Daily tranfer amount cap reached",
    37: "Callback URL not provided",
    38: "Callback domain associated with the API-KEY does not match",
    41: "Transaction status filter is not valid",
    42: "Transaction date filter is not valid",
    43: "Checkout date filter is not valid",
    51: "Transaction not found",
    52: "No results for inquiry",
    53: "Payment verification is not possible at the moment, please try later",
    54: "Payment verification time-out",
};

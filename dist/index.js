"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IDPay = void 0;
const axios_1 = __importDefault(require("axios"));
const cfg_1 = require("./cfg");
const uuid = __importStar(require("uuid"));
const idpay_error_codes_1 = require("./interfaces/idpay-error-codes");
class IDPay {
    constructor(apiKey, sandbox) {
        this.sandBox = false;
        if (!apiKey)
            throw new Error("API Key not provided.");
        this.apiKey = apiKey;
        sandbox && sandbox ? this.sandBox = false : this.sandBox = true;
    }
    paymentRequest(payment) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!payment.order_id || !payment.order_id.length) {
                payment.order_id = uuid.v4();
            }
            let response;
            try {
                response = yield axios_1.default.post(cfg_1.config.createPaymentURL, payment, {
                    headers: {
                        "Content-type": "application/json",
                        "X-API-KEY": this.apiKey,
                        "X-SANDBOX": this.sandBox ? 1 : 0,
                    }
                });
            }
            catch (err) {
                const { response } = err;
                let errorDesc = idpay_error_codes_1.idPayErrorCodes[response.error_code];
                throw new Error(errorDesc);
            }
            return response.data;
        });
    }
}
exports.IDPay = IDPay;

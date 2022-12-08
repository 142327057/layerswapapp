export type ApiError = {
    code: KnownwErrorCode | string,
    message: string;
}

export enum KnownwErrorCode {
    INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
    INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS",
    FUNDS_ON_HOLD = "FUNDS_ON_HOLD_ERROR",
    COINBASE_AUTHORIZATION_LIMIT_EXCEEDED = "COINBASE_AUTHORIZATION_LIMIT_EXCEEDED",
    COINBASE_INVALID_2FA = "COINBASE_INVALID_2FA",
    ACTIVE_SWAP_LIMIT_EXCEEDED = "ACTIVE_SWAP_LIMIT_EXCEEDED",
    NETWORK_ACCOUNT_ALREADY_EXISTS = "NETWORK_ACCOUNT_ALREADY_EXISTS"
}
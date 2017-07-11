import * as types from './types';

export function insertCoin(coin) {
    return {
        type: types.INSERT_COIN,
        coin
    };
}

export function replenishStock(code, quantity) {
    return {
        type: types.REPLENISH_STOCK,
        code,
        quantity
    };
}

export function releaseSnackAndChange(code) {
    return {
        type: types.RELEASE_SNACK_AND_CHANGE,
        code
    };
}

export function releaseChange(coins, code) {
    return {
        type: types.RELEASE_CHANGE,
        coins,
        code
    };
}

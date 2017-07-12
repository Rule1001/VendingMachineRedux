import * as types from '../actions/types';
import initialState from '../dbUtils/data';


export function reducer(prevState = initialState, action) {
    if (!action) return prevState;
    if (!prevState.power) return prevState;

    if (action.type === types.INSERT_COIN) {
        const newState = Object.assign({}, prevState);
        newState.credit = newState.credit.concat([action.coin]);
        return newState;
    }

    if (action.type === types.REPLENISH_STOCK) {
        if (!action.quantity || !action.code) return prevState;

        const newState = Object.assign({}, prevState);
        newState.stock = Object.assign({}, newState.stock);
        newState.stock[action.code] = Object.assign({}, newState.stock[action.code]);

        newState.stock[action.code].quantity += action.quantity;
        return newState;
    }

    if (action.type === types.RELEASE_SNACK_AND_CHANGE) {
        if (!action.code) return prevState;

        const newState = Object.assign({}, prevState);
        newState.stock = Object.assign({}, newState.stock);
        newState.float = Object.assign({}, newState.float);

        let creditTotal = newState.credit.reduce((a, b) => {
            return a + b;
        }, 0).toFixed(2);

        if (creditTotal >= newState.stock[action.code].price && newState.stock[action.code].quantity > 0) {
            let changeTotal = Math.round(creditTotal - newState.stock[action.code].price);
            newState.credit = [];
            newState.changeArea = changeTotal;
            newState.stock[action.code].quantity -= 1;
            newState.productDispenser = action.code;
            newState.dispenserDoorOpen = true;
            newState.displayMessage = 'Thank you! Please take your snack';

        }

        return newState;
    }

    if (action.type === types.RELEASE_CHANGE) {
        if (!action.coins) return prevState;

    }



    return prevState;
}
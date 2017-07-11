import * as types from '../actions/types';

const initialState = {
    stock: {
        'A1': {
            name: 'Mars Bar',
            quantity: 10,
            stuck: false,
            price: 0.85
        },
        'A2': {
            name: 'Kettle Crisps',
            quantity: 10,
            stuck: false,
            price: 0.85
        }
    },
    credit: [0.2, 0.2, 0.05, 0.2, 0.2],
    changeArea: [],
    float: {
        '1': 10,
        '0.5': 10,
        '0.1': 10
    },
    displayMessage: '',
    selection: '',
    productDispenser: 'A1',
    changeDispenser: 0,
    dispenserDoorOpen: false,
    power: false
};

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
            // update quantity
            newState.productDispenser = action.code;
            newState.dispenserDoorOpen = true;
            newState.displayMessage = 'Thank you! Please take your snack';
            console.log(changeTotal);
            console.log(creditTotal);
            console.log(newState.stock[action.code].price);

        }

        return newState;
    }

    if (action.type === types.RELEASE_CHANGE) {
        if (!action.coins) return prevState;

    }



    return prevState;
}
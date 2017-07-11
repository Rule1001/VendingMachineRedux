import { expect } from 'chai';
import { reducer } from '../reducers/reducer';
import * as actions from '../actions/actions';

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
    credit: [0.2, 0.2, 0.05, 0.2, 0.2, 0.2],
    changeArea: [],
    float: {
        '1': 10,
        '0.5': 10,
        '0.1': 10
    },
    displayMessage: '',
    selection: '',
    productDispenser: 'A1',
    dispenserDoorOpen: false,
    power: true
};

describe('reducer', function () {
    it('is a function', function () {
        expect(reducer).to.be.a('function');
    });
    describe('action INSERT_COIN', function () {
        it('updates the state correctly', function () {
            const action = actions.insertCoin(0.2);
            const newState = reducer(initialState, action);
            expect(newState.credit).to.eql([0.2, 0.2, 0.05, 0.2, 0.2, 0.2, 0.2]);
        });
        it('does not mutate the state', function () {
            const action = actions.insertCoin(0.2);
            const newState = reducer(initialState, action);
            expect(newState).to.not.eql(initialState);
        });
    });
    describe('action REPLENISH_STOCK', function () {
        it('updates the state correctly', function () {
            const action = actions.replenishStock('A2', 6);
            const newState = reducer(initialState, action);
            expect(newState.stock.A2.quantity).to.eql(16);
        });
        it('does not mutate the state', function () {
            const action = actions.replenishStock('A2', 6);
            const newState = reducer(initialState, action);
            expect(newState).to.not.eql(initialState);
        });
    });
    describe('action RELEASE_SNACK_AND_CHANGE', function () {
        it('updates the state correctly', function () {
            const action = actions.releaseSnackAndChange('A2');
            const newState = reducer(initialState, action);
            expect(newState.productDispenser).to.equal('A2');
            expect(newState.dispenserDoorOpen).to.be.true;
            expect(newState.displayMessage).to.equal('Thank you! Please take your snack');
        });
        it('does not mutate the state', function () {
            const action = actions.releaseSnackAndChange('A2');
            const newState = reducer(initialState, action);
            expect(newState).to.not.eql(initialState);
        });
    });
});
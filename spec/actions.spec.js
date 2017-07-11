import { expect } from 'chai';
import * as actions from '../actions/actions';
import * as types from '../actions/types';

describe('actions', function () {
    describe('insertCoin', function () {
        it('returns the correct action', function () {
            expect(actions.insertCoin(0.5)).to.eql({
                type: types.INSERT_COIN,
                coin: 0.5
            });
        });
    });
    describe('replenishStock', function () {
        it('returns the correct action', function () {
            expect(actions.replenishStock('A1', 5)).to.eql({
                type: types.REPLENISH_STOCK,
                code: 'A1',
                quantity: 5
            });
        });
    });
    describe('releaseSnackAndChange', function () {
        it('returns the correct action', function () {
            expect(actions.releaseSnackAndChange('A1')).to.eql({
                type: types.RELEASE_SNACK_AND_CHANGE,
                code: 'A1'
            });
        });
    });
});
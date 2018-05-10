const chai = require('chai');
const assert = chai.assert;
const bubbleSort = require('../lib/bubble-sort.js');

describe('bubbleSort', () => {
    let array;
    beforeEach(() => {
        array = [1, 2, 3, 4, 5];
    })

    it('should have the bubbleSort function', () => {
        assert.isFunction(bubbleSort)
    })
};
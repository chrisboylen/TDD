const chai = require('chai');
const { expect } = require('chai');
const assert = chai.assert;
const bubbleSort = require('../lib/bubble-sort.js');

describe('bubbleSort()', () => {
    it('should sort an array of numbers from least to greatest', () => {
        let array = [2, 1, 0, 3, 5, 4, 10, 7, 6, 8, 9];
        expect(bubbleSort(array)).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
});
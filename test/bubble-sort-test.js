import chai from 'chai';
import { expect } from 'chai';
import { assert } from 'chai';
import bubbleSort from '../lib/bubble-sort.js';
import randomArray from '../lib/random-array.js';

describe('bubbleSort()', () => {
    it('should be a function', () => {
        
        expect(bubbleSort).to.exist;
    })

    it('should sort an array of 11 numbers from least to greatest', () => {
        let array = [2, 1, 0, 3, 5, 4, 10, 7, 6, 8, 9];

        let expected = array.sort();
        let actual = bubbleSort(array);

        expect(expected).to.deep.equal(actual);
    });

    it('should sort an array of 11 letters from least to greatest', () => {
        let array = ['b', 'a', 'f', 'e', 'd', 'c', 'j', 'k', 'h', 'i', 'g'];

        let expected = array.sort();
        let actual = bubbleSort(array);

        expect(expected).to.deep.equal(actual);
    });

    it('should sort an array of 1000 numbers', () => {
        let array = randomArray(1000);

        let expected = array.sort();
        let actual = bubbleSort(array);

        expect(expected).to.deep.equal(actual);
    })

    it('should sort an array of 10000 numbers', () => {
        let array = randomArray(10000);

        let expected = array.sort();
        let actual = bubbleSort(array);

        expect(expected).to.deep.equal(actual);
    })

    it('should sort an array of 24000 numbers', () => {
        let array = randomArray(24000);

        let expected = array.sort();
        let actual = bubbleSort(array);

        expect(expected).to.deep.equal(actual);
    })
});
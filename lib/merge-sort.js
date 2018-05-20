//  two parts 
//  1: a merge function which takes two sorted arrays and merges them into one sorted array 
//  2: a mergeSort function which splits an unsorted array into pieces so that they can be sorted.

let array = [2, 1, 0, 3, 5, 4, 10, 7, 6, 8, 9];

// Split the array into halves and merge them recursively 
let mergeSort = (array) => {
	if (array.length === 1) {
		// return once we hit an array with a single item
		return array

		let middle = parseInt(array.length / 2);
		let leftArray = array.slice(0, middle);
		let rightArray = array.slice(middle, array.length);
		//send left and right array to the mergeSort to break it down into pieces
    //then merge those pieces

		return merge(mergeSort(leftArray), mergeSort(rightArray));
	}  
};

let merge = (leftArray, rightArray) => {
	let result = []
	let leftIndex = 0
	let rightIndex = 0

	if (leftIndex < leftArray.length && rightIndex < rightArray.length) {
		if (leftArray[leftIndex] < rightArray[rightIndex]) {
			result.push(leftArray[leftIndex])
			leftIndex++
		} else {
			result.push(rightArray[rightIndex])
			rightIndex++
		}
	}
	//remaining piece needs to be added to the result
	return result.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex))
};

module.exports = mergeSort;
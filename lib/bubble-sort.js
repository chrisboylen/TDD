let array = [2, 1, 0, 3, 5, 4, 10, 7, 6, 8, 9];
//  moving through an array of data and iteratively moving the largest number to the end of the array.

let bubbleSort = (array) => {
  //  loop through array start to finish
  for (let i = 0; i < array.length; i++) {
  //  inner loop compare current element to every other element
		for(let j = 1; j < array.length-i; j++) {
			if (array[j-1] > array[j]) {
				[array[j-1], array[j]] = [array[j], array[j-1]];
			}
		}
	}
	return array;
};
bubbleSort(array);

module.exports = bubbleSort;

array = [1, 2, 3, 4, 5];

//  moving through an array of data and iteratively moving the largest number to the end of the array.

function bubbleSort(array) {
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
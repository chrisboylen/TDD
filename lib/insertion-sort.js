//   iterate through the set to be sorted, pulling one element at a time, then inserting it into its correct position in the sorted section of the array. leverages an already sorted array and inserted value.

//  1.  Start with one card in your hand, (A list with only one item is always sorted)
//  2.  Pick the next card and insert it into its proper sorted order,
//  3.  Repeat previous step for all cards.

let array = [3, 1, 2, 4, 5];

function insertionSort(array) {
  //  loop through array start to finish
  for (let i = 0; i < array.length; i++) {
	// store the current item value so it can be placed right
		let temp = array[i];
		let j = i - 1;
		// loop through the items in the sorted array (the items from the current to the beginning)
		for (j > -1 && array[j] > temp; j--) {
			// copy each item to the next one
			array[j + 1] = array[j]
		}
		// the last item should now hold the value of the currently sorted item
		array[j + 1] = temp
	}
	return array;
}

insertionSort(array);
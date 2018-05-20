let insertionSort = (array) => {
	for (let i = 0; i < array.length; i++) {
	
		let temp = array[i];

		for (var j = i - 1; j > - 1 && array[j] > temp; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = temp
	}
	return array;
}

export default insertionSort;
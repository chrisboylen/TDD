let quickSort = (array) => {
  if (array.length < 2) {
    return array
  }

  let pivot = array[0];
  let less = [];
  let more = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(more));
};

export default quickSort;
function selectionSort(arr) {
  let min;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr;
}

const arr = [5, 7, 3, 9, 2, 52, 1, 12, 4];
const newArr = [4, 2, 6, 5, 1, 3];
console.log(selectionSort(newArr));

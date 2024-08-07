function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = i;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[curr]) {
        let temp = arr[curr];
        arr[curr] = arr[j];
        arr[j] = temp;
        curr = j;
      } else break;
    }
  }
  return arr;
}

function insertionSortOpt(arr) {
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = arr[i];
    for (var j = i - 1; temp < arr[j] && j > -1; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}

const arr = [4, 2, 6, 5, 1, 3];
console.log(insertionSortOpt(arr));

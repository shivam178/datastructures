function iterativeBinarySearch(arr, isSorted, searchNo) {
  if (!isSorted) {
    arr.sort((a, b) => a - b);
  }

  var start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === searchNo) {
      return mid + 1;
    }

    if (searchNo < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return null;
}

const arr1 = [1, 2, 4, 56, 66, 100, 123];
const arr2 = [1, 21, 4, 56, 606, 1000, 123];

console.log(iterativeBinarySearch(arr1, true, 100));
console.log(iterativeBinarySearch(arr2, false, 1000));
console.log(iterativeBinarySearch(arr2, false, 4));

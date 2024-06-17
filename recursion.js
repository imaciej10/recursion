function arraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

function merge(left, right) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;
  console.log(left, right);
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      results.push(left[leftIndex]);
      leftIndex++;
    } else {
      results.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return results.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  console.log(left, right);
  return merge(mergeSort(left), mergeSort(right));
}

const sortedArr = mergeSort([5, 2, 1, 9, 4]);
console.log(sortedArr);

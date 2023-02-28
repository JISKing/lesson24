const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArr(arr, index = 0, sum = 0) {
  if (index >= arr.length) {
    return sum;
  }
  sum += arr[index];
  return sumArr(arr, index + 1, sum);
}
console.log(sumArr(arr));

function sumArr(arr, index = 0, sum = 0) {
  return index >= arr.length ? sum : sumArr(arr, index + 1, sum + arr[index]);
}

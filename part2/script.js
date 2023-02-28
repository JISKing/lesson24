let arr = [1, 31, 6, 3, 4, [43, 55, 342, [79, 93, 9]]];

function deepCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      count += deepCount(arr[i]);
    } else {
      count++;
    }
  }
  return count;
}

// Использование тернарного оператора `?`

function deepCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += Array.isArray(arr[i]) ? deepCount(arr[i]) : 1;
  }
  return count;
}

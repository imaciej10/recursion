function fibs(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      arr.push(i);
      continue;
    }
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

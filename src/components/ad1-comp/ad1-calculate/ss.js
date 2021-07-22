export const calculate = a => {
  let inputArr = a.split(',');
  let n = inputArr.length;
  let arr = [];

  for (let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (inputArr[j] < inputArr[min]) {
        min = j;
      }
    }
    if (min != i) {
      // Swapping the elements
      let tmp = inputArr[i];
      inputArr[i] = inputArr[min];
      inputArr[min] = tmp;
    }
    arr.push(`After ${i + 1} iteration - ${inputArr}`);
  }
  return arr;
};

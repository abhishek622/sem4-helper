export const calculate = num => {
  let arr = num.split('');
  let sort_arr = num.split('');
  sort_arr.sort((a, b) => a - b);

  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] !== sort_arr[i]) {
        if (arr[j] > sort_arr[i]) count++;
      } else break;
    }
    temp.push(count);
    count = 0;
  }
  return temp.join(',');
};

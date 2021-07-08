export const calculate = (num, k) => {
  let nums = String(num)
    .split('')
    .map(num => {
      return parseInt(num);
    });

  let arr = [];

  let totalLoopRuns = k;
  if (totalLoopRuns === '') {
    totalLoopRuns = 1;
  }

  for (let i = 0; i < totalLoopRuns; i++) {
    prevPermutation(nums);
  }

  let prev = nums.toString().replaceAll(',', '');

  for (let i = 0; i < totalLoopRuns; i++) {
    nextPermutation(nums);
  }

  let next = nums.toString().replaceAll(',', '');

  arr.push(prev);
  arr.push(next);
  return arr;
};

function prevPermutation(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] > nums[i]) {
      let list = nums.slice(i, nums.length);
      let max = -1;
      let j = 0;
      while (j < list.length) {
        if (list[j] < nums[i - 1]) {
          max = Math.max(max, list[j]);
        }
        j++;
      }

      [nums[i - 1], nums[i + list.indexOf(max)]] = [
        nums[i + list.indexOf(max)],
        nums[i - 1],
      ];

      list = nums.splice(i, nums.length);
      list.sort().reverse();

      j = 0;
      let m = i;
      while (j < list.length) {
        nums[m] = list[j];
        j++;
        m++;
      }
      break;
    }
  }
  return nums;
}

function nextPermutation(nums) {
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] < nums[i]) {
      let list = nums.slice(i, nums.length);
      let min = 10;
      let j = 0;
      while (j < list.length) {
        if (list[j] > nums[i - 1]) {
          min = Math.min(min, list[j]);
        }
        j++;
      }

      [nums[i - 1], nums[i + list.indexOf(min)]] = [
        nums[i + list.indexOf(min)],
        nums[i - 1],
      ];

      list = nums.splice(i, nums.length);
      list.sort();
      j = 0;
      let m = i;

      while (j < list.length) {
        nums[m] = list[j];
        j++;
        m++;
      }
      break;
    }
  }
  return nums;
}

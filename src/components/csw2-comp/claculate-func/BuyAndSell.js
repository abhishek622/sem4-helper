export const calculate = num => {
  let array = String(num)
    .replaceAll(' ', '')
    .split(',')
    .map(num => {
      return Number(num);
    });
  let ans = [];

  ans.push(buyandsellstockonce(array));
  ans.push(buyandsellstocktwice(array));
  return ans;
};

let p = [];

function buyandsellstockonce(array) {
  let minPrice = Number.MAX_VALUE;
  let maxProfit = 0;

  for (let i = 0; i < array.length; i++) {
    maxProfit = Math.max(maxProfit, array[i] - minPrice);
    minPrice = Math.min(minPrice, array[i]);
    p[i] = maxProfit;
  }

  return maxProfit;
}

function buyandsellstocktwice(array) {
  let maxPrice = 0;
  let totalProfit = 0;

  for (let i = array.length - 1; i > 0; i--) {
    maxPrice = Math.max(maxPrice, array[i]);
    totalProfit = Math.max(totalProfit, maxPrice - array[i] + p[i - 1]);
  }

  return totalProfit;
}

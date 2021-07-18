export const calculate = (a, b) => {
  a = parseInt(a);
  let arr = b.split(',').map(Number);
  let len = arr.length;
  let dummy = getAllSubsets(arr);
  let w = dummy.filter(arrLen => arrLen.length === 1);
  let x = dummy.filter(arrLen => arrLen.length === 2);
  let y = dummy.filter(arrLen => arrLen.length === 3);
  let z = dummy.filter(arrLen => arrLen.length === 4);

  let dSize1 = [];
  let dSize2 = [];
  let dSize3 = [];
  let dSize4 = [];

  let s = nCr(a + len - 1, a);

  for (let i = 0; i < w.length; i++) {
    let temp = w[i];
    let c = a - temp - 1;
    if (a > arr[i]) {
      dSize1.push(nCr(c + len - 1, c));
    } else {
      dSize1.push(0);
    }
  }

  for (let i = 0; i < x.length; i++) {
    let temp = x[i];
    let c = a - (temp[0] + temp[1]) - 2;
    if (c >= 0) {
      dSize2.push(nCr(c + len - 1, c));
    } else {
      dSize2.push(0);
    }
  }

  for (let i = 0; i < y.length; i++) {
    let temp = y[i];
    let c = a - (temp[0] + temp[1] + temp[2]) - 3;
    if (c >= 0) {
      dSize3.push(nCr(c + len - 1, c));
    } else {
      dSize3.push(0);
    }
  }

  for (let i = 0; i < z.length; i++) {
    let temp = z[i];
    let c = a - (temp[0] + temp[1] + temp[2] + temp[3]) - 4;
    if (c >= 0) {
      dSize4.push(nCr(c + len - 1, c));
    } else {
      dSize4.push(0);
    }
  }

  let ans = 0;
  if (len === 2) {
    let a1 = dSize1.reduce(reducer);
    let a2 = dSize2.reduce(reducer);
    ans = s - a1 - a2;
  } else if (len === 3) {
    let a1 = dSize1.reduce(reducer);
    let a2 = dSize2.reduce(reducer);
    let a3 = dSize3.reduce(reducer);
    ans = s - a1 + a2 - a3;
  } else if (len === 4) {
    let a1 = dSize1.reduce(reducer);
    let a2 = dSize2.reduce(reducer);
    let a3 = dSize3.reduce(reducer);
    let a4 = dSize4.reduce(reducer);
    ans = s - a1 + a2 + a3 - a4;
  }
  return ans;
};

// Javascript program To find sum of an array

const reducer = (accumulator, curr) => accumulator + curr;

// program To get all subsets

const getAllSubsets = theArray =>
  theArray.reduce(
    (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),
    [[]]
  );

// Javascript program To calculate The Value Of nCr

function nCr(n, r) {
  return fact(n) / (fact(r) * fact(n - r));
}

// Returns factorial of n
function fact(n) {
  var res = 1;
  for (var i = 2; i <= n; i++) res = res * i;
  return res;
}

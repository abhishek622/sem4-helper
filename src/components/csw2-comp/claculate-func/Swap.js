export const SwapDeci = (a, i, j) => {
  let arr = [];
  let output = afterSwapping(a, i, j);
  arr.push(output);
  arr.push(output.toString(2));
  return arr;
};

export const SwapBin = (b, i, j) => {
  let arr = [];
  let output = afterSwapping(parseInt(String(b), 2), i, j);
  arr.push(output);
  arr.push(output.toString(2));
  return arr;
};

function afterSwapping(n, i, j) {
  let b1 = (n >> i) & 1;
  let b2 = (n >> j) & 1;

  if (b1 !== b2) {
    let x = b1 ^ b2;
    x = (x << i) | (x << j);
    n = n ^ x;
    return n;
  } else {
    return n;
  }
}

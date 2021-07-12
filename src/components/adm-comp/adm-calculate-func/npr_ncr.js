export const calculate = (a, b) => {
  parseInt(a);
  parseInt(b);
  let arr = [];
  arr.push(nPr(a, b).toLocaleString('en-US', { maximumFractionDigits: 3 }));
  arr.push(nCr(a, b).toLocaleString('en-US', { maximumFractionDigits: 3 }));

  return arr;
};

function nCr(n, r) {
  return fact(n) / (fact(r) * fact(n - r));
}

// Returns factorial of n
function fact(n) {
  if (n <= 1) return 1;

  return n * fact(n - 1);
}

function nPr(n, r) {
  return Math.floor(fact(n) / fact(n - r));
}

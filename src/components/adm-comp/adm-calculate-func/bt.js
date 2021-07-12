export const calculate = (A, X, n) => {
  let arr = [];

  let term = Math.pow(A, n);
  arr.push(term);
  for (let i = 1; i <= n; i++) {
    term = (term * X * (n - i + 1)) / (i * A);

    arr.push(term);
  }

  return arr.join(' ');
};

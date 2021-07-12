export const calculate = (a, b, c) => {
  let exp = a.split(',');
  parseInt(b);
  let coff = c.split(',');

  let x = 1,
    y = 1;
  for (let i = 0; i < coff.length; i++) {
    x = x * factorial(coff[i]);
  }

  let z = factorial(b) / x;

  for (let i = 0; i < exp.length; i++) {
    y = y * Math.pow(exp[i], coff[i]);
  }

  return (z * y).toLocaleString('en-US', { maximumFractionDigits: 3 });
};

function factorial(n) {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;

  return f;
}

export const calculate = (n, fun) => {
  n = parseInt(n);
  let ans = [];
  let arr = [];

  let g = [];
  let odr = [];

  if (fun === 'plus') {
    for (let i = 0; i < n; i++) {
      g.push(i);
      odr.push(`O(${i}) = ${getOrder(i, n)}`);
      if (getOrder(i, n) === n) arr.push(i);
    }
  } else {
    if (n % 2 === 0) {
      for (let i = 1; i < n; i++) {
        if (gcd(i, n) === 1) {
          g.push(i);
          odr.push(`O(${i}) = ${getOrderM(i, n)}`);
        }
      }
    } else {
      for (let i = 1; i < n; i++) {
        g.push(i);
        odr.push(`O(${i}) = ${getOrderM(i, n)}`);
      }
    }
    let k = g.length;
    for (let i = 0; i < k; i++) {
      if (getOrderM(g[i], n) === k) arr.push(g[i]);
    }
  }

  ans.push('G = ' + g.join(', '));
  ans.push(`Order of group is ${g.length}`);
  ans.push(odr.join(', '));
  ans.push(`Generators = ${arr.length > 0 ? arr.join(', ') : 0}`);
  ans.push('No. of generators = ' + arr.length);
  return ans;
};

const getOrder = (a, b) => {
  let s = a;
  let c = 1;
  while (s % b !== 0) {
    s += a;
    c += 1;
  }
  return c;
};

const getOrderM = (a, b) => {
  let s = a;
  let c = 1;
  while (s % b !== 1) {
    s *= a;
    c += 1;
  }
  return c;
};

// Function to return gcd of a and b
function gcd(a, b) {
  if (a === 0) return b;

  return gcd(b % a, a);
}

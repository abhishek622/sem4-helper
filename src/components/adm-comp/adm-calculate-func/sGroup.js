export const calculate = a => {
  a = parseInt(a);
  let arr = [];
  //   let count = 1;
  //   arr.push('Elem Types\u00a0|\u00a0No. of Elem');
  //   arr.push(
  //     '\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a01\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a01'
  //   );
  //   for (let i = 2; i <= a; i++) {
  //     let c = nCr(a, i) * fact(i - 1);
  //     arr.push(
  //       `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0${i}\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0|\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0${c}`
  //     );
  //     count += c;
  //   }
  //   arr.push(`Total Element in S${a} = ${count}`);

  arr.push(`S${a} = ${fact(a)}`);
  arr.push(`A${a} = ${fact(a) / 2}`);

  return arr;
};

// function nCr(n, r) {
//   return fact(n) / (fact(r) * fact(n - r));
// }

// Returns factorial of n
function fact(n) {
  if (n <= 1) return 1;

  return n * fact(n - 1);
}

// const getAllSubsets = theArray =>
//   theArray.reduce(
//     (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])),
//     [[]]
//   );

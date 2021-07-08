export const calculate = (x, y) => {
  let r = 0;
  let d = 0;
  let arr = [];

  if (y !== 0) {
    d = parseInt(x / y);
    r = x - d * y;
  }

  arr.push(d);
  arr.push(r);
  return arr;
};

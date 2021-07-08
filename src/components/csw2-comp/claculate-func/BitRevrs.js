export const calculate = a => {
  let num = Number(a);
  let arr = [];
  if (num < 0) {
    arr.push((num >>> 0).toString(2));
  } else {
    arr.push(num.toString(2));
  }
  let flag = false;
  let setmask = 1;
  let rev = 0;
  let j = 0;

  for (let i = 31; i >= 0; i--) {
    let bitmask = 1 << i;
    if (flag) {
      if ((num & bitmask) !== 0) {
        setmask = 1 << j;
        rev = rev | setmask;
        j++;
      } else {
        j++;
      }
    } else {
      if ((num & bitmask) !== 0) {
        flag = true;
        setmask = 1 << j;
        rev = rev | setmask;
        j++;
      }
    }
  }

  arr.push(rev);
  if (rev < 0) {
    arr.push((rev >>> 0).toString(2));
  } else {
    arr.push(rev.toString(2));
  }

  return arr;
};

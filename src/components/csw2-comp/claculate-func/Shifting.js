export const calculate = (a, b, c) => {
  let svalue = Number(a);
  let toshift = Number(b);
  let arr = [];

  if (c === 'left') {
    let lval = svalue << toshift;
    arr.push(lval);
    if (lval < 0) {
      arr.push((lval >>> 0).toString([2]));
    } else {
      arr.push(lval.toString([2]));
    }
    return arr;
  } else {
    let rval = svalue >> toshift;
    arr.push(rval);
    if (rval < 0) {
      arr.push((rval >>> 0).toString([2]));
    } else {
      arr.push(rval.toString([2]));
    }
    return arr;
  }
};

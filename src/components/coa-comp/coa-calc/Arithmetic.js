import { doBaseCon } from './BaseConvt';

export const calculator = (a, b, optn, type) => {
  let x, y;
  let result;
  let temp;

  switch (type) {
    case '1':
      x = doBaseCon(a, 2, 10);
      y = doBaseCon(b, 2, 10);
      if (optn === 'plus') {
        temp = parseInt(x) + parseInt(y);
      } else {
        temp = parseInt(x) - parseInt(y);
      }
      result = doBaseCon(temp, 10, 2);
      break;
    case '2':
      x = doBaseCon(a, 8, 10);
      y = doBaseCon(b, 8, 10);
      if (optn === 'plus') {
        temp = parseInt(x) + parseInt(y);
      } else {
        temp = parseInt(x) - parseInt(y);
      }
      result = doBaseCon(temp, 10, 8);
      break;
    case '3':
      x = doBaseCon(a, 16, 10);
      y = doBaseCon(b, 16, 10);
      if (optn === 'plus') {
        temp = parseInt(x) + parseInt(y);
      } else {
        temp = parseInt(x) - parseInt(y);
      }
      result = doBaseCon(temp, 10, 16);
      break;
    case '4':
      if (optn === 'plus') {
        temp = parseInt(a) + parseInt(b);
      } else {
        temp = parseInt(a) - parseInt(b);
      }
      result = DecToBcd(temp);
      break;
    default:
      result = parseInt(a) + parseInt(b);
      break;
  }
  return result;
};

// turns a standard num into a BCD equivalent
function DecToBcd(val) {
  let arr = Array.from(String(val), myFunc);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(doBaseCon(arr[i], 10, 2).padStart(4, 0));
  }
  return newArr.join(' ');
}

const myFunc = num => Number(num);

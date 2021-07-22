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
      result = `(${temp})10 = (${doBaseCon(temp, 10, 2)})2`;
      break;
    case '2':
      x = doBaseCon(a, 8, 10);
      y = doBaseCon(b, 8, 10);
      if (optn === 'plus') {
        temp = parseInt(x) + parseInt(y);
      } else {
        temp = parseInt(x) - parseInt(y);
      }
      result = `(${temp})10 = (${doBaseCon(temp, 10, 8)})8`;
      break;
    case '3':
      x = doBaseCon(a, 16, 10);
      y = doBaseCon(b, 16, 10);
      if (optn === 'plus') {
        temp = parseInt(x) + parseInt(y);
      } else {
        temp = parseInt(x) - parseInt(y);
      }
      result = `(${temp})10 = (${doBaseCon(temp, 10, 16)})16`;
      break;
    case '4':
      if (optn === 'plus') {
        x = bcdToDecimal(a.toString());
        y = bcdToDecimal(b.toString());
        temp = parseInt(x) + parseInt(y);
      } else {
        x = bcdToDecimal(a.toString());
        y = bcdToDecimal(b.toString());
        temp = parseInt(x) - parseInt(y);
      }
      result = `(${temp})10 = (${DecToBcd(temp)})BCD)`;
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

function bcdToDecimal(s) {
  let len = s.length;
  let check = 0,
    check0 = 0;
  let num = 0,
    sum = 0;
  let mul = 1,
    rev = 0;

  // Iterating through the bits backwards
  for (let i = len - 1; i >= 0; i--) {
    // Forming the equivalent
    // digit(0 to 9)
    // from the group of 4.
    sum += (s[i] - '0') * mul;
    mul *= 2;
    check++;

    // Reinitialize all variables
    // and compute the number.
    if (check === 4 || i === 0) {
      if (sum === 0 && check0 === 0) {
        num = 1;
        check0 = 1;
      } else {
        // Update the answer
        num = num * 10 + sum;
      }

      check = 0;
      sum = 0;
      mul = 1;
    }
  }

  // Reverse the number formed.
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (check0 === 1) return rev - 1;

  return rev;
}

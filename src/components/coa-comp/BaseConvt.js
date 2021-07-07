export function doBaseCon(num, f, t) {
  // form = parseFloat(num);
  let from = f;
  let to = t;
  let val = '' + num;
  let result;

  if (check(to, 0) === 1 || check(from, 0) === 1) {
    result = 'Bases must be integer (excluding -1, 0, +1).';
    return result;
  }
  if (to === 0 || from === 0) {
    result = 'That base is a mathematical impossibility.';
    return result;
  }
  if (to === -1 || to === 1 || from === -1 || from === 1) {
    result = "I don't think that base will work so well.";
    return result;
  }

  from = 1 * from;
  to = 1 * to;

  let txt = baseCon(from, to, val);

  result = txt;
  return addZeroes(result);
}

function addZeroes(num) {
  const dec = num.split('.');
  const len = dec[1] && dec[1].length > 0 ? 6 : 0;
  const len0 = dec[0].length;
  return num.substring(0, len0 + len + 1);
}

function check(n, dec) {
  let np = 0;
  let e = 0;
  let l = n.length;
  for (let r = 0; r < l; r++) {
    let c = n.substring(r, r + 1);
    if (c < '0' || c > '9') {
      let e2 = 1;
      if (c === '.' && np === 0 && dec === 1) {
        np++;
        e2 = 0;
      }
      if ((c === '+' || c === '-') && r === 0 && l > 1) {
        e2 = 0;
      }
      e = e | e2;
    }
  }
  if (n === '-.' || n === '+.') return 1;
  return e;
}

function baseCon(from, to, val) {
  let val2 = baseXCon10(from, val);
  let sum;
  if ('' + val2 === 'nh')
    sum = 'No alpha-numerics in base ' + from + ' numbers.';
  else sum = base10ConX(to, val2);
  return sum;
}
function baseXCon10(from, val) {
  val = '' + val;
  let sum = 0;
  let sgn = 1;
  let pl = 0;
  let div = 1;
  let dg;
  for (let a = 0; a < val.length; a++) {
    let ch = val.substring(a, a + 1);
    if (ch === '+' && a === 0) sgn = 1;
    else {
      if (ch === '-' && a === 0) sgn = -1;
      else {
        if (ch === '.') div = pl;
        else {
          if (ch >= '0' && ch <= '9') dg = 1 * ch;
          ch = ch.toUpperCase();
          if (ch === 'A') dg = 10;
          if (ch === 'B') dg = 11;
          if (ch === 'C') dg = 12;
          if (ch === 'D') dg = 13;
          if (ch === 'E') dg = 14;
          if (ch === 'F') dg = 15;
          if (ch >= 'A' && ch <= 'Z' && from <= 10 && from > 0) {
            let nh = 'nh';
            return nh;
          }
          sum += Math.pow(from, pl) * dg;
          pl--;
        }
      }
    }
  }

  if (div === 1) div = pl;
  sum /= Math.pow(from, div + 1);
  if (sum > 1000000 && sum - Math.floor(sum) < 0.000001) sum = Math.floor(sum);
  if (sum > 1000000 && Math.ceil(sum) - sum < 0.000001) sum = Math.ceil(sum);
  sum *= sgn;
  let round = 1000000000000;
  sum = Math.floor(sum * round + 0.5) / round;
  return sum;
}
function base10ConX(to, val) {
  //to new
  let sgn;
  if (val < 0) {
    sgn = '-';
    val = -val;
  } else {
    sgn = '';
  }
  let sum = '';

  let c = Math.floor(val);

  let start = 0;
  let rem = 0;
  let digits = 0;
  if (c === 0) sum = '0';
  while (Math.abs(c) >= 1) {
    var d = c - Math.floor(c / to) * to;
    let dfl = Math.floor(d);
    if (dfl !== d) {
      rem = d - dfl;
      d = dfl;
    }
    if (Math.abs(d) > Math.abs(to)) d = 0;
    c = Math.floor(c / to);
    if ((start === 0 && d !== 0) || c < val * to) start = 1;
    start = 1;
    sum = '' + alp(d, to) + sum;
    digits++;
  }
  c = val - Math.floor(val) + rem;
  if (c !== 0) {
    //decimals
    sum += '.';
    for (let a = 0; a < 32 / Math.log(to) - digits; a++) {
      if (c === 0) break;
      d = Math.floor(c * to);
      if (to < 0 && d === to) break;
      c = c * to - d;
      sum += alp(d, to);
    }
  }
  sum = sgn + sum;

  return sum;
}

function alp(d, to) {
  let w;
  if (d >= 0 && d <= 9) w = '' + d;
  if (to >= 10 && to <= 36) {
    if (d === 10) w = 'A';
    if (d === 11) w = 'B';
    if (d === 12) w = 'C';
    if (d === 13) w = 'D';
    if (d === 14) w = 'E';
    if (d === 15) w = 'F';
    if (d === 16) w = 'G';
    if (d === 17) w = 'H';
    if (d === 18) w = 'I';
    if (d === 19) w = 'J';
    if (d === 20) w = 'K';
    if (d === 21) w = 'L';
    if (d === 22) w = 'M';
    if (d === 23) w = 'N';
    if (d === 24) w = 'o';
    if (d === 25) w = 'P';
    if (d === 26) w = 'Q';
    if (d === 27) w = 'R';
    if (d === 28) w = 'S';
    if (d === 29) w = 'T';
    if (d === 20) w = 'U';
    if (d === 31) w = 'V';
    if (d === 32) w = 'W';
    if (d === 33) w = 'X';
    if (d === 34) w = 'Y';
    if (d === 35) w = 'Z';
  }
  if (d < 0 || d > 35 || (d > 9 && to > 36)) w = '[' + d + ']';
  return w;
}

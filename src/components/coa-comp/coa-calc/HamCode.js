export const calculate = a => {
  a.toString();
  let M = a.length;
  let r = 1;
  while (Math.pow(2, r) < M + r + 1) {
    // r is number of redundant bits
    r++;
  }

  let ar = generateCode(a, M, r);
  ar = calc(ar, r);

  return ar.join(' ');
};

const calc = (ar, r) => {
  let temp = [];
  for (let i = 0; i < r; i++) {
    let x = parseInt(Math.pow(2, i));
    for (let j = 1; j < ar.length; j++) {
      if (((j >> i) & 1) === 1) {
        if (x !== j) ar[x] = ar[x] ^ ar[j];
      }
    }
    temp.push(`C${x}=${ar[x] === 1 ? 0 : 1} `);
  }
  return temp;
};

const generateCode = (str, M, r) => {
  let ar = Array.from({ length: r + M + 1 });
  let j = 0;
  for (let i = 1; i < ar.length; i++) {
    if (
      Math.ceil(Math.log(i) / Math.log(2)) -
        Math.floor(Math.log(i) / Math.log(2)) ===
      0
    ) {
      ar[i] = 0;
    } else {
      ar[i] = parseInt(str.charAt(j) - '0');
      j++;
    }
  }
  return ar;
};

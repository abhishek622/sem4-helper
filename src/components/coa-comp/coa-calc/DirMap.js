export const calculate1 = (s, w) => {
  s = parseInt(s);
  w = parseInt(w);
  let arr = [];
  // (s !== '' && w !== '' && r === '')
  arr.push(`Address length = ${s + w} bits`);
  arr.push(
    `Number of addressable units = ${Math.pow(2, s + w)} words or bytes`
  );
  arr.push(`Block size = line size = ${Math.pow(2, w)} words or bytes`);
  arr.push(`Number of blocks in main memory = ${Math.pow(2, s)}`);
  return arr;
};

export const calculate2 = (w, r) => {
  r = parseInt(r);
  w = parseInt(w);
  let arr = [];
  // (s === '' && w !== '' && r !== '')
  arr.push(`Block size = line size = ${Math.pow(2, w)} words or bytes`);
  arr.push(`Number of lines in cache = m = ${Math.pow(2, r)}`);
  arr.push(`Size of cache = ${Math.pow(2, r + w)} words or bytes`);
  return arr;
};

export const calculate3 = (s, r) => {
  s = parseInt(s);
  r = parseInt(r);
  let arr = [];
  // (s !== '' && w === '' && r !== '')
  arr.push(`Number of lines in cache = m = ${Math.pow(2, r)}`);
  arr.push(`Number of blocks in main memory = ${Math.pow(2, s)}`);
  arr.push(`Size of tag = ${s - r} bits`);
  return arr;
};

export const calculate4 = (s, w, r) => {
  s = parseInt(s);
  w = parseInt(w);
  r = parseInt(r);
  let arr = [];
  arr.push(`Address length = ${s + w} bits`);
  arr.push(
    `Number of addressable units = ${Math.pow(2, s + w)} words or bytes`
  );
  arr.push(`Block size = line size = ${Math.pow(2, w)} words or bytes`);
  arr.push(`Number of blocks in main memory = ${Math.pow(2, s)}`);
  arr.push(`Number of lines in cache = m = ${Math.pow(2, r)}`);
  arr.push(`Size of cache = ${Math.pow(2, r + w)} words or bytes`);
  arr.push(`Size of tag = ${s - r} bits`);
  return arr;
};

export const calculate = (arr, arr2) => {
  let seq = arr.split('').reverse();
  let inv = arr2.split('').reverse();

  let temp = [];

  for (let i = 0; i < seq.length; i++) {
    insertAt(temp, inv[i], seq[i]);
  }

  return temp.join('');
};

function insertAt(array, index, element) {
  array.splice(index, 0, element);
}

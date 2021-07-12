let MAXX = 100;

// Declaring segment tree
let st = new Array(4 * MAXX);

export const calculate = arr => {
  let inv = arr.split('');
  let N = arr.length;
  var x = getPermutation(inv, N);
  return x.reverse().join('');
};

// Function to initialize segment tree
// with leaves filled with ones
function build(x, lx, rx) {
  // Base Case
  if (rx - lx === 1) {
    st[x] = 1;
    return;
  }

  // Split into two halves
  let m = parseInt((lx + rx) / 2, 10);

  // Build the left subtree
  build(x * 2 + 1, lx, m);

  // Build the right subtree
  build(x * 2 + 2, m, rx);

  // Combining both left and right
  // subtree to parent node
  st[x] = st[x * 2 + 1] + st[x * 2 + 2];

  return;
}

// Function to make index x to 0
// and then update segment tree
function update(i, x, lx, rx) {
  // Base Case
  if (rx - lx === 1) {
    st[x] = 0;
    return;
  }

  // Split into two halves
  let m = parseInt((lx + rx) / 2, 10);

  // Update Query
  if (i < m) update(i, x * 2 + 1, lx, m);
  else update(i, x * 2 + 2, m, rx);

  // Combining both left and right
  // subtree to parent node
  st[x] = st[x * 2 + 1] + st[x * 2 + 2];

  return;
}

// Function to find the Kth element
function getans(x, lx, rx, k, n) {
  // Base Condtiion
  if (rx - lx === 1) {
    if (st[x] === k) return lx;

    return n;
  }

  // Split into two halves
  let m = parseInt((lx + rx) / 2, 10);

  // Check if kth one is in left subtree
  // or right subtree of current node
  if (st[x * 2 + 1] >= k) return getans(x * 2 + 1, lx, m, k, n);
  else return getans(x * 2 + 2, m, rx, k - st[x * 2 + 1], n);
}

// Function to generate the original
// permutation
function getPermutation(inv, n) {
  // Build segment tree
  build(0, 0, n);

  // Stores the original permutation
  let ans = [];

  for (let i = n - 1; i >= 0; i--) {
    // Find kth one
    let temp = getans(0, 0, n, st[0] - inv[i], n);

    // Answer for arr[i]
    ans.push(temp + 1);

    // Setting found value back to 0
    update(Math.max(0, temp), 0, 0, n);
  }

  return ans;
}

/*
 Write a function, bfs, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in breadth-first order.
      8
    /   \
   1     2
  / \     \
 9   4     3

 Output => [8, 1, 2, 9, 4, 3]
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach:
// Time & Space Complexity:
const bfs = (root) => {
  // TO DO
  const output = [];
  const queue = [root];
  while (queue.length > 0) {
    let current = queue.shift();

    output.push(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return output;
};

module.exports = { bfs };

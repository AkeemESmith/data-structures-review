/*
 Write a function, dfs, that takes in the root of a binary tree.
 The function should return an array containing all values of the tree in breadth-first order.
      8
    /   \
   1     2
  / \     \
 9   4     3

 Output => [8, 1, 9, 4, 2, 3]
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
const dfs = (root) => {
  // TO DO

  const output = [];
  const traverse = node => {
    if (!node) return;
    output.push(node.val);
    traverse(node.left);
    traverse(node.left);
  }
  traverse(root);
  return output;
};
module.exports = { dfs };

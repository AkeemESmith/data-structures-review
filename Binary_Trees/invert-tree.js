/**
Write a function, invertTree, that takes in the root of a binary tree.
The function should flip the binary tree, turning left subtrees into right subtrees and vice-versa. This flipping should occur in-place by modifying the original tree. The function should return the root of the tree


     a
   /    \
  b      c
 / \      \
d   e      f
   / \
   g  h

flipTree(a);

      a
   /    \
  c      b
 /     /   \
f     e    d
    /  \
   h    g
 * */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Approach:
// Time & Space Complexity:
const invertTree = (root) => {
  const traverse = node => {
    if (!node) return;
    let temp = node.right;
    node.right = node.left;
    node.left = temp;
    traverse(node.left)
    traverse(node.right)
  }
  traverse(root)
  return root
  
  // TO DO
};

module.exports = { invertTree };

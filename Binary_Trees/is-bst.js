/**
 Write a function, isBinarySearchTree, that takes in the root of a binary tree.
 The function should return a boolean indicating whether or not the tree satisfies the
 binary search tree property. A Binary Search Tree is a binary tree where all values within
 a node's left subtree are smaller than the node's value and all values in a node's right subtree
 are greater than or equal to the node's value.

     12
   /   \
  5     18
 / \     \
3   9     19

Output => true

     12
   /   \
  5     18
 / \     \
3   1     19

Output => false
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
const isBinarySearchTree = (root) => {
  // TO DO
  isBinary = true;
  const traverse = node => {
    if (!node) return;

    if (node.left.val > node.val || node.right.val < node.val) {
      isBinary = false
      return;
    } 
    traverse(node.left)
    traverse(node.right)
  }
  return isBinary;
  
};

module.exports = { isBinarySearchTree };

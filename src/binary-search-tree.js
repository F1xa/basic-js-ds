const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }
    let pointer = this.rootNode;
    while (true) {
      if (data < pointer.data) {
        if (pointer.left === null) {
          pointer.left = newNode;
          return;
        } else {
          pointer = pointer.left;
        }
        continue;
      }
      
      if (pointer.right === null) {
        pointer.right = newNode;
        return;
      } else {
        pointer = pointer.right;
      }
    }
  }

  has(data) {
    let pointer = this.rootNode;
    while (pointer !== null) {
      if (pointer.data === data) return true;
      if (data < pointer.data) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }
    return false;
  }

  find(data) {
    let pointer = this.rootNode;
    while (pointer !== null) {
      if (pointer.data === data) return pointer;
      if (data < pointer.data) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }
    return null;
  }

  remove(data) {
    this.rootNode = this.delNode(this.rootNode, data);
  }

  delNode(curNode, data) {
    if (curNode.data === data) {
      if (curNode.left === null && curNode.right === null) {
        return null;
      }
      if (curNode.left === null) {
        return curNode.right;
      }
      if (curNode.right === null) {
        return curNode.left;
      }
      let minNode = this.MinElement(curNode.right);
      curNode.data = minNode.data;
      curNode.right = this.delNode(curNode.right, minNode.data);
      return curNode;
    }
    if (data < curNode.data) {
      curNode.left = this.delNode(curNode.left, data);
      return curNode;
    }
    if (data > curNode.data) {
      curNode.right = this.delNode(curNode.right, data);
      return curNode;
    }
  }

  MinElement(node) {
    if (node.left === null) return node;
    return this.MinElement(node.left);
  }

  min() {
    let pointer = this.rootNode;
    while (pointer.left !== null) pointer = pointer.left;
    return pointer.data;
  }

  max() {
    let pointer = this.rootNode;
    while (pointer.right !== null) pointer = pointer.right;
    return pointer.data;
  }
}

module.exports = {
  BinarySearchTree
};
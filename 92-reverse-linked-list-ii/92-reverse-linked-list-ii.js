/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let currNode = head;
	let prevNode = null, nextNode = null;
	let count = 1;

	while(count < left) {
		prevNode = currNode;
		currNode = currNode.next;
		count++;
	}

	let prevLeftNode = prevNode;
	let leftNode = currNode;
	prevNode = null;

	while(count <= right) {
		nextNode = currNode.next;
		currNode.next = prevNode;
		prevNode = currNode;
		currNode = nextNode;
		count++;
	}
	
	if(prevLeftNode != null)
		prevLeftNode.next = prevNode;
	
	leftNode.next = currNode;

	return left == 1 ? prevNode : head;
};
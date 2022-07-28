/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head, count = 0;
    //Count all the nodes.
    while(node !== null) {
        node = node.next;
        count ++;
    }
    //Special case: we want to delete the only node on list
    if(count === 1 && n === 1) return null;
    
    //Get the node before the one to be deleted
    let limit = count - n;
    node = head;
    for (let i = 1; i < limit; i++) {
        node = node.next;
    }
    
    //Delete the node
    if (limit === 0) head = head.next; //Special case: when deleting the first node
    else node.next = node.next.next;
    
    return head;
};
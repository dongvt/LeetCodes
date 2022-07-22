/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    //just create two new lists and then join them.
    
    
    let left = new ListNode(-1), leftHead = left;
    let right = new ListNode(-1), rightHead = right;
    
    while(head !== null) {
        if(head.val < x) {
            left.next = head;
            left = left.next;
        } else {
            right.next = head;
            right = right.next;
        }
        
        head = head.next;
    }
    
    right.next = null;
    
    left.next = rightHead.next;
    
    return leftHead.next;
    
    
};